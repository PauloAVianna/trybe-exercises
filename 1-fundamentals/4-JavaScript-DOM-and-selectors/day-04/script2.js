const backgroundColor = document.querySelectorAll(`#background-color>button`);
const fontColor = document.querySelectorAll(`#font-color>button`);
const fontSize = document.querySelectorAll(`#font-size>button`);
const lineHeight = document.querySelectorAll(`#line-height>button`);
const fontFamily = document.querySelectorAll(`#font-family>button`);
const content = document.querySelector(`.content`);


window.onload = () => {
    const setBackgroundColor = (color) => {
        content.style.backgroundColor = color;
        localStorage.setItem(`backgroundColor`, color);
    }

    for (let index = 0; index < backgroundColor.length; index += 1) {
        backgroundColor[index].addEventListener(`click`, (event) => {
            setBackgroundColor(event.target.innerText);
        });
    }

    const setFontColor = (color) => {
        content.style.color = color;
        localStorage.setItem(`fontColor`, color);
    }

    for (let index = 0; index < fontColor.length; index += 1) {
        fontColor[index].addEventListener(`click`, (event) => {
            setFontColor(event.target.innerText);
        });
    }

    const setFontSize = (size) => {
        content.style.fontSize = size;
        localStorage.setItem(`fontSize`, size);
    }

    for (let index = 0; index < fontSize.length; index += 1) {
        fontSize[index].addEventListener(`click`, (event) => {
            setFontSize(event.target.innerText);
        });
    }

    const setLineHeight = (height) => {
        content.style.lineHeight = height;
        localStorage.setItem(`lineHeight`, height);
    }

    for (let index = 0; index < lineHeight.length; index += 1) {
        lineHeight[index].addEventListener(`click`, (event) => {
            setLineHeight(event.target.innerText);
        });
    }

    const setFontFamily = (fontFamily) => {
        content.style.fontFamily = fontFamily;
        localStorage.setItem(`fontFamily`, fontFamily);
    }

    for (let index = 0; index < fontFamily.length; index += 1) {
        fontFamily[index].addEventListener(`click`, (event) => {
            setFontFamily(event.target.innerText);
        });
    }

    const intialize = () => {
        let backgroundColor = localStorage.getItem(`backgroundColor`);
        setBackgroundColor(backgroundColor);

        let fontColor = localStorage.getItem(`fontColor`);
        setFontColor(fontColor);

        let fontSize = localStorage.getItem(`fontSize`);
        setFontSize(fontSize);

        let lineHeight = localStorage.getItem(`lineHeight`);
        setLineHeight(lineHeight);
        
        let fontFamily = localStorage.getItem(`fontFamily`);
        setFontFamily(fontFamily);
    }

    intialize();
}
