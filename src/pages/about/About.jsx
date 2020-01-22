import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Header from "../../components/header/Header";

import dream from "../../images/about-page/dream.png";
import log from "../../images/about-page/log.JPG";
import adddream from "../../images/about-page/adddream.JPG";
import blog from "../../images/about-page/blog.JPG";
import statistics from "../../images/about-page/statistics.JPG";
import statistics2 from "../../images/about-page/statistics2.JPG";
import privacy from "../../images/about-page/privacy.JPG";
import dashboard from "../../images/about-page/dashboard.JPG";

import logLaptop from "../../images/about-page/log-laptop.png";
import adddreamLaptop from "../../images/about-page/adddream-laptop.png";
import blogLaptop from "../../images/about-page/blog-laptop.png";
import statisticsLaptop from "../../images/about-page/statistics-laptop.png";
import privacyLaptop from "../../images/about-page/privacy-laptop.png";
import dashboardLaptop from "../../images/about-page/dashboard-laptop.png";

import WaterMark from "../../components/watermark/WaterMark";

function About() {
  const carouselLaptop = (
    <div className="carousel-laptop">
      <Carousel>
        <>
          <p className="about-p">
            All of us have dreams. Dreams can be a powerful tool to understand
            oneself and are an infinite source of inspiration. The Dream log app
            is here to help you to keep track of your dreams.
          </p>
          <img src={logLaptop} className="demo-image-laptop" />
        </>
        <>
          <p className="about-p">
            We encourage you to write your dreams every morning as soon as you
            wake up. Give your dream a memorable title and write a short story
            about that adventure. You can categorize your dream as Lucid,
            Normal, or Nightmare.
          </p>
          <img src={adddreamLaptop} className="demo-image-laptop" />
        </>
        <>
          <p className="about-p">
            Some dreams are worth sharing. Add your dreams to your dream blog by
            making them public and share the link with your friends and family.
          </p>
          <img src={blogLaptop} className="demo-image-laptop" />
        </>
        <>
          <p className="about-p">
            You can change the privacy of any dream, anytime.
          </p>
          <img src={privacyLaptop} className="demo-image-laptop" />
        </>
        <>
          <p className="about-p">
            Your dream statistics on the app will show the rate at which you
            have one type of dream over the others, how many hours of sleep you
            get, and what your average sleeping hours per dream type are.
          </p>
          <img src={statisticsLaptop} className="demo-image-laptop" />
        </>
        <>
          <p className="about-p">
            We keep your personal dream statistics ready, right on your page any
            time you want to get a better understanding of your dream data.
          </p>
          <img src={dashboardLaptop} className="demo-image-laptop" />
        </>
        <>
          <div className="dream-image">
            <img src={dream} />
          </div>
          <p className="last-p">
            Try demo:
            <br />
            login: test@test.com <br /> password: testtest <br />
            <br />
            And join our Dream log family today and start your journey into
            understanding your subconscious psyche!
          </p>
          <div className="about-signup-button">
            <Link to="signup" className="about-signup-link">
              Sign Up
            </Link>
          </div>
        </>
      </Carousel>
    </div>
  );

  const carouselPhones = (
    <div className="carousel-phones">
      <p className="about-p">
        All of us have dreams. Dreams can be a powerful tool to understand
        oneself and are an infinite source of inspiration. The Dream log app is
        here to help you to keep track of your dreams.
      </p>
      <img src={dream} className="dream-image" />
      <p className="about-p">
        We encourage you to write your dreams every morning as soon as you wake
        up. Give your dream a memorable title and write a short story about that
        adventure. You can categorize your dream as Lucid, Normal, or Nightmare.
      </p>
      <Carousel>
        <>
          <img src={dashboard} className="demo-image" />
        </>
        <>
          <img src={adddream} className="demo-image" />
        </>
        <>
          <img src={log} className="demo-image" />
        </>
      </Carousel>
      <p className="about-p">
        Some dreams are worth sharing. Add your dreams to your dream blog by
        making them public and share the link with your friends and family. You
        can change the privacy of any dream, anytime.
      </p>

      <Carousel>
        <>
          <img src={blog} className="demo-image" />
        </>
        <>
          <img src={privacy} className="demo-image" />
        </>
      </Carousel>
      <p className="about-p">
        Your dream statistics on the app will show the rate at which you have
        one type of dream over the others, how many hours of sleep you get, and
        what your average sleeping hours per dream type are. We keep your
        personal dream statistics ready, right on your page any time you want to
        get a better understanding of your dream data.
      </p>
      <Carousel>
        <>
          <img src={statistics} className="demo-image" />
        </>
        <>
          <img src={statistics2} className="demo-image" />
        </>
      </Carousel>
      <p className="last-p">
        Try demo:
        <br />
        login: test@test.com <br /> password: testtest <br />
        <br />
        And join our Dream log family today and start your journey into
        understanding your subconscious psyche!
      </p>
      <Link to="signup" className="about-signup-link">
        Sign Up
      </Link>
    </div>
  );

  return (
    <>
      <Header />
      {carouselPhones}
      {carouselLaptop}
      <WaterMark />
    </>
  );
}

export default About;
