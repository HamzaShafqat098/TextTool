import React, { useState } from "react";

const TextForm = (props) => {
  const handleUppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("CONVERTED TO UPPERCASE!", "success");
  };

  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("CONVERTED TO LOWERCASE!", "success");
  };

  const handleCapitalizeWordClick = () => {
    let newText = text.toLowerCase();
    setText(newText.replace(/\b\w/g, (c) => c.toUpperCase()));
    props.showAlert("Words Capitalized!", "success");
  };

  const handleRemoveExtraSpacesClick = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  const handleCopyClick = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "warning");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  let splitArray = [];
  if (text.trim() !== "") {
    splitArray = text.split(" ");
  }

  return (
    <div
      className="container mt-4"
      style={{ color: props.mode === "light" ? "#212529" : "#FFFFFF" }}
    >
      <h1 className="mb-4">{props.heading}</h1>
      <div className="form-group">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder=""
          style={{
            backgroundColor: props.mode === "light" ? "#FFFFFF" : "#2c3136",
            color: props.mode === "light" ? "#212529" : "#FFFFFF",
          }}
        ></textarea>
      </div>
      <div className="btn-group mt-3">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={handleUppercaseClick}
        >
          Convert To Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={handleLowercaseClick}
        >
          Convert To Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={handleCapitalizeWordClick}
        >
          Capitalize Words
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={handleRemoveExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h2>Text Summary</h2>
        <p>
          {splitArray.length} Words and {text.length} Characters
        </p>
        <p>{(0.008 * splitArray.length).toFixed(2)} Minutes to Read</p>
      </div>
      <div className="container border border-primary rounded p-3">
        <h2>Preview</h2>
        <p
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          {text.length > 0
            ? text
            : "Please Enter Your Text In The Above Textarea To Preview It Here."}
        </p>
      </div>
    </div>
  );
};

export default TextForm;