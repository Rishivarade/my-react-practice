import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Descriptionpage = () => {
    const [descriptionpro, setdescriptionpro] = useState({})
  const params = useParams()
  const Descriptiondata = () => {
    axios.get(`http://localhost:3000/products/${params.id}`)
      .then((res) => {
        setdescriptionpro(res.data)
        console.log(res.data)
    })
      .then((err) => console.log(err))

  }
  useEffect(() => {
    Descriptiondata()
  }, [])
  return (
    <div className='' style={{textAlign: "center", marginTop: "10px", color: "black",}}>
      <h1>Product Description</h1>
      <div className="col-9 m-auto d-flex justify-content-between align-items-center">
      <img src={descriptionpro.image} alt="" height={500} width={500} />
      <div className="div">
      <h3>{descriptionpro.title}</h3>
      <h3>{descriptionpro.price}</h3>
      {/* <h5>{descriptionpro.category}</h5>
      <p>{descriptionpro.description}</p> */}
      <button>ADD TO CART</button>
      </div>
      </div>

    </div>
  )
}

export default Descriptionpage
