import React from 'react';
import './Switch.css';

export const Switch = () => {
    
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"/>
        </label>
    );
}