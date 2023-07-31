import React from "react";

export default function Alert(props) {
  let a;
  let b;
  if (props.alert !== null) {
    a = props.alert.type;
    b = a.toUpperCase();
  }
  //   let a;
  //   let b;
  //   const capitalizeWord = (word) => {
  //     a = word.toLowerCase();
  //     b = a.charAt(0).toUpperCase() + a.slice(1);
  //     return b;
  //   };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{b}</strong>: {props.alert.message}
        {/* <strong>{capitalizeWord(props.alert.type)}</strong>:{" "}
        {props.alert.message} */}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    )
  );
}