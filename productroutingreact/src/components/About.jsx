import axios from 'axios'
import React, { useEffect, useState } from 'react'
//Get Function
const About = () => {
  const [product, setproduct] = useState([])
  const [page, setpage] = useState(1)
  const ProductFromserver = () => {
    axios.get(`http://localhost:3000/products?_page=${page}&_limit=5`)
      .then((res) => setproduct(res.data))
      .catch((err) => console.log(err))
  }
  //Delete Data Function
  const deletePro = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Deleted...")
        ProductFromserver()
      })
      .catch((err) => console.log(err))
  }
  const handlelogout=()=>{
    localStorage.removeItem('token')
    alert("Log Out..")
    window.location.href="/login"    
  }
  useEffect(() => {
    ProductFromserver()
  }, [page])
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Product</h1> <button onClick={handlelogout}>LOG OUT</button>
      <hr />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "5px", textAlign: "center" }}>
        {product.map((el) => (
          <div key={el.id} style={{ boxShadow: " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" }}>
            <img src={el.image} alt="" height={200} width={200} />
            <h3>{el.title}</h3>
            <h3>{el.price}</h3>
            <p>{el.description}</p>
            <button>Edit</button>
            <button onClick={() => deletePro(el.id)}>Delete</button>

          </div>
        ))}

      </div>
      {/*pagination product*/}
      <div className="div" style={{display:"flex",justifyContent:"center",marginTop:"15px"}}>
        <button onClick={()=>setpage(page-1)} disabled={page==1}>PREV</button>
        <span>{page}</span>
        <button onClick={()=>setpage(page+1)}>NEXT</button>
      </div>
    </div>
  )
}

export default About
