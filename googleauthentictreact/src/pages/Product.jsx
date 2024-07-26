import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [data,setdata]=useState([])
    const getdata=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setdata(res.data)
            console.log(res.data)
        })
        .catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
        getdata()
    },[])
  return (

    <div>
      <h1>product</h1>
      <div className="div" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      {data.map((el)=>(
        <div className="div" key={el.id}>
            <img src={el.image} alt="" height={200} width={200}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Product
