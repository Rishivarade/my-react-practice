import React, { useContext, useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { themecontext } from '../Context/ThemeContext';

let url = 'http://localhost:3000/products'
const Home = () => {
  const {theme } = useContext(themecontext)
  const [filterProduct, setfilterProduct] = useState([])
  const ProductfromServer = () => {
    axios.get(url, {
  
    })
      .then((res) => {
        setfilterProduct(res.data)
      })
      .catch((err) => console.log(err))
  } 
  useEffect(()=>{
    ProductfromServer()
  },[])
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
      <div className="div mt-5 d-sm-none d-md-none d-lg-block" style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Design Inspires</h1>
        <p>Build your dream workspace, so you can get your best work done.</p>
        <button style={{ border: "none", backgroundColor: "white", borderBottom: "1px solid black", fontWeight: "bold", fontFamily: "din-2014,helvetica,sans-serif" }}>GET STARTED</button>
      </div>
      {/*Bannerimage-1*/}
      <div className="div col-12 d-sm-none d-md-none d-lg-flex" style={{ display: "flex", justifyContent: "space-around" }}>
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2Fgrovemade-walnut-desk-shelf-galB-J14.jpg?auto=format&ixlib=python-1.1.2&w=700&s=1a0e64d0e183a9739f45046272787bb6" alt="" height={400} width={500} />
        <img src="https://grovemade.imgix.net/https%3A%2F%2Fsiteleaf.grovemade.com%2Fuploads%2FcoverB-desk-shelf-F3.jpg?auto=format&ixlib=python-1.1.2&w=700&s=0a677ea28f0a9223f612515ee9588f19" alt="" height={400} width={500} />
      </div>
      <div className="div mt-5 d-sm-none d-md-none d-lg-flex" style={{ display: "flex", justifyContent: "space-around" }} >
        <div className="div text-center">
          <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>The Desk Shelf</h3>
          <button style={{ border: "none", backgroundColor: "white", borderBottom: "1px solid black", fontWeight: "bold", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
        </div>
        <div className="div text-center">
          <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Desk Pads</h3>
          <Link to={'/product'}>
          <button style={{ border: "none", backgroundColor: "white", borderBottom: "1px solid black", fontWeight: "bold", fontFamily: "din-2014,helvetica,sans-serif" }}>SHOP NOW</button>
          </Link>
        
        </div>
      </div>
      {/*Slider-1*/}
      <div className="div d-sm-none">
        <div className="div mt-5" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Featured Products</h3>
          <p>See What’s Trending Right Now</p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          className="mySwiper mb-5"
          modules={[Pagination]}
        > 
        {
          filterProduct.map((el)=>(
            <SwiperSlide className='' key={el.id}>
              <div className="div text-start" style={{color:"grey"}}>
                <Link style={{ textDecoration: "none", color: "black" }} to={`/description/${el.id}`}>
                <img src={el.image} alt="" height={200} width={200} />
                <p className='mt-4'>{el.title}</p>
                <p>${el.price}</p>
                </Link>                
              </div>
            </SwiperSlide>
          ))
        }

        </Swiper>
      </div>
      {/*Banner-3*/}
      <div className="banner mt-sm-5" style={{ color: "white", textAlign: "center", alignContent: "center" }}>
        <h1 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>The Black Collection</h1>
        <p>Introducing a new collection for the minimal workspace.</p>
        <button style={{ border: "none", backgroundColor: "transparent", borderBottom: "1px solid white", fontWeight: "bold", color: "white", fontFamily: "din-2014,helvetica,sans-serif" }}>LEARN MORE</button>
      </div>
      {/*Videocontent*/}
      <div className="div mt-5 mb-5 col-sm-10 m-sm-auto mt-sm-5" style={{ textAlign: "center" }}>
        <h3 style={{ fontFamily: "surveyor text a, surveyor text b, Georgia" }}>Redefine the Workspace</h3>
        <p>We believe that the physical environment matters in the pursuit of meaningful work. It should be calm, <br />mindful and peaceful—an extension of ourselves and the quality we all stand for.</p>
        <iframe className='video col-7 mt-5 col-sm-11' src="https://www.youtube.com/embed/rrPEjjP5QFY" title="How I Made Grovemade&#39;s Leather Desk Pad on a Budget" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        <p>(Video has no sound.)</p>
        <p className='mt-5 col-sm-10 m-sm-auto'>Since 2009, we've been obsessed with the process of human centric product innovation, leading the wave of <br /> home workspace design. We're proud to be small and innovative, to bring you products that couldn't exist <br />  otherwise.</p>
      </div>
      {/*Tabs*/}
      {/*Dropdown images */}
      <div className="container mt-5">
        <div className="row mt-sm-3">
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle1">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Linneah-2020-B1.jpg%3F_v%3D1598025902.5316064?auto=format&ixlib=python-1.1.2&w=200&s=bebdf182371ba1a8c67268044c7cc5d9" alt="Click to toggle content" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle2">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Victor-2017-B1.jpg%3F_v%3D1487269127.922997?auto=format&ixlib=python-1.1.2&w=200&s=8af729defbbd4fcd87f0215f6f610702" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle3">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Anthony-2022-B1.jpg%3F_v%3D1653605755.637293?auto=format&ixlib=python-1.1.2&w=200&s=dd93b897168226b119a33b7d33cdd2a1" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle4">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Max-2017-B1.jpg%3F_v%3D1487621129.8083644?auto=format&ixlib=python-1.1.2&w=200&s=770d9bc6ce07b6396c43773aa36c5526" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle5">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Kacy-2020-B1.jpg%3F_v%3D1598026001.215453?auto=format&ixlib=python-1.1.2&w=200&s=03e256190c9f5129cb0958e112fb0141" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle6">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nick-2020-B1.jpg%3F_v%3D1585950624.5492792?auto=format&ixlib=python-1.1.2&w=200&s=43486c26bc4bbb00f3f7687914d92036" className="card-img-top" />
              </label>
            </div>
          </div>

          <div className="dropcontent mt-3 d-sm-none d-md-none d-lg-block">
            <div className="div">
              <input type="checkbox" id="toggle1" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Linneah-2020-B1.jpg%3F_v%3D1598025902.5316064?auto=format&ixlib=python-1.1.2&w=500&s=984590b0968529d692091ddaa267246e" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Linneah</h3>
                    <p>Linneah roller skated to Portland from her home in <br />Montana, carrying only a Meyer lemon for sustenance.  <br /> At Grovemade, she builds things and challenges herself, <br /> sometimes in that order, sometimes challenges first, <br /> building later. She shares her name with Linnea borealis, <br /> also known as Twinflower - perhaps this led to her love <br /> of houseplants? A mystery!  Outside of work, she’s a <br /> talented painter—you can check out her artwork</p>
                    <p>I'M GOOD AT: PAINTING</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div mt-3">
              <input type="checkbox" id="toggle2" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Victor-2017-B1.jpg%3F_v%3D1487269127.922997?auto=format&ixlib=python-1.1.2&w=500&s=dbce32efba03cd7846d6b39603ce82af" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Victor</h3>
                    <p>Victor, aka Victor Sweet, aka Victor Strong is not only <br /> our awesome Production Manager but he’s also one of <br />our most powerful Grovemaders. Victor’s secret for <br /> superhuman  strength? A steady diet of hip-hop, rap, <br /> R&B and heaping scoops of white hot magma. When <br /> through with his morning routine of deadlifting small <br /> cars and tiny houses, you’ll find him fishing the banks <br /> of the Columbia River, where he reels in trolley-sized <br /> carps with his steely bare hands and a visage of <br /> extreme aplomb. When not performing unmatchable <br /> feats of strength, you’ll find this dynamo enjoying the <br /> many tasty tidbits found far and wide in our fair city.</p>
                    <p>KINDRED SPIRIT: A MEAN BEAR <br />
                    FAVORITE GOOD WORD: "THANK YOU!"</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle3" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Anthony-2022-B1.jpg%3F_v%3D1653605755.637293?auto=format&ixlib=python-1.1.2&w=500&s=7f765135d8b1e2fded9e0833357ff543" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Anthony</h3>
                    <p>You know how there's always random stuff around, <br />  stuff that just doesn't have a good place to be? Anthony <br /> knows the solution—build a container. Or a stand. <br /> Bingo. Now that thing has a place. Anthony is a <br /> surprisingly good dancer (he used to teach <br /> breakdancing in high school) so he might celebrate his <br /> organizational victory with a quick dance. A Portland <br /> native, he is enthused by the outdoors. In particular, <br /> the Pacific Northwest outdoors. Bloom where you're <br />planted, they say, and Anthony couldn't agree more.</p>
                    <p>FAVORITE CAMPING SPOT: THE ALVORD DESERT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle4" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Max-2017-B1.jpg%3F_v%3D1487621129.8083644?auto=format&ixlib=python-1.1.2&w=500&s=37a07cc172fa01d4acf3369c3e868892" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Max</h3>
                    <p>Max, named for the main character in Where the Wild <br /> Things Are, knows everything about every movie ever <br /> made. He’s got a passion for storytelling, from graphic <br /> novels and 80s horror films to Ray Bradbury. His resume <br />paints a picture of a colorful life: projectionist, graphic <br /> artist at a modeling agency, bartender in foggy Astoria, <br /> photographer and videographer, and illustrator <br /> extraordinaire. Check out his illustrations </p>
                    <p>I'M GOOD AT: CRIBBAGE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle5" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Kacy-2020-B1.jpg%3F_v%3D1598026001.215453?auto=format&ixlib=python-1.1.2&w=500&s=7a502cb41bd58e5f336aa9a7f0bd1e78" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Kacy</h3>
                    <p>Kacy has a plan and his plan is to watch basketball <br /> later, after work. He likes to build things, at Grovemade <br /> and at home, things like custom PCs. On the basketball <br /> court, he uses magical mind-power and strong ankles <br /> to best his opponent. In the basketball arena, you can <br />find him wielding whatever wild collectable cup they <br /> have because he goes “all out.”</p>
                    <p>I'M GOOD AT: EDITING VIDEOS <br />
                    FAVORITE ANIMAL: BIRDS OF PARADISE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle6" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nick-2020-B1.jpg%3F_v%3D1585950624.5492792?auto=format&ixlib=python-1.1.2&w=500&s=793c76900f4bec2eab67d86fd042e9bb" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Nick</h3>
                    <p>Nick is an accomplished toothbrusher. He used to do <br />20 pushups every night before bed, but he stopped <br /> while ago and hasn’t looked back. Some of his favorite <br /> things are coffee, cooking while wearing aprons, <br /> throwing anything round, and music. Nick is our <br /> resident word-smith and idea generator and customer <br /> question answerer. He loves email subject lines and <br /> looking at numbers for a long time and then drawing graphs.</p>
                    <p>I'M GOOD AT: THINKING ABOUT THINGS <br />
                    KINDRED SPIRIT: SHEEP</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-2 col-sm-4 col-md-6  col-lg-2">
            <div className="card">
              <label htmlFor="toggle7">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Jim-2022-B2.jpg%3F_v%3D1655738005.209473?auto=format&ixlib=python-1.1.2&w=200&s=9c7733da67b8411279ef412f427e55fb" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6  col-lg-2">
            <div className="card">
              <label htmlFor="toggle8">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Joe_813Captureone-1_edit_2.jpg%3F_v%3D1392968046.0?auto=format&ixlib=python-1.1.2&w=200&s=17cee3aa023804aa25e9e146686aeef4" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6  col-lg-2">
            <div className="card">
              <label htmlFor="toggle9">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-John-2018-B1.jpg%3F_v%3D1529970563.9168112?auto=format&ixlib=python-1.1.2&w=200&s=8d1b2311367d1f64d264fd6bf69f45ba2" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6  col-lg-2">
            <div className="card">
              <label htmlFor="toggle10">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christof-2022-B1.jpg%3F_v%3D1654880675.724701?auto=format&ixlib=python-1.1.2&w=200&s=945daf62cb3d4ec59265df18cfd295f7" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6  col-lg-2">
            <div className="card">
              <label htmlFor="toggle11">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Gerardo-2021-B1.jpg%3F_v%3D1622565203.6054406?auto=format&ixlib=python-1.1.2&w=200&s=05bc6e476198717ab0b5e91beba04a3b" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6  col-lg-2">
            <div className="card">
              <label htmlFor="toggle12">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Seann-2022-B1.jpg%3F_v%3D1653605674.2341702?auto=format&ixlib=python-1.1.2&w=200&s=89c9ac5db178fc9107c065cc9173e27c" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="dropcontent mt-3 d-sm-none d-md-none d-lg-block">
            <div className="div">
              <input type="checkbox" id="toggle7" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Jim-2022-B2.jpg%3F_v%3D1655738005.209473?auto=format&ixlib=python-1.1.2&w=500&s=3eb2363d8f34bb8ab0dbff1bea71b64b" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Jim</h3>
                    <p>Jim is an efficiency enforcer with a heart of gold, <br /> hailing from the ever expanding Chicagoland beast in <br />Illinois. He's passionate about anything embodying <br /> variety and balance at the same time—think tightrope <br /> walking octopi, or sumo wrestlers practicing yoga. Jim <br /> can hold his own on the soccer field, chess board, yoga <br /> mat, and conference room. He and his wife Sarah <br /> annually host a short film festival and an audio festival <br /> through their creative group, Yumi Life.</p>
                    <p>I'M GOOD AT: CHESS (E4 SUCKAS)</p>
                  </div>                 
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle8" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Joe_813Captureone-1_edit_2.jpg%3F_v%3D1392968046.0?auto=format&ixlib=python-1.1.2&w=500&s=92c157e047dfd77b5fb30fdefc3e9aac" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Joe</h3>
                    <p>Joe is the other half of Grovemade’s founding pair, along <br /> with Ken. After six years of life changing challenges at <br /> Grovemade, he decided to switch things up and start a <br />new paper goods company called Pacific & West. He <br />continues to laser anything he can fit into his machine, <br /> including a line of premium customizable leather goods <br /> called Engrave Goods. </p>
                    <p>I'M GOOD AT: RUNNING</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle9" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-John-2018-B1.jpg%3F_v%3D1529970563.9168112?auto=format&ixlib=python-1.1.2&w=500&s=1335dea7396068e632a503aae954614d" width={350} alt="" />
                  <div className="div text-center">
                    <h3>John</h3>
                    <p>John is the master process-optimizer and efficiency <br />aficionado in our shop, where he gets his hands dirty <br />each day building beautiful products. He is a Portland <br /> native, and, so, naturally, he’s also an accomplished <br /> rock drummer. He has a rad collection of bikes, which <br /> he uses exclusively for cruisin’. He likes the Flaming <br />Lips, and suggests that if you see them live, you should  <br />pay attention to the drummer.</p>
                    <p>KINDRED SPIRIT: SNOOP DOG <br />
                    I’M GOOD AT: DRUMMING AND MAKING BEAUTIFUL <br /> MUSIC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle10" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christof-2022-B1.jpg%3F_v%3D1654880675.724701?auto=format&ixlib=python-1.1.2&w=500&s=1152d6cd9bc1a6b4a955fa64f31e9eab" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Christof</h3>
                    <p>Christof knows exactly one more thing about exactly <br />one more movie than Max does. How? Well, by writing <br />so many short stories. Short story authors, in contrast <br /> to long story authors, can watch more movies. And, in <br />Christof's case, make more movies—including ones <br /> screened at the Northwest Film Center. And to top it <br /> off, one time they performed stand-up comedy in the <br /> Portland Art Museum. Brava, Christof!</p>
                    <p>FAVORITE SAUCE: PESTO <br />
                    I'M GOOD AT: PUNS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle11" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Gerardo-2021-B1.jpg%3F_v%3D1622565203.6054406?auto=format&ixlib=python-1.1.2&w=500&s=6699ce80e8a4575e63f97a3fa2921b2a" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Gerardo</h3>
                    <p>Gerardo once ate an oyster with an actual pearl inside. <br /> He keeps the pearl—his good luck charm—in a little <br /> glass bottle. As far as we're concerned, this is plenty of <br /> high quality biographical information, but we'll tell you <br /> a little more—Gerardo loves Esports, and once <br /> completed a Dot-to-Dot with over 2000 dots. That’s <br /> called patience, folks!</p>
                    <p>I'M GOOD AT: VIDEO GAMES</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle12" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Seann-2022-B1.jpg%3F_v%3D1653605674.2341702?auto=format&ixlib=python-1.1.2&w=500&s=7d8afa9a45dd3e8619feeaa8f86ed40e" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Seann</h3>
                    <p>What's the longest bridge in the world? Who produced <br /> "The Godfather II"? Which oceanic current is used by <br /> migrating humpback whales? Just wanted to kick <br /> things off with some trivia, which is Seann's forte! Not <br /> only is he good at trivia, but he also likes disco, retro <br /> video games, and antiquing. The past, to Seann, is a <br /> rich playground for exploration. At Grovemade, you'll <br /> find him being extremely helpful.</p>
                    <p>I'M GOOD AT: TRIVIA NIGHTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle13">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christian-2020-B1.jpg%3F_v%3D1586197301.2240617?auto=format&ixlib=python-1.1.2&w=200&s=4fd14973daaa00ee41d52209894fad46" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle14">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Ken-2022-B1.jpg%3F_v%3D1653605189.6620848?auto=format&ixlib=python-1.1.2&w=200&s=0620742ce7cd853863852d4653eaa677" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle15">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sara-2022-B1.jpg%3F_v%3D1653605178.5921135?auto=format&ixlib=python-1.1.2&w=200&s=13d0f772d71a774e8406090da8cce4ea" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle16">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Caroline-2022-B1.jpg%3F_v%3D1653605563.0111234?auto=format&ixlib=python-1.1.2&w=200&s=6bdedb91c6176f36d5dd5fb17d79774e" className="card-img-top" />
              </label>
            </div>
          </div> 
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle17">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Emma-2021-B1.jpg%3F_v%3D1622565245.4653075?auto=format&ixlib=python-1.1.2&w=200&s=c42d559d0516486a07261a8c332c0bb6" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle18">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Ben_B2_1.jpg%3F_v%3D1536256969.1946445?auto=format&ixlib=python-1.1.2&w=200&s=b8c360ce532a53e664d818348533897f" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="dropcontent mt-3 d-sm-none d-md-none d-lg-block">
            <div className="div">
              <input type="checkbox" id="toggle13" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christian-2020-B1.jpg%3F_v%3D1586197301.2240617?auto=format&ixlib=python-1.1.2&w=500&s=4432ff0f3d963d9852e8f313711b9fd9" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Christian</h3>
                    <p>Christian is a jack of all trades, but don’t call him <br />“Jack”. Event planning? Check. Building everything? <br /> Check. Resident wakeboarder? Check. Producing a <br />vodka brand? Check. He came to us from Lake Tahoe <br /> and the University of Oregon Product Design program, <br /> where he says he built a particle accelerator that fits in <br /> your pocket, but we think he was exaggerating. In his <br />spare time he advises on ideal burger toppings and <br /> talks about his Subaru.</p>
                    <p>KINDRED SPIRIT: COOKIE MONSTER <br />
                    I'M GOOD AT: MAKING THINGS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle14" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Ken-2022-B1.jpg%3F_v%3D1653605189.6620848?auto=format&ixlib=python-1.1.2&w=500&s=a3d855d9532645fc0cb0b5713b624031" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Ken</h3>
                    <p>Ken started the company with Joe in 2009 under the <br /> impression that eventually there’d be free pizza. Ken is <br /> a design nerd and furniture designer with a passion for <br />photography and collecting weird things, like fruit <br /> stickers. He’s an active field trip enabler and enjoys <br /> bribing the team with Trailblazers tickets and empty <br /> promises that someday we’ll all get to see his expertly <br /> curated apartment. Check out some of his furniture <br /> designs here.</p>
                    <p>I'M GOOD AT: DANCING TO 90S MUSIC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle15" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sara-2022-B1.jpg%3F_v%3D1653605178.5921135?auto=format&ixlib=python-1.1.2&w=500&s=8b3c83a874f8794b0e3b88c2a19926bf" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Sara</h3>
                    <p>Sara is so good at learning about things, that <br /> sometimes you say, “When did she learn to do that?” <br /> But before you even finish saying that she’s learned <br /> about something else! She’s a chocolate enthusiast <br /> with a degree in design. She likes to ponder low-waste <br /> living and sustainability while biking to work, which is <br />nicely consistent of her. Unsurprisingly, she excels at <br />many things in the shop, from woodworking to <br /> customer service and writing.</p>
                    <p>KINDRED SPIRIT: KOALA <br />
                    I'M GOOD AT: LEARNING!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle16" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Caroline-2022-B1.jpg%3F_v%3D1653605563.0111234?auto=format&ixlib=python-1.1.2&w=500&s=08e3addc8a2043912e96c6fe01c76902" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Caroline</h3>
                    <p>Caroline is an inter-continental dog-rescuing field <br /> hockey-playing curbside treasure-hunting <br />extraordinaire. She's considered starting a TV show <br /> about renovating houses using only found furniture, <br /> called "Kicked to the Curb"... or at least, she could <br /> consider it, if she wanted to. She likes homemade <br /> baked goods and lavender scent. And, probably, <br /> lavender-scented homemade baked goods. Or <br /> homemade baked goods which contain lavender! Oh, <br /> the possibilities!</p>
                    <p>I’M GOOD AT: KEEPING THE PEACE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle17" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Emma-2021-B1.jpg%3F_v%3D1622565245.4653075?auto=format&ixlib=python-1.1.2&w=500&s=bca9a18a0273431f4ba2994ee50437b0" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Emma</h3>
                    <p>Emma is our resident whistler and omnichord <br /> enthusiast—a musical predilection that suits our <br /> workshop well. (Whistle while you work, am I right?) <br /> Moss and lichen are her favorite growy-things, which <br /> are quite suited to the Pacific Northwest. Outside of <br /> building things at work, you'll likely find Emma <br /> doodling. Doodling what? Wouldn’t you like to know?</p>
                    <p>I'M GOOD AT: WHISTLING "MEMORY" FROM CATS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle18" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Ben_B2_1.jpg%3F_v%3D1536256969.1946445?auto=format&ixlib=python-1.1.2&w=500&s=31d8928e2d60f3db00ac7d54c60b459f" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Ben</h3>
                    <p>Ben is a fellow of numerous talents. Here at <br /> Grovemade, he's our manufacturing engineer, meaning <br /> he commands our machinery to do as he wills! He also <br /> fixes them when they break and puts them on timeout <br /> when they disobey the rules. A dedicated father of two <br /> radical daughters, Ben also loves taking them to the <br /> backcountry for adventurous excursions. When the <br /> perfect river or stream is found, they bring in the fish <br /> with Ben's handmade rods and flies. In his free time, <br /> Ben is also hard at work inventing a robot that will sing <br /> his favorite lullabies as he prepares to dive into his <br /> daily afternoon nap. And beware of disturbing Ben <br /> when he's at rest—his prototype Lullaby Robot X-25 is <br /> also outfitted with lasers.</p>
                    <p>KINDRED SPIRIT: CUTTHROAT TROUT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle19">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Wren-2021-B1.jpg%3F_v%3D1622565282.9885213?auto=format&ixlib=python-1.1.2&w=200&s=b81e895069d17d473bae35b6ad79debc" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle20">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Gillian-2022-B1.jpg%3F_v%3D1653605629.3209524?auto=format&ixlib=python-1.1.2&w=200&s=71d8dd996c609646f0be492b4f1eb903" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle21">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Justin_B1_E6s05Bk.jpg%3F_v%3D1592236364.5817065?auto=format&ixlib=python-1.1.2&w=200&s=4dd6092565b10e4dd759839e1ec8b064" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle22">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sean-2020-B1.jpg%3F_v%3D1586203279.7607358?auto=format&ixlib=python-1.1.2&w=200&s=aff79ccd7f9c3187c98b4a6cffe39503" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle23">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nozomi-2017-B1.jpg%3F_v%3D1488819935.1219215?auto=format&ixlib=python-1.1.2&w=200&s=2e44c882ddf91abd637c95b8175cfd75" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-6 col-lg-2">
            <div className="card">
              <label htmlFor="toggle24">
                <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Dashia_B2.jpg%3F_v%3D1454971390.4028828?auto=format&ixlib=python-1.1.2&w=200&s=a90ed29d1b08d3aaf63c82a68cda4018" className="card-img-top" />
              </label>
            </div>
          </div>
          <div className="dropcontent mt-3 ">
            <div className="div">
              <input type="checkbox" id="toggle19" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Wren-2021-B1.jpg%3F_v%3D1622565282.9885213?auto=format&ixlib=python-1.1.2&w=500&s=5a39ef642fbb6bd35f0610f9ac33f243" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Wren</h3>
                    <p>Wren has climbed 57 of the 58 14,000-foot-tall <br />mountains in Colorado. The final one is on private <br /> property, but perhaps she'll summit that one day, too. <br /> She loves knitting and flamin' hot cheetos, but never at <br /> the same time. When she's not at work building things <br /> in our shop, you’ll find her en route to the desert of <br /> Southwestern Utah.</p>
                    <p>FAVORITE COLOR: GREEN <br />
                    I'M GOOD AT: DRIVING FOR HOURS AND HOURS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle20" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Gillian-2022-B1.jpg%3F_v%3D1653605629.3209524?auto=format&ixlib=python-1.1.2&w=200&s=71d8dd996c609646f0be492b4f1eb903" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Gillian</h3>
                    <p>To start with a bang: Gillian once made eye contact <br /> with Paul Giamatti while he was inside of a dumpster. <br /> She dabbled in stand up comedy, until she decided she <br /> hated it, and now she holds down the fort at <br /> Grovemade. Gillian is a published poet, is good at <br /> making soup and has some very particular daydreams <br /> about adopting (direct quote here) "a bunch of grumpy <br /> geriatric chihuahuas."</p>
                    <p>FAVORITE ANIMAL: CAPYBARA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle21" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Justin_B1_E6s05Bk.jpg%3F_v%3D1592236364.5817065?auto=format&ixlib=python-1.1.2&w=500&s=b922d5bf48aa9fd0178d8001acd87eb6" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Justin</h3>
                    <p>Justin's a laid back guy who enjoys the finer things in <br /> life: a Tom Collins, a clean haircut, and the finest of <br />contemporary cinema (Young Guns II; Cool Runnings; <br /> The Mighty Ducks). With a voice reminiscent of radio <br /> men of yon, Justin's soothing baritone brings an <br /> exuberant calm to the woodshop.</p>
                    <p>KINDRED SPIRIT: EMILIO ESTEVEZ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle22" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sean-2020-B1.jpg%3F_v%3D1586203279.7607358?auto=format&ixlib=python-1.1.2&w=500&s=8ab5eb3bfc4a717867a46dcef94e42ad" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Sean  </h3>
                    <p>Sean is a man-bear hybrid who rules the woodshop <br /> with the ultimate weapon: love. His heart is so big he <br /> doesn’t have room for any other organs, and he’s got a <br /> PhD in Silliness. Alright, he does have a brain, but, it’s <br /> part of his heart -- it’s like a heart-brain. His heart- <br /> brain is SMART. This guy is a space camp graduate and <br /> a product design genius! He’s also got an amazing <br /> collection of embarrassing stories to make you cringe <br /> with joy.</p>
                    <p>I LIKE TO HELP PEOPLE LAUGH. <br />
                    IF I CAN'T HELP THEM, I MAKE THEM.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle23" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nozomi-2017-B1.jpg%3F_v%3D1488819935.1219215?auto=format&ixlib=python-1.1.2&w=500&s=c519858bcc4096038528fa96dc6516ab" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Nozomi  </h3>
                    <p>Nozomi is a world-traveling musician and number <br /> wizard extraordinaire. She makes sure all of our <br /> business details have nice snug little homes where they <br /> don’t get lost or swept under the rug. In a past life, she <br /> was a scientist, and we all feel much smarter when <br /> she’s around. Her ideal Sunday includes Dim Sum - but <br /> she wouldn’t tell us about the rest of the day, because <br /> she says she really likes to be mysterious, so there you <br /> go.</p>
                    <p>KINDRED SPIRIT: MONKEY <br />
                    I'M GOOD AT: REMEMBERING DETAILS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <input type="checkbox" id="toggle24" />
              <div className="dropdown-content col-11">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <img src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Dashia_B2.jpg%3F_v%3D1454971390.4028828?auto=format&ixlib=python-1.1.2&w=500&s=cbf4fd311f435ebabc1f82837603a700" width={350} alt="" />
                  <div className="div text-center">
                    <h3>Dashia  </h3>
                    <p>Dashia is the magical fairy of the woodshop; actually, <br /> she’s the magical fairy of everything good about <br /> Grovemade and life in general. When she’s not in the <br /> workshop, she’s building bookshelves at home or <br /> crocheting scarves and hats. Maybe all the gravel she <br />sucked on as a child contributed to her talent with <br /> natural materials? Look out small stones, Dashia is a <br /> force of positive energy to be reckoned with. She’s also a <br /> loving Mom of two, and her true number one passion is <br /> family.</p>
                    <p>I'M GOOD AT: BUILDING THINGS</p>
                  </div>
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
      <div className="container-fluid col-11 mt-5 d-flex justify-content-between align-items-center" >
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
        <a className='col-1 text-center pt-2 pb-2 d-sm-none d-md-block' href='#top' style={{ textDecoration: "none", backgroundColor: theme == "light" ? "black" : "white",color: theme == "light" ? "white" : "black", alignContent: "center", fontFamily: "din-2014,helvetica,ssans-serif" }}>GO <br /> UP</a>
      </div>
      <div className="div mt-5 d-flex justify-content-between d-sm-none d-md-none d-lg-flex">
        <div className="col-1 ">
          <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "20px" }}>
            <li><a href="" style={{ color: "black" }}><FaFacebookF /></a></li>
            <li><a href="" style={{ color: "black" }}><IoLogoInstagram /></a></li>
            <li><a href="" style={{ color: "black" }}><FaLinkedin /></a></li>
          </ul>
        </div>
        <div className="col-8">
          <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", alignItems: "center", fontStyle: "italic", fontFamily: "surveyor text a, surveyor text b, Georgia, serif", fontSize: "15px" }}>
            <li  style={{ color: "grey" }}>©2024 Grovemade</li>
            <li style={{ color: "grey" }}>Terms & Conditions</li>
            <li  style={{ color: "grey" }}>Accessibility Statement</li>
            <li  style={{ color: "grey" }}>Privacy Policy</li>
            <li >Site by Department</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home;
