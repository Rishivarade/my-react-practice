import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {

    const [descriptionpro,setdescriptionpro]=useState({})
    const params=useParams()
    const Descriptiondata=()=>{
        axios.get(`http://localhost:3000/products/${params.id}`)
        .then((res)=>setdescriptionpro(res.data))
        .then((err)=>console.log(err))

    }
    useEffect(()=>{
        Descriptiondata()
    },[])
  return (
    <div style={{display:"flex-row",justifySelf:"center",textAlign:"center",width:"50%",border:"2px solid black",margin:"auto",marginTop:"10px"}}>
        <h1>{descriptionpro.id}</h1>
        <img src={descriptionpro.image} alt="" height={200} width={200}/>
        <h3>{descriptionpro.title}</h3>
        <h3>{descriptionpro.price}</h3>
        <h5>{descriptionpro.category}</h5>
        <p>{descriptionpro.description}</p>
      
    </div>
  )
}

export default Description
