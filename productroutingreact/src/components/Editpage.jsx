import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const initialstate = {
    title: "",
    description: "",
    price: "",
    image: "",
    category: ""
}
const Editpage = () => {
    const [formdata, setformdata] = useState(initialstate)
    const params=useParams()
    const editpro = () => {
        axios.get(`http://localhost:3000/products/${params.id}`)
            .then((res) => {
                console.log(res.data)
                setformdata(res.data)               
            })
            .catch((err) => console.log(err))
    }
    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const{title,image,price,category,description}=formdata
    const handlesubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/products/${params.id}`,formdata)
        .then((res)=>{
            console.log(res.data)
            alert("Updated...")

        })
        .catch((err)=>console.log(err))
    }
   
    useEffect(() => {
        editpro()
    }, [])
    return (
        <div>
            <h1>Edit Product</h1>
            <form action="" onSubmit={(e) => handlesubmit(e)}>
                <input type="text" placeholder='image' name='image' value={image} onChange={(e) => handlechange(e)} />
                <input type="text" placeholder='title' name='title' value={title} onChange={(e) => handlechange(e)} />
                <select name="category" value={category} onChange={(e) => handlechange(e)} id="">
                    <option value="">Select Your Category </option>
                    <option value="Mens Clothing">Mens Clothing</option>
                    <option value="Jwellery">Jwellery</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Womens Clothing">Womens Clothing</option>
                </select>
                <input type="text" placeholder='price' name='price' value={price} onChange={(e) => handlechange(e)} />
                <input type="text" placeholder='description' name='description' value={description} onChange={(e) => handlechange(e)} />
                <input type="submit" />
            </form>

        </div>
    )
}

export default Editpage
