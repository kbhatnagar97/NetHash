import React from "react";
import "./TextInput.css";

export const TextInput = (props: {
  text?: string;
  inputValue: (string) => void;
  className?: string;
}) => {
  return (
    <div className="Input ">
      <input
        type="text"
        className={props.className}
        placeholder={props.text}
        onChange={event => props.inputValue(event.target.value)}
      />
    </div>
  );
};
