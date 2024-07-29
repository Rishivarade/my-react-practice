import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const Product = () => {
  return (
    <>
    <div className="proimg mt-5"  id='up'>
      <h1 className='' style={{display:"flex",justifyContent:"center",alignItems:"center",height:"400px",color:"white",fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Design Inspires What You Do</h1>
      <div className="line col-11" style={{display:"flex",fontSize:"14px",justifyContent:"space-between",fontFamily:"din-2014,helvetica,sans-serif",border:"1px solid aqua"}}>
      <ul className='col-2 p-2 pt-3' style={{backgroundColor:"white",color:"black",listStyle:"none"}}><strong>SHOP</strong>
        <li className='mb-1 mt-3'><a href="">Black Collection</a></li>
        <li className='mb-1'><a href="">Walnut Collection</a></li>
        <li className='mb-1'><a href="">White Oak Collection</a></li>
        <li className='mb-1'><a href="">Maple Collection</a></li>
        <li className='mb-1'><a href="">Shop All</a></li>
      </ul>
      <ul className='col-2 p-2 pt-3' style={{backgroundColor:"white",color:"black",listStyle:"none"}}><strong>MOUSE/DESK PADS</strong>
        <li className='mb-1 mt-3'><a href="">Black Collection</a></li>
        <li className='mb-1'><a href="">Walnut Collection</a></li>
        <li className='mb-1'><a href="">White Oak Collection</a></li>
        <li className='mb-1'><a href="">Maple Collection</a></li>
        <li className='mb-1'><a href="">Shop All</a></li>
      </ul>
      <ul className='col-2 p-2 pt-3' style={{backgroundColor:"white",color:"black",listStyle:"none"}}><strong>STANDS</strong>
        <li className='mb-1 mt-3'><a href="">Black Collection</a></li>
        <li className='mb-1'><a href="">Walnut Collection</a></li>
        <li className='mb-1'><a href="">White Oak Collection</a></li>
        <li className='mb-1'><a href="">Maple Collection</a></li>
        <li className='mb-1'><a href="">Shop All</a></li>
      </ul>
      <ul className='col-2 p-2 pt-3' style={{backgroundColor:"white",color:"black",listStyle:"none"}}><strong>TOOLS</strong>
        <li className='mb-1 mt-3'><a href="">Black Collection</a></li>
        <li className='mb-1'><a href="">Walnut Collection</a></li>
        <li className='mb-1'><a href="">White Oak Collection</a></li>
        <li className='mb-1'><a href="">Maple Collection</a></li>
        <li className='mb-1'><a href="">Shop All</a></li>
      </ul>
      <ul className='col-2 p-4 pt-3' style={{backgroundColor:"white",color:"black",listStyle:"none"}}><strong>KEYBOARD</strong>
        <li className='mb-1 mt-3'><a href="">Black Collection</a></li>
        <li className='mb-1'><a href="">Walnut Collection</a></li>
        <li className='mb-1'><a href="">White Oak Collection</a></li>
        <li className='mb-1'><a href="">Maple Collection</a></li>
        <li className='mb-1'><a href="">Shop All</a></li>
      </ul>
      <ul className='col-2 p-2 pt-3' style={{backgroundColor:"white",color:"black",listStyle:"none"}}><strong>FURNITURE</strong>
        <li className='mb-1 mt-3'><a href="">Black Collection</a></li>
        <li className='mb-1'><a href="">Walnut Collection</a></li>
        <li className='mb-1'><a href="">White Oak Collection</a></li>
        <li className='mb-1'><a href="">Maple Collection</a></li>
        <li className='mb-1'><a href="">Shop All</a></li>
      </ul>
      </div>
    </div>
    <div className="div mt-5">
      <div className="col-4 text-center">
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fdesk-shelf-system-feature-A3.jpg?auto=format&ixlib=python-1.1.2&w=500&s=7ad52140e5aa0aa1203a90357c74924a"  width={380} alt="" />
        <h6 className='mt-4'>All Together Now</h6>
        <p>Our Desk Shelf System elevates your <br /> entire workspace and your workflow— <br />get improved ergonomics, ample room <br /> for multiple monitors, and just the right <br /> storage space.</p>
        <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
      </div>
    </div>
    <div className="div mt-5" style={{display:"flex",justifyContent:"end"}}>
      <div className="col-3 text-center">
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Ffeature-note-taking-kit-A1.jpg?auto=format&ixlib=python-1.1.2&w=300&s=30ce17d2076884b7ca3b8697537a48b6" alt="" />
        <h6 className='mt-4'>The Note-Taking Kit</h6>
        <p>The Note-Taking Kit is designed <br /> to help you clear the clutter, <br />organize your thoughts, and <br />keep your important tasks top of <br /> mind.  </p>
        <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
      </div>
    </div>
    <div className="div text-center">
      <div className="col-3">
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fheadphone-stand-feature-A2.jpg?auto=format&ixlib=python-1.1.2&w=300&s=55323ef6fb2365585f9b433fff0c408d" width={250} alt="" />
        <h6 className='mt-4'>The Headphone Stand</h6>
        <p>Premium materials and a unique <br /> design make a great home for <br /> your headphones. </p>
        <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>READ MORE</button>
      </div>
    </div>
    <div className="div text-center" style={{display:"flex",justifyContent:"end"}}>
      <div className="col-4">
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fdesk-shelf-system-feature-B2.jpg?auto=format&ixlib=python-1.1.2&w=500&s=86ba00386c977999269c9eee8dc09e48" width={400} alt="" />
        <h6 className='mt-4'>A Seamless Workspace</h6>
        <p>Our Maple Desk Shelf System is <br /> designed to work best as a coordinated <br /> whole within the modern workspace. Get <br /> the system and see how easy switching <br />from emails to doodles can be. </p>
        <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
      </div>
    </div>
    <div className="div text-center">
      <div className="col-3">
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fplanter-feature-B1.jpg?auto=format&ixlib=python-1.1.2&w=300&s=ab1e00392ef2b7c57160c71918545884" width={250} alt="" />
        <h6 className='mt-4'>Designing the Planter</h6>
        <p>Custom designed minimalist <br /> pencils and a stand that does <br /> more than just display.</p>
        <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
      </div>
    </div>
    {/*Design Inspire*/}
    <div className="div" style={{ textAlign: "center" }}>
        <div className="col-11 m-auto mt-5 bg-secondary" style={{height: "400px", alignContent: "center", color: "white" }}>
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
        <a className='col-1 text-center pt-2 pb-2' href='#up' style={{ textDecoration: "none", backgroundColor: "black", alignContent: "center", color: "white", fontFamily: "din-2014,helvetica,ssans-serif" }}>GO <br /> UP</a>
      </div>
      <div className="div mt-5" style={{display:"flex",justifyContent:"space-between"}}>
        <div className="col-1">
        <ul style={{listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"20px"}}>
          <li><a href="" style={{color:"black"}}><FaFacebookF /></a></li>
          <li><a href="" style={{color:"black"}}><IoLogoInstagram /></a></li>
          <li><a href="" style={{color:"black"}}><FaLinkedin /></a></li>
        </ul>
        </div>
        <div className="col-8">
          <ul style={{listStyle:"none",display:"flex",justifyContent:"space-around",alignItems:"center",fontStyle:"italic",fontFamily:"surveyor text a, surveyor text b, Georgia, serif",fontSize:"15px"}}>
            <li style={{color:"grey"}}>©2024 Grovemade</li>
            <li style={{color:"grey"}}>Terms & Conditions</li>
            <li style={{color:"grey"}}>Accessibility Statement</li>
            <li style={{color:"grey"}}>Privacy Policy</li>
            <li>Site by Department</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Product
