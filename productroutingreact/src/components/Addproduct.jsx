import axios from 'axios'
import React, { useState } from 'react'
const initialstate = {
  title: "",
  description: "",
  price: "",
  image: "",
  category: ""
}
const Addproduct = () => {
  const [formdata, setformdata] = useState(initialstate)
  const handlechange = (e) => {
    setformdata({...formdata,[e.target.name]: e.target.value})

  }
  const { title, image, description, category, price } = formdata
  const handlesubmit =(e)=>{
    e.preventDefault()
   //add product function
   axios.post("http://localhost:3000/products",formdata)
   .then((res)=>{
    alert("Product Added...")
    setformdata(initialstate)

   })
   .catch((err)=>console.log(err))

  }
  return (
    <div style={{display:"flex-column", textAlign: "center"}}>
      <form action="" onSubmit={(e)=>handlesubmit(e)}>
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

export default Addproduct
