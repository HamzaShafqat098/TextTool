// import React, { useState } from "react";
import React from "react";

export default function About(props) {
  const darkModeStyles = {
    backgroundColor: "#2c3136",
    color: "#FFFFFF",
    textAlign: "justify",
  };

  const myStyle = {
    backgroundColor: "#FFFFFF",
    color: "#212529",
    textAlign: "justify",
  };

  // const darkModeIcons = {
  //   color: "#fff",
  //   boxShadow: "0 0 3px rgba(0, 0, 0, .2)",
  // };

  // const normalIcons = {
  //   color: "#323232",
  // };

  // const [isDarkMode, setIsDarkMode] = useState(false);

  const combinedStyle = props.isDarkMode ? darkModeStyles : myStyle;
  // const combinedIconsStyle = isDarkMode ? darkModeIcons : normalIcons;

  // const toggleDarkMode = () => {
  //   if (combinedStyle.color === "#212529") {
  //     setIsDarkMode(true);
  //   } else {
  //     setIsDarkMode(false);
  //   }
  // };
  return (
    <div className="container" style={combinedStyle}>
      <div className="about-section paddingTB60">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-6">
              <div className="about-title clearfix">
                <h1 style={combinedStyle}>
                  About <span className="logo-text">Text</span>
                  <span className="logo-tool text-warning">Tool</span>
                </h1>
                <h3 style={combinedStyle}>
                  Transform text effortlessly! Convert to UPPERCASE, lowercase,
                  count words and characters, and estimate reading time. Just
                  type or paste your text, and unleash the power at your
                  fingertips!
                </h3>
                <p className="about-paddingB" style={combinedStyle}>
                  Discover our Text Tool – the all-in-one solution for
                  effortless text manipulation! Easily convert text to
                  UPPERCASE, lowercase, Capitalized Case, and aLtErNaTiNg CaSe
                  for a touch of fun. Get valuable insights with word and
                  character counts, plus an estimated reading time. Experience
                  the convenience today!
                </p>
                <p style={combinedStyle}>
                  Effortlessly transform your text with our user-friendly Text
                  Tool. Convert to UPPERCASE, lowercase, or try Capitalized Case
                  and aLtErNaTiNg CaSe. Stay precise with word and character
                  counts, and estimate reading time. Maximize productivity now!
                </p>
                <div className="about-icons">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i
                          id="social-fb"
                          className="fa fa-facebook-square fa-3x social"
                        ></i>
                      </a>{" "}
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i
                          id="social-tw"
                          className="fa fa-twitter-square fa-3x social"
                        ></i>
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="https://plus.google.com/">
                        <i
                          id="social-gp"
                          className="fa fa-google-plus-square fa-3x social"
                        ></i>
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="mailto:hamzashafqat098@gmail.com">
                        <i
                          id="social-em"
                          className="fa fa-envelope-square fa-3x social"
                        ></i>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-md-5 col-sm-6">
              <div className="about-img">
                <img
                  src="https://devitems.com/preview/appmom/img/mobile/2.png"
                  alt=""
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button
          id="darkModeBtn"
          className="btn btn-primary fixed-bottom ml-2 mb-2"
          style={combinedIconsStyle}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div> */}
    </div>
  );
}