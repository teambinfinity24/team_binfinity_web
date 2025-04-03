import React, { useEffect } from "react";

const LanguageDropDown = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        const translateElement = document.querySelector(".goog-te-combo");
    
        if (translateElement) {
            translateElement.value = selectedLanguage;
            translateElement.dispatchEvent(new Event("change"));
        } else {
            console.error("Google Translate script not loaded yet.");
        }
    };
    

    return (
        <div>
            <select onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="es">Spanish</option>
                <option value="hi">Hindi</option>
                <option value="zh-CN">Chinese</option>
            </select>
            <div id="google_translate_element" style={{ display: "none" }}></div>
        </div>
    );
};

export default LanguageDropDown;
