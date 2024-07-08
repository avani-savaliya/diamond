import React, { useState } from 'react';
import { useEffect } from 'react'
import Headerlogo from './asstes/Images/header-logo.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import $ from 'jquery'


const Nabvar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const responsive = {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    },
    1440: {
      items: 1
    }
  }


  return (
    <>
      <div className="mainTopbar m-0 ">
        <div className="container">
          <div className="topBar col-12">
            <OwlCarousel
              className='owl-theme'
              loop
              nav={false}
              dots={false}
              responsive={responsive}
              autoplay={true}
              autoplayTimeout={3000}
              autoplayHoverPause={true}>
              <span> 1st time buyer? Use “One” promocode to get 10% discount
                <p>Learn more</p>
              </span>

              <p> FLAT 30% OFF on 500+ Designs!</p>
              <p>Introducing CaratLane PoP! Plan your purchase</p>

            </OwlCarousel>
            <div className="closeIcon">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      </div>
      <MenuScript />
      <div className={`mainHeader `}>

        <div className="mainNavigation m-0">
          <div className="container">
            <div className="row d-flex align-items-center position-relative navigation  justify-content-center">
              <div className="col-lg-2 col-md-8 col-8 col-sm-8 m-0">
                <div className="logobar">
                  <Link to={'/'}>
                    <img src={Headerlogo} alt='img' />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-12  col-6  m-0 navBar">
                <nav>
                  <ul className='mainMenu'>
                    <li> <Link to='#'>ENGAGEMENT RINGS</Link></li>
                    <li><Link to='#'>WEDDING RINGS</Link></li>
                    <li><Link to='#'>DIAMONDS </Link></li>
                    <li><Link to='#'>GEMSTONES </Link></li>
                    <li><Link to='#'>JEWELRY </Link></li>
                    <li><Link to='#'>GIFTS </Link></li>
                    <li><Link to='#'>ABOUT </Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-2 col-2 col-lg-2 col-sm-2">
                <div className="togglebar ">
                  <i class="fa-solid fa-bars"></i>
                </div>
                <div className="iconBar">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <i class="fa-regular fa-heart"></i>
                  <i class="ri-shopping-bag-line"></i>
                  <i class="fa-regular fa-user"></i>

                </div>
              </div>
            </div>

            {/* ==================mob-naviagation=============================== */}
            <div className="mob-navBar offSidebar">
              <div className="icon closeIcon ">
                <span><i class="fa-solid fa-xmark" ></i></span>
              </div>
              <div className="startNav">
                <div className="logoBar">
                  <img src={Headerlogo} alt='img' />
                </div>
                <nav>
                  <ul className='mainMenu'>
                    <li> <Link to='#'>ENGAGEMENT RINGS</Link>

                    </li>
                    <li><Link to='#'>WEDDING RINGS</Link></li>
                    <li><Link to='#'>DIAMONDS </Link></li>
                    <li><Link to='#'>GEMSTONES </Link></li>
                    <li><Link to='#'>JEWELRY </Link></li>
                    <li><Link to='#'>GIFTS </Link></li>
                    <li><Link to='#'>ABOUT </Link></li>
                  </ul>
                </nav>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default Nabvar


export const MenuScript = () => {
  useEffect(() => {
    $(".mob-navBar").hide();

    const handleToggleMenu = () => {
      $(".mob-navBar").show();
      $(".mob-navBar").toggleClass("offSidebar onSidebar");
    };

    const closeToggleMenu = () => {
      $(".mob-navBar").hide();
    };

    const handleSubMenu = (e) => {
      const target = e.currentTarget;
      $(".subMenu").not($(target).next()).slideUp();
      $(target).next().slideToggle();
    };

    const handleResize = () => {
      if (window.innerWidth > 993) {
        $(".mob-navBar").hide();
      }
    };

    $(".togglebar").on("click", handleToggleMenu);
    $(".closeIcon").on("click", closeToggleMenu);
    $(".mob-navBar .mainMenu li a").on("click", handleSubMenu);
    $(window).on("resize", handleResize);

    // Check on mount
    handleResize();

    return () => {
      $(".togglebar").off("click", handleToggleMenu);
      $(".closeIcon").off("click", closeToggleMenu);
      $(".mob-navBar .mainMenu li a").off("click", handleSubMenu);
      $(window).off("resize", handleResize);
    };
  }, []);

  return null;
};