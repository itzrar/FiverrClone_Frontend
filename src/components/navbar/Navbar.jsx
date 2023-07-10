import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    // for changing navbar color on scroll
  const [active,setActive] = useState(false)

  //for user menu option dropdown
  const [open,setOpen] =  useState(false)

  // menu color to not change on other pages except for home
  const {pathname} = useLocation()

  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive)
    };
  },[])

  // current user active for menu links
  const currentUser = {
    id:1,
    username:"itzrar",
    isSeller:true,
  }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
            <span className='logo_text'>fiverr</span>
          </Link>
          <span className='logo_dot'>.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="src/components/navbar/ghizvri.png" alt="" />
              <span>{currentUser?.username}</span>
              {open && <div className="options">{
                currentUser?.isSeller && (
                  <>
                    <Link className='link' to="/mygigs">Gigs</Link>
                    <Link className='link' to="add">Add new gig</Link>
                  </>
                )}
                <Link className='link' to="/orders">Orders</Link>
                <Link className='link' to="/messages">Messages</Link>
                <Link className='link' to="/logout">Logout</Link>
              </div>}
            </div>
          )}
        </div>
        
      </div>
      {/* Lower Menu */}
      {(active || pathname !=="/") && (
        <>
          <hr />
          <div className="lower_menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
        )}
    </div>
  )
}

export default Navbar