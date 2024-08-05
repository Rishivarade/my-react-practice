import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { themecontext } from '../Context/ThemeContext';

let url = 'http://localhost:3000/products'
const Descriptionpage = () => {
  const { theme } = useContext(themecontext)
  const [descriptionpro, setdescriptionpro] = useState({})
  const [filterProduct, setfilterProduct] = useState([])
  const params = useParams()
  const Descriptiondata = () => {
    axios.get(`http://localhost:3000/products/${params.id}`)
      .then((res) => {
        setdescriptionpro(res.data)
      })
      .then((err) => console.log(err))
  }

  const ProductfromServer = () => {
    axios.get(url, {

    })
      .then((res) => {
        setfilterProduct(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    Descriptiondata()
    ProductfromServer()

  }, [])
  return (
    <>
      <div id='above' className='container' style={{ textAlign: "center", marginTop: "10px", }}>
        <div className="col-10 m-auto mt-5 d-flex flex-sm-column flex-lg-row justify-content-between align-items-center">
          <img src={descriptionpro.image} alt="" height={350} width={400} />
          <div className="div col-3 col-sm-6 col-lg-3">
            <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia, serif", fontStyle: "italic" }}>{descriptionpro.title}</h3>
            <select className='col-12 p-2 mt-5 mb-3' name="" id="">
              <option value="">Select Colour</option>
             <option value="">Black</option>
             <option value="">White</option>
             <option value="">Maple</option>
             <option value="">Walnut</option>
            </select>
            <select className='col-12 p-2 mt-2 mb-3' name="" id="">
              <option value="">Select Size</option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
            <h4>${descriptionpro.price}</h4>
           
              <button className='col-12 p-2 mt-4' style={{ border: "0px", backgroundColor: theme == "light" ? "black" : "white", color: theme == "light" ? "white" : "black", fontFamily: "din-2014,helvetica,sans-serif", fontSize: "14px" }} onClick={
                () => {
                  axios.post('http://localhost:3000/cart', {
                    id: descriptionpro.id,
                    quantity: 1,
                    price: descriptionpro.price,
                    image: descriptionpro.image,
                    title:descriptionpro.title}
                    )
                    .then((res) => {
                      alert('**PRODUCT ADDED TO CART...**')
                      console.log(res.data)
                    })
                    .catch((err) => console.log(err))
                    }}>ADD TO CART</button>
              
          </div>
         
        </div>
      </div>
      <hr className='mt-5 mb-5' />
      <div className="container text-center mt-5">
        <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia, serif" }}>Elevated and Organized</h3>
        <p style={{ color: "grey" }}>The Grovemade Desk Shelf provides an ergonomic lift and multiple sizes to fit all your devices and screens. <br /> It’s designed to last a lifetime and is suited to the modern work configuration. We craft it from 15-ply <br /> premium hardwood plywood, aluminum, and natural cork hand stained with Japanese calligraphy ink.</p>
        <p style={{ color: "grey" }}>Supports monitors up to 50 lbs. See below for detailed <span style={{ color: "crimson~" }}>sizing specs.</span></p>
      </div>
       {/**Product Slider */}
      <div className="col-12 mt-5 col-sm-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className=""
        >
          <SwiperSlide><img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-desk-shelf-ply-walnut-small-galB-C3.jpg?auto=format&ixlib=python-1.1.2&w=900&s=cde69f13d2aab0ad16103e33aef40631"  alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-walnut-desk-shelf-galB-H3.jpg?auto=format&ixlib=python-1.1.2&w=900&s=36501f22395bfcf281f50e491400a9ec" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-desk-shelf-ply-walnut-small-galB-D2.jpg?auto=format&ixlib=python-1.1.2&w=900&s=26659bec32026fe159f620e99a6bd064" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-desk-shelf-ply-walnut-small-galB-A4.jpg?auto=format&ixlib=python-1.1.2&w=900&s=2dee1f6c880d9fba4fcc3a1a02ddb6df" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-walnut-desk-shelf-galB-F4.jpg?auto=format&ixlib=python-1.1.2&w=900&s=d691d6d3b82f87541adf2971a394b3db" alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-7 col-sm-12 ">
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-walnut-desk-shelf-galB-D3.jpg?auto=format&ixlib=python-1.1.2&w=700&s=d845136d63cacca8649795f12957b04a" width={500} alt="" />
          </div>
          <div className="col-4 col-sm-12">
            <h3>Shelve It</h3>
            <p style={{ fontStyle: "italic", fontFamily: "surveyor text a, surveyor text b, Georgia, serif", fontSize: "14px" }}>We designed an integrated shelf, for storing books, trays, notebooks—any of your work tools that you need close at hand. The shelf has a curved back to prevent things from falling off.</p>
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-between align-items-center">
          <div className="col-4  col-sm-12">
            <h3>Line It Up</h3>
            <p style={{ fontStyle: "italic", fontFamily: "surveyor text a, surveyor text b, Georgia, serif", fontSize: "14px" }}>Pair the medium desk shelf with our laptop riser, for a solution that brings your monitor and laptop screen (satisfyingly) into the same plane. Everything lined up just so!</p>
          </div>
          <div className="col-7  col-sm-12">
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-desk-shelf-walnut-medium-galC-A1.jpg?auto=format&ixlib=python-1.1.2&w=700&s=352a7a05cb2de372ffba7c1eb87d92e5" width={500} alt="" />
          </div>
        </div>
         {/*Video */}
        <div className="row mt-5 d-flex justify-content-between align-items-center">
          <div className="col-7 col-sm-6 col-md-7">
            <iframe width="500" height="365" src="https://www.youtube.com/embed/ehKz5ViK0VI" title="How to Build a DIY Monitor Desk Stand - Make Your Own Grovemade Desk Shelf!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-3 col-sm-12">
            <h3>Made the Hard Way</h3>
            <p style={{ fontStyle: "italic", fontFamily: "surveyor text a, surveyor text b, Georgia, serif", fontSize: "14px" }}>Each Grovemade Desk Shelf is made by hand in the USA and finished to perfection.</p>
          </div>
        </div>
      </div>
      <hr />
       {/*Guide */}
      <div className="container mt-5 text-center">
        <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia, serif" }}>Sizing Guide</h3>
        <p>The desk shelf is designed to support multiple devices and configurations. See the measurements below to <br />make sure it will work for your home office.</p>
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fdiagram-desk-shelf-sizing-A1.png?auto=format&ixlib=python-1.1.2&w=700&s=3672a304fc694c0c7ded4e044bfa693e" width={500} alt="" />
      </div>
      <hr />
      <div className="div container d-md-none d-lg-block">
        <div className="div mt-5" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Shop the Collection</h3>
        </div>
        {/**Slider */}
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          className="mySwiper mb-5 col-sm-12"
          modules={[Pagination]}
        >
          {
            filterProduct.map((el) => (
              <SwiperSlide key={el.id}>
                <div className="div text-start" key={el.id} style={{ color: "grey" }}>
                  <img src={el.image} alt="" height={200} width={200} />
                  <p className='mt-4'>{el.title}</p>
                  <p>${el.price}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      {/*Design Inspire*/}
      <div className="div mt-5" style={{ textAlign: "center" }}>
        <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Make Work Meaningful</h3>
        <p>We're here because we believe that your work deserves the best. A team that loves working together is the <br /> magic that makes it all happen.</p>
        <button className='mt-5 mb-5' style={{ border: "none", backgroundColor: "white", borderBottom: "1px solid black", fontWeight: "bold", fontFamily: "din-2014,helvetica,sans-serif" }}>READ MORE ABOUT OUR STORY</button>
        <div className="col-11 m-auto mt-5 bg-secondary" style={{ height: "400px", alignContent: "center", color: "white" }}>
          <img src="https://siteleaf.grovemade.com/uploads/gm_logo_small.png" alt="" />
          <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Design Inspires</h3>
          <p>Build your dream workspace, so you can get your best work done.</p>
        </div>
      </div>
      {/*Footer*/}
      <div className="container-fluid col-11 mt-5" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="row d-flex">
          <div className="col-2">
            <h5 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Shop  <br /><br />About <br /><br />Journal <br /><br />Support <br /><br />Order Status</h5>
          </div>
          <div className="col-5">
            <h5 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia, serif" }}>Newsletter Signup</h5><br />
            <em fontStyle='surveyor text a, surveyor text b, Georgia, serif'>Sign up to our Newsletter to hear about new product releases, learn about our design process, and <br /> everything else going on behind the scenes at Grovemade.</em><br /><br />
            <input type="email" placeholder="Enter Your Email" style={{ height: "40px", padding: "10px", border: "none", borderBottom: "1px solid black" }} />
            <button style={{ border: "none", backgroundColor: "white", borderBottom: "1px solid black", fontWeight: "bold", fontFamily: "din-2014,helvetica,ssans-serif", padding: "6px" }}>SUBSCRIBE</button>
          </div>
        </div>
        <a className='col-1 text-center pt-2 pb-2' href='#above' style={{ textDecoration: "none", backgroundColor: theme == "light" ? "black" : "white",color: theme == "light" ? "white" : "black", alignContent: "center", fontFamily: "din-2014,helvetica,ssans-serif" }}>GO <br /> UP</a>
      </div>
      <div className="div mt-5" style={{ display: "flex", justifyContent: "space-between" }}>
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

export default Descriptionpage
