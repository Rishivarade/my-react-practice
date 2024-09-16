import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ProductsTable(){
    const [data,setdata]=useState([])
    const getdata=()=>{
        fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
        .then(response=>response.json())
        .then(data=>setdata(data.data))
        .catch((err)=>console.log(err))
        
    }
    useEffect(()=>{
        getdata()
    },[])
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {data.map(({id,price,category,brand}) => {
                        return (
                           
                            <tr key={id}>
                                <td>{id}</td>
                                <td><Link style={{
                                    textDecoration:"none",
                                    color:"black"
                                }} to={`/products/${id}`}>{brand}</Link></td>
                                <td>{category}</td>
                                <td>{price}</td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
    )
}

export default ProductsTable