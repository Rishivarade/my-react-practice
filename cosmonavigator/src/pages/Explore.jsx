import React, { useContext } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { themecontext } from '../Context/ThemeContext';
const Explore = () => {
  const {theme } = useContext(themecontext)
  return (
    <>
    {/*Banner-1 */}
      <div id='go' className='exploreimg' style={{ display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "surveyor text a, surveyor text b, Georgia", color: "white", }}>
        <h1 style={{ fontSize: "60px" }}>Made The Hard Way</h1>
      </div>
      <div className="container mt-5" style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>
        <h1 className='text-center mb-5'>About Grovemade</h1>
        <div className="row col-12 d-flex justify-content-around align-items-center">
          <div className="col-7 col-sm-12 col-md-8 col-lg-7">
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-bts-ken-A2.jpg?auto=format&ixlib=python-1.1.2&w=700&s=3b24852d2ca2d287da8dce88965c15f7" width={500} alt="" />
          </div>
          <div className="col-5 col-sm-12 col-md-8 col-lg-5  text-center">
            <p style={{ fontSize: "14px" }}><span style={{ fontSize: "50px" }}>T</span>he seeds were planted a decade ago by pure <br /> chance when I moved my custom furniture <br />business into a humble workshop backing up to the <br /> railroad tracks. Across the street in a run down home <br /> we called the “Fight Club House” lived enthusiastic <br /> entrepreneur Joe Mansfield. He was somehow running a <br /> very successful laser engraving and digital art business <br /> out of a spare bedroom. We soon became friends...</p>
            <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
          </div>
        </div>
      </div>
      <hr className='mt-5' />
        {/*Journal */}
      <div className="container text-center mt-5" style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>
        <h1>The Journal</h1>
        <p>Interested in learning more about our designs, our processes and our <br /> people? The Journal is where you’ll find everything from in-depth <br />design articles to stories and interviews with people who inspire us.</p>
        <button className='p-2' style={{ border: "0px", backgroundColor: "black", color: "white", fontFamily: "din-2014,helvetica,sans-serif", fontSize: "14px" }}>VIEW ALL ARTICLES</button>
      </div>
        {/*Selecting Reading*/}
      <div className="div mt-5 " style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>
        <h2 className='text-center mb-5'>Selected Reading</h2>
        <div className="row m-auto">
          <div className="col-4 col-sm-12 col-xl-4 text-sm-center">
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-desk-shelf-ply-walnut-medium-galB-C1.jpg?auto=format&ixlib=python-1.1.2&w=1100&s=e0f642a83fe0b1d8e87533cfb0ffa5f4" width={400} alt="" />
            <div className="div ps-4 mt-2">
              <p>DEISGN STORY</p>
              <h1>The New Desk <br />Shelf</h1>
              <p>It had been four years since we launched the <br />original desk shelf. It was time to update. Read <br />on to learn how we totally redesigned the new <br />desk shelf system—more storage, more sizes,<br /> more possibilities.</p>
              <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>READ MORE</button>
            </div>
          </div>
          <div className="col-4 col-sm-12 col-xl-4 text-sm-center">
            <img src="https://www.digitaltrends.com/wp-content/uploads/2023/12/apple-mac-studio-top-down-e1703189065451.jpg?p=1" alt="" width={400} />
            <div className="div ps-4 mt-2">
              <p>DEISGN STORY</p>
              <h1>Unboxing the <br /> Mac Studio</h1>
              <p>We brought the sleek new Mac studio M1 Max <br />and Studio display into our shop to meet our <br /> design team and our products.</p>
              <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>READ MORE</button>
            </div>
          </div>
          <div className="col-4 col-sm-12 col-xl-4 text-sm-center">
            <img src="https://www.diydecormom.com/wp-content/uploads/2020/08/office-reveal-18.jpg" width={400} alt="" />
            <div className="div ps-4 mt-2">
            <p>LOOKBOOK</p>
            <h1>Jade and Chris <br />Towery Office  <br />Makeover</h1>
            <p>Ken returns to Venice Beach to help his good <br />friends make over their home office space.</p>
            <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid black", fontWeight: "bold", color: "black", fontFamily: "din-2014,helvetica,sans-serif" }}>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-5 mb-5' />
      {/*Connect Newsletter */}
      <div className="container text-center">
        <h1>Connect</h1>
        <p>We announce everything worth announcing through email or our <br /> social channels. Follow along with what’s going on in our Portland, <br /> OR, workshop and beyond.</p>
        <h1>Newsletter</h1>
        <p style={{fontFamily: "surveyor text a, surveyor text b, Georgia",fontStyle:"italic",fontSize:"14px"}}>Sign up to our Newsletter to hear about new product releases, <br />learn about our design process, and everything else going on <br /> behind the scenes at Grovemade</p>
        <input style={{border:"0px",borderBottom:"1px solid black",fontStyle:"italic"}} type="text" placeholder='Enter Your Email' />
        <button style={{border:"0px",borderBottom:"1px solid black"}}>SUBMIT</button>
        <p className='mt-4' style={{color:"gray"}}>Instagram • Facebook • Pinterest</p>
      </div>
      <hr className='mt-5 mb-5' />
      {/*Visit Us-Hours / Address*/}
      <div className="container text-center">
        <h1>Visit Us</h1>
        <p>We’re proud of the things we make and how we make them. Due to <br />current health considerations with COVID-19, our shop is currently <br />closed to visitors. Stay safe, and stay well!</p>
        <h2 className='mt-5'>Hours / Address</h2>
        <p style={{color:"gray"}}>Currently Closed to Visitors <br /><br />6524 N Albina Ave <br />Portland, Oregon 97217 <br /><br />(971) 206.6606</p>
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

export default Explore
