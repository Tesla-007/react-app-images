import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <ul className={classes.ul}>
      <li><Link to="/page1">Button1</Link></li>
      <li><Link to="/page2">Button2</Link></li>
    </ul>
  );
};

export default Header;
