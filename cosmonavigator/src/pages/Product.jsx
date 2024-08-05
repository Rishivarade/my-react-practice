import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { themecontext } from '../Context/ThemeContext';
let url = 'http://localhost:3000/products'
const Product = () => {
  const {theme } = useContext(themecontext)
  const [filterProduct, setfilterProduct] = useState([])
  const [product, setProduct] = useState([])
  const [productone, setProductone] = useState([])
  const [producttwo, setProducttwo] = useState([])
  const [productthree, setProductthree] = useState([])
  const [productfour, setProductfour] = useState([])
  const [productfive, setProductfive] = useState([])
  const [productSix, setProductSix] = useState([])
  const [productseven, setproductseven] = useState([])
  const ProductfromServer = () => {
    axios.get(url, {
      params: {
        _limit: 9
      }
    })
      .then((res) => {
        setfilterProduct(res.data)
      })
      .catch((err) => console.log(err))
  }
  const moreproduct = () => {
    axios.get(url, {
      params: {
        _limit: 4,
        _start: 8
      }
    })
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => console.log(err))
  }
  const productonedata = () => {
    axios.get(url, {
      params: {
        _limit: 6,
        _start: 12
      }
    })
      .then((res) => {
        setProductone(res.data)
      })
      .catch((err) => console.log(err))
  }
  const producttwodata = () => {
    axios.get(url, {
      params: {
        _limit: 12,
        _start: 18
      }
    })
      .then((res) => {
        setProducttwo(res.data)
      })
      .catch((err) => console.log(err))
  }
  const productthreedata = () => {
    axios.get(url, {
      params: {
        _limit: 3,
        _start: 30
      }
    })
      .then((res) => {
        setProductthree(res.data)
      })
      .catch((err) => console.log(err))
  }
  const productfourdata = () => {
    axios.get(url, {
      params: {
        _limit: 33,
        _start: 33
      }
    })
      .then((res) => {
        setProductfour(res.data)
      })
      .catch((err) => console.log(err))
  }
  const productfivedata = () => {
    axios.get(url, {
      params: {
        _limit: 17,
        _start: 66
      }
    })
      .then((res) => {
        setProductfive(res.data)
      })
      .catch((err) => console.log(err))
  }
  const productsixdata = () => {
    axios.get(url, {
      params: {
        _limit: 4,
        _start: 83
      }
    })
      .then((res) => {
        setProductSix(res.data)
      })
      .catch((err) => console.log(err))
  }
  const productsevendata = () => {
    axios.get(url, {
      params: {
        _limit: 12,
        _start: 87
      }
    })
      .then((res) => {
        setproductseven(res.data)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    ProductfromServer()
    moreproduct()
    productonedata()
    producttwodata()
    productthreedata()
    productfourdata()
    productfivedata()
    productsixdata()
    productsevendata()
  }, [])
  return (
    <>
      {/*Top Product */}
      <div className="proimg mt-5" id='up'>
        <h1 className='' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px", color: "white", fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Design Inspires What You Do</h1>
        <div className="line col-11 col-md-11 d-sm-none d-md-flex" style={{display:"flex",fontSize:"14px",justifyContent:"space-between",fontFamily:"din-2014,helvetica,sans-serif",border:"1px solid grey",backgroundColor: theme == "light" ? "white" : "black",color: theme == "light" ? "black" : "white"}}>
      <ul className='col-2 p-2 pt-3 ps-5 ps-md-2' style={{listStyle:"none"}}><strong>SHOP</strong>
        <li className='mb-1 mt-3'><a href="">Black Collection</a></li>
        <li className='mb-1'><a href="">Walnut Collection</a></li>
        <li className='mb-1'><a href="">White Oak Collection</a></li>
        <li className='mb-1'><a href="">Maple Collection</a></li>
        <li className='mb-1'><a href="">Shop All</a></li>
      </ul>
      <ul className='col-2 p-2 pt-3 ps-5 ps-md-2  ' style={{listStyle:"none"}}><strong>MOUSE/DESK PADS</strong>
        <li className='mb-1 mt-3'><a href="">Desk Pads</a></li>
        <li className='mb-1'><a href="">Mouse Pads</a></li>
        <li className='mb-1'><a href="">Coasters</a></li>
      </ul>
      <ul className='col-2 p-2 pt-3 ps-5 ps-md-2  ' style={{listStyle:"none"}}><strong>STANDS</strong>
        <li className='mb-1 mt-3'><a href=""> Desk Shelves</a></li>
        <li className='mb-1'><a href="">Monitor Stands</a></li>
        <li className='mb-1'><a href="">Laptop Stands</a></li>
        <li className='mb-1'><a href="">Headphone Stands</a></li>
        <li className='mb-1'><a href="">iPhone Docks</a></li>
        <li className='mb-1'><a href="">iPad Stands</a></li>
      </ul>
      <ul className='col-2 p-2 pt-3 ps-5 ps-md-2  ' style={{listStyle:"none"}}><strong>TOOLS</strong>
        <li className='mb-1 mt-3'><a href="">Pens</a></li>
        <li className='mb-1'><a href="">Stationery</a></li>
        <li className='mb-1'><a href="">Notebooks</a></li>
        <li className='mb-1'><a href="">Note-Taking Kit</a></li>
        <li className='mb-1'><a href="">Trays</a></li>
        <li className='mb-1'><a href="">Pen Cups & Planters</a></li>
      </ul>
      <ul className='col-2 p-4 pt-3 ps-5 ps-md-2  ' style={{listStyle:"none"}}><strong>KEYBOARD</strong>
        <li className='mb-1 mt-3'><a href="">Apple Keyboard Tray</a></li>
        <li className='mb-1'><a href="">MX Keys Keyboard Tray</a></li>
        <li className='mb-1'><a href="">Apple Trackpad Tray</a></li>
        <li className='mb-1'><a href="">Wrist Rests</a></li>
      </ul>
      <ul className='col-2 p-2 pt-3 ps-5 ps-md-2  ' style={{listStyle:"none"}}><strong>FURNITURE</strong>
        <li className='mb-1 mt-3'><a href="">Desk</a></li>
        <li className='mb-1'><a href="">Catch-All</a></li>
        <li className='mb-1'><a href="">Wall Shelves</a></li>
        <li className='mb-1'><a href="">Lighting</a></li>
      </ul>
      </div>
      </div>
      <div className="onepro mt-5">
        {filterProduct.map((el) => (
          <div className="scale col-4 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-start col-5 text-sm-center text-md-center" key={el.id} >
            <Link style={{ textDecoration: "none",color: theme == "light" ? "grey" : "white"}} to={`/description/${el.id}`}>
              <img src={el.image} alt=""  />
              <p>{el.title}</p>
              <p>${el.price}</p>
            </Link>
          </div>
        ))}
      
   

      </div>
  
      
      <div className="div mt-5 d-flex">
        <div className="col-4 text-center d-sm-none d-lg-block">
          <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fdesk-shelf-system-feature-A3.jpg?auto=format&ixlib=python-1.1.2&w=500&s=7ad52140e5aa0aa1203a90357c74924a" width={380} alt="" />
          <h6 className='mt-4'>All Together Now</h6>
          <p>Our Desk Shelf System elevates your <br /> entire workspace and your workflow— <br />get improved ergonomics, ample room <br /> for multiple monitors, and just the right <br /> storage space.</p>
          <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
        </div>
        <div className="twopro col-8 col-sm-12 col-md-8">
          {product.map((el) => (
            <div className="scale col-12 col-md-6 text-start text-sm-center " key={el.id} style={{ color: "grey" }} >
              <Link style={{ textDecoration: "none",color: theme == "light" ? "grey" : "white"}} to={`/description/${el.id}`}>
                <img src={el.image} alt="" width={300} />
                <p>{el.title}</p>
                <p>${el.price}</p>
              </Link>
            </div>

          ))}
        </div>
      </div>
      <div className="div col-11 m-auto mt-5 d-flex justify-content-between align-items-center d-sm-none d-md-none d-lg-flex">
        <div className="col-4" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "px", alignItems: "center" }}>
          {productone.map((el) => (
            <div className="div scale" key={el.id} style={{ color: "grey" }} >
              <Link style={{ textDecoration: "none",color: theme == "light" ? "grey" : "white" }} to={`/description/${el.id}`}>
              <img src={el.image} alt="" width={300} />
              <p>{el.title}</p>
              <p>${el.price}</p>
              </Link>
             
            </div>
          ))}
        </div>

        <div className="col-2 text-center">
          <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Ffeature-note-taking-kit-A1.jpg?auto=format&ixlib=python-1.1.2&w=300&s=30ce17d2076884b7ca3b8697537a48b6" alt="" />
          <h6 className='mt-4'>The Note-Taking Kit</h6>
          <p>The Note-Taking Kit is designed <br /> to help you clear the clutter, <br />organize your thoughts, and <br />keep your important tasks top of <br /> mind.  </p>
          <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
        </div>
      </div>
      <div className="threepro col-11 m-auto col-sm-12">
        {producttwo.map((el) => (
          <div className="scale  col-sm-12 col-md-6 col-lg-4 text-center" key={el.id} style={{ color: "grey" }} >
            <Link style={{ textDecoration: "none",color: theme == "light" ? "grey" : "white" }} to={`/description/${el.id}`}>
              <img src={el.image} alt="" width={400} />
              <p>{el.title}</p>
              <p>${el.price}</p>
            </Link>

          </div>
        ))}
      </div>
      <div className="div text-center mt-5 d-flex d-sm-none d-md-none d-lg-flex">
        <div className="col-3">
          <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fheadphone-stand-feature-A2.jpg?auto=format&ixlib=python-1.1.2&w=300&s=55323ef6fb2365585f9b433fff0c408d" width={250} alt="" />
          <h6 className='mt-4'>The Headphone Stand</h6>
          <p>Premium materials and a unique <br /> design make a great home for <br /> your headphones. </p>
          <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>READ MORE</button>
        </div>
        <div className="text-start col-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "5px", alignItems: "center" }}>
          {productthree.map((el) => (
            <div className="scale" key={el.id} style={{ color: "grey" }}  >
              <Link style={{ textDecoration: "none",color: theme == "light" ? "grey" : "white"}} to={`/description/${el.id}`}>
                <img src={el.image} alt="" width={300} />
                <p>{el.title}</p>
                <p>${el.price}</p>
              </Link>

            </div>
          ))}
        </div>

      </div>
      <div className="fourpro text-center col-12 text-center">
        {
          productfour.map((el) => (
            <div className="scale col-sm-12 col-md-6 col-lg-4" key={el.id} style={{ color: "grey" }}  >
              <Link style={{ textDecoration: "none", color: theme == "light" ? "grey" : "white"}} to={`/description/${el.id}`}>
                <img src={el.image} alt="" width={300} />
                <p>{el.title}</p>
                <p>${el.price}</p>
              </Link>

            </div>
          ))
        }
      </div>
      <div className="text-center col-12 d-sm-none d-md-none d-lg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "5px", alignItems: "center" }}>
        {
          productfive.map((el) => (
            <div className="scale" key={el.id} style={{ color: "grey" }} >
              <Link style={{ textDecoration: "none",color: theme == "light" ? "grey" : "white"}} to={`/description/${el.id}`}>
                <img src={el.image} alt="" width={200} />
                <p>{el.title}</p>
                <p>${el.price}</p>
              </Link>

            </div>
          ))
        }
      </div>
      <div className="div text-center d-sm-none d-md-none d-lg-flex" style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="col-8" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "5px", alignItems: "center" }}>
          {productSix.map((el) => (
            <div className="scale" key={el.id} style={{ color: "grey" }} >
              <Link style={{ textDecoration: "none",color: theme == "light" ? "grey" : "white"}} to={`/description/${el.id}`}>
                <img src={el.image} alt="" width={300} />
                <p>{el.title}</p>
                <p>${el.price}</p>
              </Link>

            </div>
          ))}
        </div>
        <div className="col-3">
          <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fdesk-shelf-system-feature-B2.jpg?auto=format&ixlib=python-1.1.2&w=500&s=86ba00386c977999269c9eee8dc09e48" width={400} alt="" />
          <h6 className='mt-4'>A Seamless Workspace</h6>
          <p>Our Maple Desk Shelf System is <br /> designed to work best as a coordinated <br /> whole within the modern workspace. Get <br /> the system and see how easy switching <br />from emails to doodles can be. </p>
          <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
        </div>
      </div>
      <div className="col-10 m-auto d-sm-none d-md-none d-lg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "5px", alignItems: "center" }}>
        {productseven.map((el) => (
          <div className="scale text-start" key={el.id} style={{ color: "grey" }} >
            <Link style={{ textDecoration: "none", color: theme == "light" ? "grey" : "white"}} to={`/description/${el.id}`}>
              <img src={el.image} alt="" width={500} />
              <p>{el.title}</p>
              <p>${el.price}</p>
            </Link>

          </div>
        ))}
      </div>

      {/*Design Inspire*/}
      <div className="div" style={{ textAlign: "center" }}>
        <div className="col-11 m-auto mt-5 bg-secondary" style={{ height: "400px", alignContent: "center", color: "white" }}>
          <img src="https://siteleaf.grovemade.com/uploads/gm_logo_small.png" alt="" />
          <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Design Inspires</h3>
          <p>Build your dream workspace, so you can get your best work done.</p>
        </div>
      </div>
      {/*Footer*/}
      <div className="container-fluid col-11 mt-5" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="row d-flex">
          <div className="col-2 col-sm-12 text-sm-center col-md-3 col-lg-2 text-md-start">
            <h5 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Shop  <br /><br />About <br /><br />Journal <br /><br />Support <br /><br />Order Status</h5>
          </div>
          <div className="col-5 col-sm-12 text-sm-center col-md-7 col-lg-5">
            <h5 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia, serif" }}>Newsletter Signup</h5><br />
            <em fontStyle='surveyor text a, surveyor text b, Georgia, serif'>Sign up to our Newsletter to hear about new product releases, learn about our design process, and <br /> everything else going on behind the scenes at Grovemade.</em><br /><br />
            <input type="email" placeholder="Enter Your Email" style={{ height: "40px", padding: "10px", border: "none", borderBottom: "1px solid black" }} />
            <button style={{ border: "none", backgroundColor: "white", borderBottom: "1px solid black", fontWeight: "bold", fontFamily: "din-2014,helvetica,ssans-serif", padding: "6px" }}>SUBSCRIBE</button>
          </div>
        </div>
        <a className='col-1 text-center pt-2 pb-2 d-sm-none d-md-block' href='#up' style={{ textDecoration: "none", backgroundColor: theme == "light" ? "black" : "white",color: theme == "light" ? "white" : "black", alignContent: "center", fontFamily: "din-2014,helvetica,ssans-serif" }}>GO <br /> UP</a>
      </div>
      <div className="div mt-5 d-flex justify-content-between d-sm-none d-md-none d-lg-flex">
        <div className="col-1">
          <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "20px" }}>
            <li><a href="" style={{ color: "black" }}><FaFacebookF /></a></li>
            <li><a href="" style={{ color: "black" }}><IoLogoInstagram /></a></li>
            <li><a href="" style={{ color: "black" }}><FaLinkedin /></a></li>
          </ul>
        </div>
        <div className="col-8">
          <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", alignItems: "center", fontStyle: "italic", fontFamily: "surveyor text a, surveyor text b, Georgia, serif", fontSize: "15px" }}>
            <li style={{ color: "grey" }}>©2024 Grovemade</li>
            <li style={{ color: "grey" }}>Terms & Conditions</li>
            <li style={{ color: "grey" }}>Accessibility Statement</li>
            <li style={{ color: "grey" }}>Privacy Policy</li>
            <li>Site by Department</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Product
