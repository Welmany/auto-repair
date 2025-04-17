import React from 'react';
import './Button.css';

const styles = ['btn-primary', 'btn-outline'];
const sizes = ['btn-medium', 'btn-large'];

function Button({ buttonStyle, buttonSize, text }) {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
            {text}
        </button>
    );
}

export default Button;