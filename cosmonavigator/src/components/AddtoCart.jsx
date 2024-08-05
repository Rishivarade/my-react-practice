import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { themecontext } from '../Context/ThemeContext';
import { FaFacebookF, FaLinkedin, FaMinus, FaPlus } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';

const AddtoCart = () => {
  const { theme } = useContext(themecontext);
  const [cart, setCart] = useState([]);
  
  const cartData = () => {
    axios.get(`http://localhost:3000/cart`)
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  };
  
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then((res) => {
        console.log(res.data);
        alert('DELETED..');
        cartData();
      })
      .catch((err) => console.log(err));
  };
  
  const updateQuantity = (id, quantity) => {
    axios.patch(`http://localhost:3000/cart/${id}`, { quantity })
      .then((res) => {
        console.log(res.data);
        cartData();
      })
      .catch((err) => console.log(err));
  };
  
  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      updateQuantity(id, quantity);
    }
  };
  
  const handleThank = () => {
   if(cart.length === 0){
    alert('Your cart is empty');
   }else{
    alert('Thank you for shopping with us');
   }
   
  };
  
  useEffect(() => {
    cartData();
  }, []);
  
  return (
    <>
      <div id='oncart' className='cart col-12'>
        <div className="col-6 col-sm-12 col-md-10 col-lg-6 m-auto">
          <h1 className='text-center mt-5'>My Cart</h1>
          <button className='col-12 p-2 mb-3' style={{ border: "0px", backgroundColor: theme === "light" ? "black" : "white", color: theme === "light" ? "white" : "black", fontFamily: "din-2014,helvetica,sans-serif"}} onClick={handleThank}>CONTINUE TO CHECK OUT</button>
          {
            cart.length === 0 ?
              <div className='text-center mt-5 mb-5'>
                <h1>Your Bag is Empty</h1>
                <Link to={'/product'}>
                  <button className='col-3 p-2 mt-3' style={{ border: "0px", backgroundColor: theme === "light" ? "black" : "white", color: theme === "light" ? "white" : "black" }}>BACK TO SHOP</button>
                </Link>
              </div> :
              cart.map((el) => (
                <div className="col-12 d-flex justify-content-evenly align-items-center" key={el.id}>
                  <div className="col-4 text-center mb-3">
                    <img src={el.image} alt="" width={200} height={200} />
                  </div>
                  <div className="col-6 text-start">
                    <p>{el.title}</p>
                    <div>
                      <button className='me-1' style={{border:"0px", backgroundColor: theme === "light" ? "black" : "white", color: theme === "light" ? "white" : "black"}} onClick={() => handleQuantityChange(el.id, el.quantity - 1)}>-</button>
                       <span>Quantity: {el.quantity}</span>
                      <button className='ms-1' style={{border:"0px", backgroundColor: theme === "light" ? "black" : "white", color: theme === "light" ? "white" : "black"}} onClick={() => handleQuantityChange(el.id, el.quantity + 1)}>+</button>
                    </div>
                    <span className='text-danger'>U.S. CUSTOMERS: Ships by 8/6/2024 <br />INT'L CUSTOMERS: Ships by 8/9/2024</span>
                  </div>
                  <div className="col-2 text-center">
                    <p><strong>${(el.price * el.quantity)}</strong></p>
                    <button style={{ border: "0px", borderBottom: "1px solid black" }} onClick={() => deleteProduct(el.id)}>Remove</button>
                  </div>
                </div>
              ))
          }
        </div>
        <div className="col-6 m-auto d-flex justify-content-between">
          <h4 style={{fontFamily:"din-2014, helvetica, sans-serif"}}>Subtotal:</h4>
          <h4><strong>$ {cart.reduce((acc, current) => acc + current.price * current.quantity, 0)}</strong></h4>
        </div>
        <hr />
        <div className="col-12">
          <p className='text-danger text-center'>INTERNATIONAL ORDERS: Customs fees are not included in the shipping costs, and must be <br /> paid fully by receiver upon import.</p>
        </div>
        <div className="col-12 text-center mt-5">
          <h3>Frequently bought together</h3>
          <p>Most items ship together, but some items may ship separately.</p>
        </div>
        {/*Design Inspire*/}
        <div className="div mt-5" style={{ textAlign: "center" }}>
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
      </div>
    </>
  );
}

export default AddtoCart;
