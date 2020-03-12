import React from "react";
import "./TextInput.css";

export const TextInput = (props: {
  text?: string;
  inputValue: (string) => void;
}) => {
  return (
    <div className="TextInput">
      <input
        type="text"
        className="Text"
        placeholder={props.text}
        onChange={event => props.inputValue(event.target.value)}
      />
    </div>
  );
};
