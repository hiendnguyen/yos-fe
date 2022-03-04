import React from "react";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <header id="header">
      <nav>
        <div className="NavLeftContainer">
          <a href="#body" className="pull-left">
           LOGO
          </a>
        </div>

        <div className="NavRightContainer flex" style={{ alignItems: 'center', justifyContent: 'space-between'}}>
          <a href="#Blog">Blog</a>
          <a href="#Community">Community</a>
          <a href="#Login">Login</a>
        </div>
      </nav>
    </header>
  );
};
