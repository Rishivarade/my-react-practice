import React from 'react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";


const Home = () => {
  return (
    <>
      {/*Banner-1*/}
      <div id='top' className='home pt-5 mt-5' style={{ color: "white", textAlign: "right", display: "flex", flexDirection: "row" }}>
        <div className="hometext">
          <h1 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>The Desk</h1>
          <p>Available now in walnut, oak and maple</p>
          <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid white", fontWeight: "bold", color: "white", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
        </div>
      </div>
      {/*Banner-2*/}
      <div className="div mt-5" style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Design Inspires</h1>
        <p>Build your dream workspace, so you can get your best work done.</p>
        <button style={{ border: "none", backgroundColor: "white", borderBottom: "1px solid black", fontWeight: "bold", fontFamily: "din-2014,helvetica,sans-serif" }}>GET STARTED</button>
      </div>
      {/*Bannerimage-1*/}
      <div className="div mt-5" style={{ display: "flex", justifyContent: "space-around" }}>
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-walnut-desk-shelf-galB-J14.jpg?auto=format&ixlib=python-1.1.2&w=700&s=1a0e64d0e183a9739f45046272787bb6" alt="" height={400} width={600} />
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2FcoverB-desk-shelf-F3.jpg?auto=format&ixlib=python-1.1.2&w=700&s=0a677ea28f0a9223f612515ee9588f19" alt="" height={400} width={600} />
      </div>
      <div className="div mt-5" style={{ display: "flex", justifyContent: "space-around" }} >
        <div className="div">
          <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>The Desk Shelf</h3>
          <button style={{ border: "none", backgroundColor: "white", borderBottom: "1px solid black", fontWeight: "bold", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
        </div>
        <div className="div">
          <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Desk Pads</h3>
          <button style={{ border: "none", backgroundColor: "white", borderBottom: "1px solid black", fontWeight: "bold", fontFamily: "din-2014,helvetica,sans-serif" }}>SHOP NOW</button>
        </div>
      </div>
      {/*Slider-1*/}
      <div className="div">
        <div className="div mt-5" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Featured Products</h3>
          <p>See What’s Trending Right Now</p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}

          className="mySwiper mb-5"
          modules={[Pagination]}
        >

          <SwiperSlide >
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-desk-shelf-walnut-gridX-B1_0kn2etL.jpg%3F_v%3D1635183066.0039716?auto=format&ixlib=python-1.1.2&w=300&s=29f129cb44b1d81901002a501c458e45" alt="" />
            <p className='mt-5'>Walnut Desk Shelf (Large)<br />$280</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Falumina-lamp-charcoal-gridA-B1.jpg%3F_v%3D1718313617.1042275?auto=format&ixlib=python-1.1.2&w=300&s=c501e30ed838fd627ff97c172cebbd03" alt="" />
            <p className='mt-5'>Alumina Lamp (Charcoal) <br />$190</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-magsafe-dock-grid-B2.jpg%3F_v%3D1620162209.6585891?auto=format&ixlib=python-1.1.2&w=300&s=394fdc065062a54c47a0a4f48038a90c" alt="" />
            <p className='mt-5'>Walnut Magsafe Stand <br />$180</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fforbo-desk-pad-black-small-gridA-A3.jpg%3F_v%3D1670441827.1317568?auto=format&ixlib=python-1.1.2&w=300&s=e9523cad1089755c992d65b008f65d6c" alt="" />
            <p className='mt-5'>Matte Desk Pad (Small/Black)<br />$190</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-walnut-laptop-riser-gridA-C1.jpg%3F_v%3D1680273410.7236304?auto=format&ixlib=python-1.1.2&w=300&s=0d9dfdfe03bfe3b5023430e23aa82e5b" alt="" />
            <p className='mt-5'>Walnut Laptop Riser<br />$190</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-ipad-stand-gridA-B2.jpg%3F_v%3D1603831992.0211432?auto=format&ixlib=python-1.1.2&w=300&s=00ca4fe98eaf602ceee43839bdc01430" alt="" />
            <p className='mt-5'>Walnut iPad Stand<br />$170</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-desk-collection-monitor-stand-grid-B4.jpg%3F_v%3D1624506681.7828453?auto=format&ixlib=python-1.1.2&w=300&s=250d60182175331983d4c4c3410d699a" alt="" />
            <p className='mt-5'>Walnut Monitor Stand<br />$160</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-headphone-stand-grid-B2.jpg%3F_v%3D1622041949.6444051?auto=format&ixlib=python-1.1.2&w=300&s=12e7003183845134956afdc706693b14" alt="" />
            <p className='mt-5'>Walnut Headphone Stand<br />$210</p>

          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-cork-desk-tray-dark-large-gridX-A1.jpg%3F_v%3D1690564137.4703584?auto=format&ixlib=python-1.1.2&w=300&s=05431aba9f85911b3d33e67b715999c9" alt="" />
            <p className='mt-5'>Desk Tray (Dark/Large)<br />$180</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-desk-collection-keyboard2016-gridA-A1.jpg%3F_v%3D1462820222.4732225?auto=format&ixlib=python-1.1.2&w=300&s=e3c9bce9ef62ed16db423839fc006693" alt="" />
            <p className='mt-5'>Walnut Keyboard Tray (Pre May 2021)<br />$130</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fgrovemade-mouse-pad-leather-walnut-2-gridA-B1.jpg%3F_v%3D1637361176.1934593?auto=format&ixlib=python-1.1.2&w=300&s=8daf0b0d13d69cf11a67a5f926d7e75d" alt="" />
            <p className='mt-5'>Walnut&Leather Mouse Pad<br />$160</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fpen-black-gridA-B1.jpg%3F_v%3D1565817973.0221894?auto=format&ixlib=python-1.1.2&w=300&s=b7b9cebf7174803df76ff6ae65022c7f" alt="" />
            <p className='mt-5'>Black Pen<br />$100</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-desk-collection-pad-C2_1.jpg%3F_v%3D1556739324.37314?auto=format&ixlib=python-1.1.2&w=300&s=003f9428d88a17c3683d6b2a89c48b49" alt="" />
            <p className='mt-5'>Wool Felt Desk Pad (Extra Large/ Dark Grey)<br />$165</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-succulent-planter-tall-2020-grid-A1.jpg%3F_v%3D1606095599.6841686?auto=format&ixlib=python-1.1.2&w=300&s=cbb198cdcafc6d3deba10cf0b7879541" alt="" />
            <p className='mt-5'>Walnut Planter<br />$56</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-pen-cup-2020-grid-A1.jpg%3F_v%3D1606095722.1970117?auto=format&ixlib=python-1.1.2&w=300&s=c8a6ef7932f3514fd464b9c066b1b2df" alt="" />
            <p className='mt-5'>Walnut Pen Cup<br />$70</p>
          </SwiperSlide>

        </Swiper>
      </div>
      {/*Banner-3*/}
      <div className="banner" style={{ color: "white", textAlign: "center", alignContent: "center" }}>
        <h1 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>The Black Collection</h1>
        <p>Introducing a new collection for the minimal workspace.</p>
        <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid white", fontWeight: "bold", color: "white", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
      </div>
      {/*Videocontent*/}
      <div className="div mt-5 mb-5" style={{ textAlign: "center" }}>
        <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Redefine the Workspace</h3>
        <p>We believe that the physical environment matters in the pursuit of meaningful work. It should be calm, <br />mindful and peaceful—an extension of ourselves and the quality we all stand for.</p>
        <iframe className='video col-7 mt-5' src="https://www.youtube.com/embed/rrPEjjP5QFY" title="How I Made Grovemade&#39;s Leather Desk Pad on a Budget" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        <p>(Video has no sound.)</p>
        <p className='mt-5'>Since 2009, we've been obsessed with the process of human centric product innovation, leading the wave of <br /> home workspace design. We're proud to be small and innovative, to bring you products that couldn't exist <br />  otherwise.</p>
      </div>
      {/*Tabs*/}
      {/*Dropdown images */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle1">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Linneah-2020-B1.jpg%3F_v%3D1598025902.5316064?auto=format&ixlib=python-1.1.2&w=200&s=bebdf182371ba1a8c67268044c7cc5d9" alt="Click to toggle content" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle2">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Victor-2017-B1.jpg%3F_v%3D1487269127.922997?auto=format&ixlib=python-1.1.2&w=200&s=8af729defbbd4fcd87f0215f6f610702" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle3">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Anthony-2022-B1.jpg%3F_v%3D1653605755.637293?auto=format&ixlib=python-1.1.2&w=200&s=dd93b897168226b119a33b7d33cdd2a1" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle4">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Max-2017-B1.jpg%3F_v%3D1487621129.8083644?auto=format&ixlib=python-1.1.2&w=200&s=770d9bc6ce07b6396c43773aa36c5526" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle5">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Kacy-2020-B1.jpg%3F_v%3D1598026001.215453?auto=format&ixlib=python-1.1.2&w=200&s=03e256190c9f5129cb0958e112fb0141" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle6">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nick-2020-B1.jpg%3F_v%3D1585950624.5492792?auto=format&ixlib=python-1.1.2&w=200&s=43486c26bc4bbb00f3f7687914d92036" className="card-img-top" />
              </label>
            </div>
          </div>
          
          <div className="dropcontent">
            <div className="div">
              <input type="checkbox" id="toggle1" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Linneah-2020-B1.jpg%3F_v%3D1598025902.5316064?auto=format&ixlib=python-1.1.2&w=500&s=984590b0968529d692091ddaa267246e" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle2" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Victor-2017-B1.jpg%3F_v%3D1487269127.922997?auto=format&ixlib=python-1.1.2&w=500&s=dbce32efba03cd7846d6b39603ce82af" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle3" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Anthony-2022-B1.jpg%3F_v%3D1653605755.637293?auto=format&ixlib=python-1.1.2&w=500&s=7f765135d8b1e2fded9e0833357ff543" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle4" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Max-2017-B1.jpg%3F_v%3D1487621129.8083644?auto=format&ixlib=python-1.1.2&w=500&s=37a07cc172fa01d4acf3369c3e868892" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle5" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Kacy-2020-B1.jpg%3F_v%3D1598026001.215453?auto=format&ixlib=python-1.1.2&w=500&s=7a502cb41bd58e5f336aa9a7f0bd1e78" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle6" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nick-2020-B1.jpg%3F_v%3D1585950624.5492792?auto=format&ixlib=python-1.1.2&w=500&s=793c76900f4bec2eab67d86fd042e9bb" alt="" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <div className="col-2">
            <div className="card">
              <label htmlFor="toggle7">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Jim-2022-B2.jpg%3F_v%3D1655738005.209473?auto=format&ixlib=python-1.1.2&w=200&s=9c7733da67b8411279ef412f427e55fb" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle8">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Joe_813Captureone-1_edit_2.jpg%3F_v%3D1392968046.0?auto=format&ixlib=python-1.1.2&w=200&s=17cee3aa023804aa25e9e146686aeef4" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle9">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-John-2018-B1.jpg%3F_v%3D1529970563.9168112?auto=format&ixlib=python-1.1.2&w=200&s=8d1b2311367d1f64d264fd6bf69f45ba2" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle10">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christof-2022-B1.jpg%3F_v%3D1654880675.724701?auto=format&ixlib=python-1.1.2&w=200&s=945daf62cb3d4ec59265df18cfd295f7" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle11">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Gerardo-2021-B1.jpg%3F_v%3D1622565203.6054406?auto=format&ixlib=python-1.1.2&w=200&s=05bc6e476198717ab0b5e91beba04a3b" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <label htmlFor="toggle12">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Seann-2022-B1.jpg%3F_v%3D1653605674.2341702?auto=format&ixlib=python-1.1.2&w=200&s=89c9ac5db178fc9107c065cc9173e27c" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="dropcontent">
          <div className="div">
              <input type="checkbox" id="toggle7" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Jim-2022-B2.jpg%3F_v%3D1655738005.209473?auto=format&ixlib=python-1.1.2&w=500&s=3eb2363d8f34bb8ab0dbff1bea71b64b" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle8" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Joe_813Captureone-1_edit_2.jpg%3F_v%3D1392968046.0?auto=format&ixlib=python-1.1.2&w=500&s=92c157e047dfd77b5fb30fdefc3e9aac" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle9" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-John-2018-B1.jpg%3F_v%3D1529970563.9168112?auto=format&ixlib=python-1.1.2&w=500&s=1335dea7396068e632a503aae954614d" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle10" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christof-2022-B1.jpg%3F_v%3D1654880675.724701?auto=format&ixlib=python-1.1.2&w=500&s=1152d6cd9bc1a6b4a955fa64f31e9eab" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle11" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Gerardo-2021-B1.jpg%3F_v%3D1622565203.6054406?auto=format&ixlib=python-1.1.2&w=500&s=6699ce80e8a4575e63f97a3fa2921b2a" alt="" />
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle12" />
              <div className="dropdown-content">
                <div className="card-body">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Seann-2022-B1.jpg%3F_v%3D1653605674.2341702?auto=format&ixlib=python-1.1.2&w=500&s=7d8afa9a45dd3e8619feeaa8f86ed40e" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <a className='col-1 text-center pt-2 pb-2' href='#top' style={{ textDecoration: "none", backgroundColor: "black", alignContent: "center", color: "white", fontFamily: "din-2014,helvetica,ssans-serif" }}>GO <br /> UP</a>
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

export default Home;
