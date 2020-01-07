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
        At another startup, a large development team had no idea what their
        approach to implementing CSS was. As the startup was forced to iterate
        extremely quickly, the design of the React application quickly grew out
        of sync. The design of one part of the app didn’t match the design of
        other parts. Soon the startup had to embark on a company-wide mission to
        “unify the UX” and fix the design inconsistencies. The team needed the
        time to fix things, but they still had to pump out new features every
        week. Things like this have happened so many times that I decided I’d
        just teach development teams how to prevent things like this from
        happening. The following information will help you start thinking about
        the right approach for your team’s large-scale React application(s).
        Step 1 — Integrate CSS Modules To create a scalable CSS architecture for
        a large-scale React app, I’d highly recommend integrating CSS Modules.
        That is if you want to use CSS to style your application instead of
        CSS-In-JavaScript. I much prefer using straight up CSS (with some help
        from SASS) to skin React applications, but there’s debate about this in
        the larger dev community. The main benefit of CSS Modules is it helps
        organize styles on a component-by-component basis, and it prevents style
        collisions from happening. When you develop your application using CSS
        Modules, the styles for any given component sit in the same directory as
        the JavaScript code. This approach makes it dead simple for developers
        on a large team to lo
      </p>
    </>
  );
}

export default About;
