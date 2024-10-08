import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themecontext } from '../Context/ThemeContext';
import { IoPartlySunny } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { auth } from '../Service/Firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const {theme,themeUpdaterfunction } = useContext(themecontext)
    const handlelogout = () => {
        signOut(auth)
            .then(() => {
                alert("logout..")
                console.log(res)
            })
            .catch((err) => { console.log(err) });
    }
    return (
        <>
        <div id='top' className='fixed-top  ' style={{ display: "flex", justifyContent: "space-between", backgroundColor: theme == "light" ? "white" : "black", color: theme == "light" ? "black" : "white", padding: "25px", fontWeight: "bold", fontSize: "14px" }}>
            <div className="div col-2 d-flex justify-content-start">
                <Link className='dropdown pe-3' style={{  color: theme == "light" ? "black" : "white", textDecoration: "none", fontFamily: "din-2014,helvetica,sans-serif" }} to={'/product'}>SHOP
                    <div className="dropdown-menu submenu p-4" >
                        <ul style={{ listStyle: "none" }}><h4>Shop</h4>
                            <li>BlackCollection</li>
                            <li>WalnutCollection</li>
                            <li>WhiteOa Collection</li>
                            <li>MapleCollection</li>
                            <li>ShopAll</li>
                        </ul>
                        <ul style={{ listStyle: "none" }}><h4>Mouse/Desk Pads</h4>
                            <li>Desk Pads</li>
                            <li>Mouse Pads</li>
                            <li>Coasters</li>
                            <li>ViewAll</li>
                        </ul>
                        <ul style={{ listStyle: "none" }}><h4> Stands</h4>
                            <li>DeskShelves</li>
                            <li>MonitorStands</li>
                            <li>LaptopStands</li>
                            <li>HeadphoneStands</li>
                            <li>iPhoneDocks</li>
                            <li>iPadStands</li>
                            <li>ViewAll</li>
                        </ul>
                        <ul style={{ listStyle: "none" }}><h4>Tools</h4>
                            <li>Pens</li>
                            <li>Notepads</li>
                            <li>Note-Taking-Kit</li>
                            <li>Trays</li>
                            <li>PenCups&Planters</li>
                            <li>View-All</li>
                        </ul>
                        <ul style={{ listStyle: "none" }}><h4> Keyboard</h4>
                            <li>AppleKeyboardTray</li>
                            <li>MX-KeysKeyboardTray</li>
                            <li>AppleTrackpadTray</li>
                            <li>WristRests</li>
                            <li>ViewAll</li>
                        </ul>
                        <ul style={{ listStyle: "none" }}><h4> Furniture</h4>
                            <li>Desk</li>
                            <li>Catch-All</li>
                            <li>WallShelves</li>
                            <li>Lightin</li>
                            <li>ViewAll</li>
                        </ul>
                    </div>

                </Link>
                <Link className='dropdown' style={{ color: theme == "light" ? "black" : "white", textDecoration: "none", fontFamily: "din-2014,helvetica,sans-serif" }} to={'/explore'}>EXPLORE
                    <div className="dropdown-menu submenu p-4" >
                        <ul style={{ listStyle: "none" }}><h4>About</h4>
                            <li>OurStory</li>
                            <li>Origins</li>
                            <li>OurHome</li>
                            <li>Visit Us</li>
                        </ul>
                        <ul style={{ listStyle: "none" }}><h4>Journal</h4>
                            <li>CustomerStories</li>
                            <li>DesignStories</li>
                            <li>ProductHighlights</li>
                            <li>Behind the Scenes</li>
                            <li>MaterialFocus</li>
                            <li>ViewAll</li>
                        </ul>
                        <ul style={{ listStyle: "none" }}><h4>Connect</h4>
                            <li>Support</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Pinterest</li>
                            <li>LinkedIn</li>
                        </ul>
                        <ul style={{ listStyle: "none" }}>
                            <li className='text-center'>
                                <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-about2017-I1.jpg?auto=format&ixlib=python-1.1.2&w=500&s=915c598d1659c49919dcebd49c1b2029" alt="" />Our Story
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className="col-2 text-end ">
            <a style={{ border: "2px solid black", borderRadius: "25px", padding: "5px 10px 10px 10px", 
        backgroundColor: theme == "light" ? "black" : "yellow", 
        color: theme == "light" ? "white" : "black" }} 
        onClick={() => themeUpdaterfunction("dark")}>
          {theme == "light" ? <FaMoon /> : <IoPartlySunny />}
      </a>
            </div>
            <div className="div col-2 text-center">
                <Link className='' style={{ color: theme == "light" ? "black" : "white"}} to={'/'}><svg className="svg-logo" version="1.1" alt="Grovemade Logo - at top of page - click to return to homepage" baseProfile="tiny" id="Layer_1" x="0px" y="0px" viewBox="0 0 136.9 11.5">
                    <g>
                        <path fill="#272524" d="M23.9,2c0.3-0.3,0.7-0.5,1.1-0.5h0.2c0.4,0,0.8,0.1,1.1,0.3c0.3,0.2,0.5,0.5,0.5,0.8c0,0.3,0.1,0.4,0.3,0.5
			c0.2,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.2-0.1,0.2-0.3,0.2-0.6V2.6c0-0.4-0.1-0.7-0.3-1c-0.2-0.3-0.4-0.6-0.7-0.8
			c-0.3-0.2-0.6-0.4-1-0.5C26.1,0.1,25.7,0,25.2,0h-0.2c-0.4,0-0.9,0.1-1.2,0.2c-0.4,0.2-0.7,0.4-1,0.7c-0.3,0.3-0.5,0.6-0.7,1
			c-0.2,0.4-0.3,0.8-0.3,1.2v5.2c0,0.4,0.1,0.9,0.3,1.2c0.2,0.4,0.4,0.7,0.7,1c0.3,0.3,0.6,0.5,1,0.7c0.4,0.2,0.8,0.2,1.3,0.2h0.2
			c0.4,0,0.9-0.1,1.2-0.3c0.4-0.2,0.7-0.4,1-0.7c0.3-0.3,0.5-0.6,0.7-1c0.2-0.4,0.3-0.8,0.3-1.3V5.9c0-0.2-0.1-0.4-0.2-0.6
			c-0.2-0.2-0.3-0.2-0.6-0.2h-2.1c-0.3,0-0.5,0.1-0.6,0.2c-0.1,0.2-0.2,0.3-0.2,0.5c0,0.2,0.1,0.4,0.2,0.5c0.1,0.2,0.3,0.2,0.6,0.2
			h1.3v1.7c0,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.2,0.4-0.4,0.5c-0.1,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.1-0.6,0.1h-0.2
			c-0.4,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.5-0.7-0.5-1.1V3.1C23.4,2.7,23.6,2.3,23.9,2z"></path>
                        <path fill="#272524" d="M41.2,5.3c0.2-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0.1-0.7,0.1-1V3.3c0-0.4-0.1-0.9-0.3-1.2
			c-0.2-0.4-0.4-0.7-0.7-1s-0.6-0.5-1-0.7c-0.4-0.2-0.8-0.3-1.2-0.3h-2.7c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.2,0.3-0.2,0.5v9.9
			c0,0.3,0.1,0.5,0.2,0.6c0.2,0.1,0.3,0.2,0.6,0.2c0.2,0,0.4-0.1,0.5-0.2c0.2-0.1,0.2-0.3,0.2-0.6V6.6h1.3l2.1,4.5
			c0.1,0.2,0.2,0.3,0.3,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.6-0.2s0.2-0.3,0.2-0.6c0-0.1,0-0.2-0.1-0.3l-1.9-3.9
			C40,6.4,40.3,6.2,40.6,6C40.8,5.8,41,5.6,41.2,5.3z M40.2,3.4c0,0.4-0.1,0.8-0.4,1.1c-0.3,0.3-0.7,0.5-1.1,0.5h-2V1.7h1.9
			c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.2V3.4z"></path>
                        <path fill="#272524" d="M53.9,0.9c-0.3-0.3-0.6-0.5-1-0.7C52.5,0.1,52.1,0,51.6,0h-0.1c-0.4,0-0.9,0.1-1.3,0.2
			c-0.4,0.2-0.7,0.4-1,0.7c-0.3,0.3-0.5,0.6-0.7,1c-0.2,0.4-0.3,0.8-0.3,1.2v5.2c0,0.4,0.1,0.9,0.3,1.2c0.2,0.4,0.4,0.7,0.7,1
			c0.3,0.3,0.6,0.5,1,0.7c0.4,0.2,0.8,0.2,1.2,0.2h0.2c0.4,0,0.9-0.1,1.2-0.2c0.4-0.2,0.7-0.4,1-0.7s0.5-0.6,0.7-1
			c0.2-0.4,0.3-0.8,0.3-1.2V3.1c0-0.4-0.1-0.8-0.3-1.2C54.4,1.5,54.2,1.2,53.9,0.9z M53.3,8.4c0,0.5-0.2,0.8-0.5,1.1
			c-0.3,0.3-0.7,0.5-1.1,0.5h-0.2c-0.4,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.5-0.7-0.5-1.1V3.1c0-0.4,0.2-0.8,0.5-1.1
			c0.3-0.3,0.7-0.5,1.1-0.5h0.2c0.4,0,0.8,0.1,1.1,0.4c0.3,0.3,0.5,0.7,0.5,1.1V8.4z"></path>
                        <path fill="#272524" d="M65.3,10.8L67.7,1c0-0.1,0-0.1,0-0.2c0-0.2-0.1-0.4-0.2-0.5C67.3,0.1,67.1,0,66.9,0c-0.2,0-0.3,0-0.4,0.1
			c-0.1,0.1-0.2,0.2-0.3,0.5l-1.8,7.5l-1.8-7.5c-0.1-0.2-0.2-0.4-0.3-0.5C62.2,0,62,0,61.9,0c-0.2,0-0.4,0.1-0.6,0.2
			C61.1,0.4,61,0.6,61,0.8c0,0.1,0,0.2,0,0.2l2.4,9.9c0.1,0.2,0.2,0.4,0.3,0.5c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2
			C65.1,11.2,65.2,11.1,65.3,10.8z"></path>
                        <path fill="#272524" d="M75,11.4h5c0.3,0,0.5-0.1,0.6-0.2c0.1-0.2,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.2-0.3-0.2-0.6-0.2
			h-4.2V6.4h2.9c0.3,0,0.5-0.1,0.6-0.2c0.1-0.2,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.2-0.3-0.2-0.6-0.2h-2.9V1.7H80
			c0.3,0,0.5-0.1,0.6-0.2c0.1-0.2,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.2-0.3-0.2-0.6-0.2h-5c-0.2,0-0.4,0.1-0.5,0.2
			c-0.2,0.2-0.2,0.3-0.2,0.5v9.8c0,0.2,0.1,0.4,0.2,0.5C74.6,11.3,74.8,11.4,75,11.4z"></path>
                        <path fill="#272524" d="M94.7,11.3c0.2,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.2-0.1,0.2-0.3,0.2-0.6V0.8
			c0-0.2-0.1-0.4-0.2-0.5C95.7,0.1,95.5,0,95.3,0h-0.2c-0.2,0-0.4,0-0.5,0.1c-0.1,0.1-0.2,0.2-0.3,0.4l-2.4,5.4l-2.4-5.4
			C89.3,0.2,89.1,0,88.7,0h-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.2,0.3-0.2,0.5v9.9c0,0.3,0.1,0.5,0.2,0.6c0.2,0.1,0.3,0.2,0.5,0.2
			c0.2,0,0.4-0.1,0.5-0.2c0.2-0.1,0.2-0.3,0.2-0.6v-7l1.8,4.1c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1
			c0.2-0.1,0.3-0.2,0.3-0.4l1.8-4.1v7C94.5,11,94.6,11.2,94.7,11.3z"></path>
                        <path fill="#272524" d="M107.1,0.1C106.9,0,106.7,0,106.5,0c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.3-0.4,0.5l-3.1,9.9
			c0,0.1,0,0.2,0,0.3c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.6,0.2c0.2,0,0.3,0,0.5-0.1c0.2-0.1,0.3-0.2,0.3-0.4l0.7-2.2h3.6
			l0.7,2.2c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.4-0.1,0.6-0.2c0.1-0.1,0.2-0.3,0.2-0.5c0-0.1,0-0.1,0-0.2
			l-3.1-9.9C107.4,0.4,107.3,0.2,107.1,0.1z M105.2,7.2l1.3-4.3l1.3,4.3H105.2z"></path>
                        <path fill="#272524" d="M121.6,0.3c-0.4-0.2-0.8-0.2-1.2-0.2h-2.6c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.2,0.3-0.2,0.5v9.8
			c0,0.2,0.1,0.4,0.2,0.5c0.2,0.2,0.3,0.2,0.5,0.2h2.6c0.4,0,0.9-0.1,1.2-0.2c0.4-0.2,0.7-0.4,1-0.6s0.5-0.6,0.7-1
			c0.2-0.4,0.3-0.8,0.3-1.3V3.3c0-0.5-0.1-0.9-0.3-1.3c-0.2-0.4-0.4-0.7-0.7-1C122.4,0.7,122,0.5,121.6,0.3z M122,8.2
			c0,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.2,0.4-0.4,0.5c-0.1,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.1-0.6,0.1h-1.8V1.7h1.8
			c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.4,0.2,0.5,0.4c0.1,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.1,0.4,0.1,0.6V8.2z"></path>
                        <path fill="#272524" d="M136.1,1.7c0.3,0,0.5-0.1,0.6-0.2c0.1-0.2,0.2-0.3,0.2-0.5v0c0-0.2-0.1-0.4-0.2-0.5
			c-0.1-0.2-0.3-0.2-0.6-0.2h-5c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.2,0.3-0.2,0.5v9.8c0,0.2,0.1,0.4,0.2,0.5c0.2,0.2,0.3,0.2,0.5,0.2
			h5c0.3,0,0.5-0.1,0.6-0.2c0.1-0.2,0.2-0.3,0.2-0.5v0c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.2-0.3-0.2-0.6-0.2h-4.2V6.4h2.9
			c0.3,0,0.5-0.1,0.6-0.2c0.1-0.2,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.2-0.3-0.2-0.6-0.2h-2.9V1.7H136.1z"></path>
                        <path fill="#272524" d="M7.9,11.2L7.9,11.2c0,0,0-0.1,0-0.1c0,0.1-1.1-2.7-1.5-3.1C5.5,7.1,4.5,7.2,3.8,7.2H0.4
			C0.2,7.2,0,7.3,0,7.5v0c0,0,0,0.1,0,0.1c0,0,1.1,2.8,1.5,3.1c0.8,0.8,1.5,0.8,2.6,0.8h3.5C7.8,11.5,7.9,11.4,7.9,11.2z"></path>
                        <path fill="#272524" d="M13.7,7.7c0-2.1-2.2-6.7-2.5-7.5C11.2,0.1,11.1,0,10.9,0c-0.1,0-0.3,0.1-0.3,0.2C9.1,3.7,8,6.3,8,6.3
			C7.9,6.6,7.8,6.9,7.9,7.2C8,7.5,8.6,8.7,9,9.7c0.6,1.4,0.7,1.8,2,1.8C12.6,11.5,13.7,10.1,13.7,7.7z"></path>
                    </g>
                </svg></Link>
            </div>
            
            <div className="col-2  d-flex justify-content-around">
                <Link to={'/login'}>
                <button  style={{backgroundColor: theme == "light" ? "black" : "white",color: theme == "light" ? "white" : "black",border:"0px",textDecoration:"none"}} >LOG IN</button>
                </Link>
                <button style={{backgroundColor: theme == "light" ? "black" : "white",color: theme == "light" ? "white" : "black",border:"0px"}} onClick={handlelogout}>LOG OUT</button>
            </div>
            <div className="div col-2 text-center ">
                <Link style={{  color: theme == "light" ? "black" : "white", textDecoration: "none", fontFamily: "din-2014,helvetica,sans-serif" }} to={'/cart'}>MY CART <FaCartShopping /></Link>
            </div>
        </div>
        </>
        
    )
}

export default Navbar
