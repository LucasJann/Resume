import React from "react";
import classes from './Navigation.module.css'

const Navigation = () => {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Experiences</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
