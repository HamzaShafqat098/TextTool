// import picture from "./images/152830002_1307850789590901_1754293509697509871_n.jpg";
import "./App.css";
import Alert from "./components/Alert";
import "./About.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// let name1 = "<i>Hamza</i>";
// let name2 = "<i>Hello Hamza</i>";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c3136";
      showAlert("DARK MODE HAS BEEN ENABLED.", "success");
      document.title = "TextTool - Dark Mode";
      setIsDarkMode(true);
      setInterval(() => {
        document.title = "Grateful For Your Visit.";
      }, 1500);
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      showAlert("LIGHT MODE HAS BEEN ENABLED.", "success");
      document.title = "TextTool - Light Mode";
      setIsDarkMode(false);
      setInterval(() => {
        document.title = "Grateful For Your Visit.";
      }, 1500);
    }
  };
  return (
    <>
      {/* <Router> */}
        {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <h1>Hello {name1}</h1>
      <h1 dangerouslySetInnerHTML={{ __html: name2 }}></h1>
      <img src={picture} alt="Picture" />
      <div classNameName="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi
          aperiam ullam minus harum itaque at delectus expedita corrupti nam
          temporibus, beatae vel accusamus dolores neque eaque molestiae
          recusandae quo voluptate, nobis cupiditate nemo.
        </p>
      </div> */}
        <Navbar
          title1="Text"
          title2="Tool"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm
          heading="Enter The Text To Analyze Below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
          {/* <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter The Text To Analyze Below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;