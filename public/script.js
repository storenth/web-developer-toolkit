// toolbox elements

const buttonChecker = document.getElementById('button-checker');
const buttonPicker = document.getElementById('button-picker');
const buttonConverter = document.getElementById('button-converter');
const sizeChecker = document.getElementById('size-checker');
const colorPicker = document.getElementById('color-picker');
const emConverter = document.getElementById('em-converter');
const baseSize = document.querySelector('#base-size');
const px = document.querySelector('#px');
const em = document.querySelector('#em');
const convertButton = document.querySelector('#button-convert');
const resetButton = document.querySelector('#button-reset');

// screen size checker logic

let w = window.innerWidth;
let h = window.innerHeight;

document.getElementById('size').innerHTML = `${w} X 
${h}`;

// color picker logic

function colorRandomizer() {

    let rColor = Math.floor(Math.random() * 256);
    let gColor = Math.floor(Math.random() * 256);
    let bColor = Math.floor(Math.random() * 256);
    let opacityColor = parseFloat(Math.random().toFixed(1));

    let randomColorWithOpacity = "rgba(" + rColor + "," + gColor + "," + bColor + ", " + opacityColor + ")";
    let randomColor = "rgb(" + rColor + "," + gColor + "," + bColor + ")";

    document.body.style.background = randomColorWithOpacity;
    document.getElementById('color-button').style.backgroundColor = randomColor;
    document.getElementById('button-convert').style.backgroundColor = randomColor;
    document.querySelector('#color-id').innerHTML = `${randomColorWithOpacity}`;
    document.querySelector('#button-color-id').innerHTML = `${randomColor}`;

}

colorRandomizer();


// em converter logic

const pxToEm = () => {
    let emResult = parseInt(px.value) / parseInt(baseSize.value);
    em.value = emResult.toFixed(2);
};

const emToPx = () => {
    let pxResult = parseFloat(em.value) * parseInt(baseSize.value);
    px.value = Math.floor(pxResult);
};

// EVENT HANDLERS

// buttons-tabs 

buttonChecker.onclick = function () {
    buttonPicker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = 'lightgrey';
    buttonChecker.style.backgroundColor = 'transparent';
    buttonChecker.style.paddingTop = '15px';
    buttonConverter.style.paddingTop = '5px';
    buttonPicker.style.paddingTop = '5px';
    sizeChecker.style.display = 'block';
    colorPicker.style.display = 'none';
    emConverter.style.display = 'none';
}

buttonPicker.onclick = function () {
    buttonChecker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = 'lightgrey';
    buttonPicker.style.backgroundColor = 'transparent';
    buttonPicker.style.paddingTop = '15px';
    buttonConverter.style.paddingTop = '5px';
    buttonChecker.style.paddingTop = '5px';
    sizeChecker.style.display = 'none';
    colorPicker.style.display = 'block';
    emConverter.style.display = 'none';
}

buttonConverter.onclick = function () {
    buttonPicker.style.backgroundColor = 'lightgrey';
    buttonChecker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = 'transparent';
    buttonConverter.style.paddingTop = '15px';
    buttonChecker.style.paddingTop = '5px';
    buttonPicker.style.paddingTop = '5px';
    sizeChecker.style.display = 'none';
    colorPicker.style.display = 'none';
    emConverter.style.display = 'block';
}

// size checker

document.querySelector('body').onresize = function () {
    w = window.innerWidth;
    h = window.innerHeight;
    document.getElementById('size').innerHTML = `${w} X 
${h}`;
};

// color randomizer

document.querySelector('#color-button').addEventListener('click', e => {colorRandomizer()});

// em converter

convertButton.addEventListener('click', () => {

    if (px.value === "" && (em.value !== "" && baseSize.value !== "")) {
        emToPx();
    }

    if (em.value === "" && (px.value !== "" && baseSize.value !== "")) {
        pxToEm();
    }
});

resetButton.addEventListener('click', () => {

    px.value = "";
    em.value = "";
    baseSize.value = "";
});