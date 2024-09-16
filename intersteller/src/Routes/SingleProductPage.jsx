import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function SingleProductPage(){
    const[product,setproduct]=useState({})
    const {id}=useParams(   )
    const getproduct=()=>{
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
        .then(response=>response.json())
        .then(data=>setproduct(data.data))
        .catch((err)=>console.log(err))

    }

    useEffect(()=>{
        getproduct()
    },[])

    return (
        <div data-testid="products-container" key={product.id}>   
            <div>
                <h3 data-testid="product-brand">
                    {product.brand}
                </h3>
            </div>
            <div >
            <img data-testid="product-image" src={product.img} width={200} height={200}/>
            </div>
            <div data-testid="product-category">
                {product.category}
            </div>
           
            <div data-testid="product-details">
                {product.details}
            </div>
            <div data-testid="product-price">
                {product.price}
            </div>

            </div>
    )
}
export default SingleProductPage