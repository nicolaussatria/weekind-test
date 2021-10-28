import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../components/assets/logo-1x.png";
import logo2 from "../components/assets/logo-2x.png";
import logo3 from "../components/assets/logo-3x.png";
import background from "../components/assets/BG_1.svg";
import lego from "../components/assets/lego-1x.png";
import lego2 from "../components/assets/lego-2x.png";
import lego3 from "../components/assets/lego-3x.png";
import legorotate from "../components/assets/lego-rotate90-1x.png";
import AOS from "aos";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import path3 from "../components/assets/Path_3.svg";
import legorot from "../components/assets/lego-rotate-1x.png";

import "./mainPages.css";

const mainPages = () => {
  AOS.init();

  const slidesTesti = [
    {
      id: "dv2o78l11m",
      testimony:
        "I couldn't have asked for more than this. I wish I would have thought of it first. This is simply unbelievable!",
      by: "Arron",
    },
    {
      id: "903lf1itgt",
      testimony:
        "Wow what great service, I love it! Without WEEKEND, we would have gone by now. You guys rock!",
      by: "Kelsey",
    },
    {
      id: "nj645u5e4a",
      testimony: "I wish I would have thought of it first.",
      by: "Steven",
    },
    {
      id: "4rjtcb1wh0",
      testimony: "Fantastic, I'm totally blown away by WEEKEND",
      by: "Charley",
    },
    {
      id: "qvt7jp8p3d",
      testimony:
        "This is unbelievable. After using WEEKEND my business skyrocketed!",
      by: "Vanessa",
    },
  ];

  const slidesTips = [
    {
      id: "dbh6fghjgj",
      title: "Start quickly with simple steps",
      slug: "start-quickly-with-simple-steps",
      image:
        "https://wknd-take-home-challenge-api.herokuapp.com/dbh6fghjgj.jpg",
    },
    {
      id: "lgmd6ielxi",
      title: "Run smoothly at vero eos et accusamus",
      slug: "run-smoothly-at-vero-eos-et-accusamus",
      image:
        "https://wknd-take-home-challenge-api.herokuapp.com/lgmd6ielxi.jpg",
    },
    {
      id: "qlrl8c8xqg",
      title: "Denounce with righteous indignation",
      slug: "denounce-with-righteous-indignation",
      image:
        "https://wknd-take-home-challenge-api.herokuapp.com/qlrl8c8xqg.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light navbar-custom"
        id="mainNav"
      >
        <div className="container">
          <img
            src={logo}
            srcset={(logo2, logo3)}
            className="logo-bitmap"
            alt="logo"
          />
          <div className="flex-fill title">
            <div className="good-morning">
              Good Morning <br />
              <strong class="Fellas">Fellas</strong>
            </div>
          </div>
        </div>
      </nav>

      <header className="masthead-container">
        <div className="masthead">
          <div className="row" data-aos="fade-down" data-aos-duration="2000">
            <div className="col-12 text-center">
              <h1 className="display-1 WEEKEND-FROM-HOME">Weekend From Home</h1>
              <p className="Stay-active-with-a-l">
                Stay active with a little workout.
              </p>
              <img
                src={lego}
                srcSet={(lego2, lego3)}
                className="Bitmap-hero"
                alt="lego"
              />

              <button className="btn-rounded btn-hero btn-hero-effect position-absolute start-50 translate-middle">
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="quotes-section">
        <div
          className="d-flex align-items-end flex-column bd-highlight"
          style={{ height: "200px" }}
        >
          <img
            src={legorotate}
            className="img-lego-rotate"
            data-aos="fade-left"
            alt="legorotate"
          />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center content-text">
            <figure className="text-end">
              <blockquote class="blockquote p-3">
                <p>
                  <span className="text-blue">Deffinition;</span> a practice or
                  exercise to test or improve one's fitness for athletic
                  competition, ability, or performance to exhaust (something,
                  such as a mine) by working to devise, arrange, or achieve by
                  resolving difficulties. MerriamWebster.com Dictionary.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title text-light">weekend team</cite>
              </figcaption>
            </figure>
          </div>
          <div className="container testimonials">
            <div className="circle"></div>
            <h2 className="text-white text-center title m-0">Testimonial</h2>
            <div className="container">
              <Slider {...settings}>
                {slidesTesti.map((slide) => (
                  <div className="slick-slide" key={slide.id}>
                    <h5 className="slick-slide-title">{slide.by}</h5>
                    <p className="slick-slide-label">{slide.testimony}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section text-white">
        <div className="container container-box text-center">
          <div
            className="box-body"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="title ">POV</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div
            className="box-body"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className="title">Resource</h2>
            <p>
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best
            </p>
          </div>
          <div
            className="box-body mt-5"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="title">Help & Tips</h2>
          </div>
        </div>
        <div
          class="container-tips"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div class="path-3">
            <img src={path3} alt="path3" />
          </div>
          {slidesTips.map((tips) => (
            <div className="card card-tips">
              <img className="card-img-top" src={tips.image} alt={tips.title} />

              <div className="d-flex text-white">
                <div className="card-body">
                  <p className="flex-grow-1 m-0">{tips.title}</p>
                  <button className="btn btn-circle btn-tips">
                    <i className="fa fa-arrow-circle-right  "></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container container-box text-center">
          <div
            id="triggerLegoOnLeft"
            class="box-body last-dark-box"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="title">You're all set.</h2>
            <p>
              The wise man therefore always holds in these matters to this
              principle of selection.
            </p>
          </div>
        </div>
        <div className="lego-3" className="img-lego-rotate">
          <img src={legorot} alt="legorot" />
        </div>
      </section>
      <footer
        id="sticky-footer"
        className="footer flex-shrink-0 py-1 text-white"
      >
        <div className="d-flex container">
          <p className="text-center">
            <strong>wknd@</strong>2020
          </p>
          <p className="version-info text-end">alpha version 0.1</p>
        </div>
      </footer>
    </>
  );
};

export default mainPages;
