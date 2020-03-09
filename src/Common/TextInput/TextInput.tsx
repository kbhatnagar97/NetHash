import React from 'react';
import './TextInput.css';

export const TextInput = (props:{text?:string}) => {
    return (
        <div className="TextInput">
            <input type="text" className="Text" placeholder={props.text}/>
        </div>
    );
}