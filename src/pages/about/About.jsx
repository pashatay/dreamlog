import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import Header from "../../components/header/Header";

function About() {
  return (
    <>
      <Header />
      <h1>About page</h1>
      <p>
        All of us have dreams. Dreams can be a powerful tool to understand
        oneself and are an infinite source of inspiration. The Dream log app is
        here to help you to keep track of your dreams. We encourage you to write
        your dreams every morning as soon as you wake up. Give your dream a
        memorable title and write a short story about that adventure. You can
        categorize your dream as Lucid, Normal, or Nightmare.   Some dreams are
        worth sharing. Add your dreams to your dream blog by making them public
        and share the link with your friends and family. Your dream statistics
        on the app will show the rate at which you have one type of dream over
        the others, how many hours of sleep you get, and what your average
        sleeping hours per dream type are. We keep your personal dream
        statistics ready, right on your page any time you want to get a better
        understanding of your dream data. Join our Dream log family today and
        start your journey into understanding your subconscious psyche!
      </p>
    </>
  );
}

export default About;
