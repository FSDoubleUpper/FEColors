import style from "../css/main.css";
import React, { useState } from "react";

export default function Main() {
    const [colorText, setColorText] = useState("rgb(0,0,0)");
    const [colorBackground, setColorBackground] = useState("rgb(0,0,0)");
    const [customTxt, setCustomTxt] = useState("Custom Text");

    const generateRandomColorText = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        setColorText((prevColor) => `rgb(${r},${g},${b})`);

        document.getElementsByClassName("color-text");
    };
    const generateRandomColorBoth = () => {
        generateRandomColorText();
        generateRandomColorBackground();
    };
    const generateRandomColorBackground = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        setColorBackground((prevColor) => `rgb(${r},${g},${b})`);

        document.getElementsByClassName("color-background");
    };

    function handleClick(event) {
        setCustomTxt(event.target.innerText);
        event.target.contentEditable = false;
    }

    return (
        <>
            <div className="wrapper">
                <h1 className="title">FEColors</h1>
                <p
                    className="color-txt"
                    style={{
                        color: colorText,
                        backgroundColor: colorBackground,
                    }}
                    onClick={handleClick}
                >
                    {customTxt}
                </p>
                <div className="color-info-container">
                    <span className="color-info">text: </span>
                    {colorText}
                    <br />
                    <span className="color-info">background: </span>
                    {colorBackground}
                </div>
                <button
                    className="random-btn"
                    onClick={generateRandomColorText}
                >
                    Randomize TEXT color!
                </button>
                <button
                    className="random-btn"
                    onClick={generateRandomColorBoth}
                >
                    Randomize BOTH colors!
                </button>
                <button
                    className="random-btn"
                    onClick={generateRandomColorBackground}
                >
                    Randomize BACKGROUND color!
                </button>
            </div>
        </>
    );
}
