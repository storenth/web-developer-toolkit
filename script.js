// toolbox

const buttonChecker = document.getElementById('button-checker');
const buttonPicker = document.getElementById('button-picker');
const buttonConverter = document.getElementById('button-converter');
const sizeChecker = document.getElementById('size-checker');
const colorPicker = document.getElementById('color-picker');
const emConverter = document.getElementById('em-converter');

// screen size checker

let w = window.innerWidth;
let h = window.innerHeight;

document.getElementById('size').innerHTML = `${w} X 
${h}`;

document.querySelector('body').onresize = function () {
    w = window.innerWidth;
    h = window.innerHeight;
    document.getElementById('size').innerHTML = `${w} X 
${h}`;
};

// color picker

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


// em converter
const baseSize = document.querySelector('#base-size');
const px = document.querySelector('#px');
const em = document.querySelector('#em');
const convertButton = document.querySelector('#button-convert');
const result = document.querySelector('#result');

const pxToEm = () => {
    let emResult = parseInt(px.value) / parseInt(baseSize.value);
    result.innerHTML = `${emResult.toFixed(4)} EM`;
};

const emToPx = () => {
    let pxResult = parseFloat(em.value) * parseInt(baseSize.value);
    result.innerHTML = `${Math.floor(pxResult)} PX`;
};

convertButton.addEventListener('click', () => {

    if (px.value === "" && (em.value > 0 && baseSize.value > 0)) {
        emToPx();
    }

    if (em.value === "" && (px.value > 0 && baseSize.value > 0)) {
        pxToEm();
    }
});

// click handlers

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

// color randomizer

document.querySelector('#color-button').addEventListener('click', e => {colorRandomizer()});