import React from "react";
import "./Button1.css";

export const Button = (props: { 
  onClick(): void;
  element?: any; 
  className?: string;
}) => {
  return (
    <div className="Button1">
      <link
        href="https://fonts.googleapis.com/css?family=Fredoka One"
        rel="stylesheet"
      />
      <button 
      className={props.className}
      onClick={props.onClick} >
        >
      </button>
    </div>
  );
};
