import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Header from "../../components/header/Header";

import log from "../../images/about-page/log.png";
import adddream from "../../images/about-page/adddream.png";
import blog from "../../images/about-page/blog.png";
import statistics from "../../images/about-page/statistics.png";
import privacy from "../../images/about-page/privacy.png";
import dashboard from "../../images/about-page/dashboard.png";
import WaterMark from "../../components/watermark/WaterMark";

function About() {
  return (
    <>
      <Header />
      <section className="about-section">
        <p>
          All of us have dreams. Dreams can be a powerful tool to understand
          oneself and are an infinite source of inspiration. The Dream log app
          is here to help you to keep track of your dreams.
        </p>
        <img src={log} className="demo-image" />
        <p>
          We encourage you to write your dreams every morning as soon as you
          wake up. Give your dream a memorable title and write a short story
          about that adventure. You can categorize your dream as Lucid, Normal,
          or Nightmare.
        </p>
        <img src={adddream} className="demo-image" />
        <p>
          Some dreams are worth sharing. Add your dreams to your dream blog by
          making them public and share the link with your friends and family.
        </p>
        <img src={blog} className="demo-image" />
        <p>You can change the privacy of any dream, anytime.</p>
        <img src={privacy} className="demo-image" />
        <p>
          Your dream statistics on the app will show the rate at which you have
          one type of dream over the others, how many hours of sleep you get,
          and what your average sleeping hours per dream type are.
        </p>
        <img src={statistics} className="demo-image" />
        <p>
          We keep your personal dream statistics ready, right on your page any
          time you want to get a better understanding of your dream data.
        </p>
        <img src={dashboard} className="demo-image" />
        <p>
          Join our Dream log family today and start your journey into
          understanding your subconscious psyche!
        </p>
        <Link to="signup" className="about-signup-link">
          Sign Up
        </Link>
      </section>
      <WaterMark />
    </>
  );
}

export default About;
