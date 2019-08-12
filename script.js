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

document.querySelector('body').onresize = function(){
    w = window.innerWidth;
    h = window.innerHeight;
    document.getElementById('size').innerHTML = `${w} X 
${h}`;
};

// color picker

let rColor = Math.floor(Math.random() * 256);
let gColor = Math.floor(Math.random() * 256);
let bColor = Math.floor(Math.random() * 256);
let opacityColor = parseFloat(Math.random().toFixed(1));

let bodyBackgroundColor = "rgba(" + rColor + "," + gColor + "," + bColor + ", " + opacityColor + ")";


document.body.style.background = bodyBackgroundColor;
document.getElementById('button-checker').style.backgroundColor = bodyBackgroundColor;
document.getElementById('size-checker').style.backgroundColor = bodyBackgroundColor;
document.getElementById('color-picker').style.backgroundColor = bodyBackgroundColor;
document.getElementById('em-converter').style.backgroundColor = bodyBackgroundColor;
document.querySelector('#color-id').innerHTML = `${bodyBackgroundColor}`;

document.querySelector('#color-button').addEventListener('click', e => {
    const rColor = Math.floor(Math.random() * 256);
    const gColor = Math.floor(Math.random() * 256);
    const bColor = Math.floor(Math.random() * 256);
    const opacityColor = parseFloat(Math.random().toFixed(1));

    const bodyBackgroundColor = "rgba(" + rColor + ", " + gColor + ", " + bColor + ", " + opacityColor + ")";

    document.body.style.backgroundColor = bodyBackgroundColor;
    document.getElementById('size-checker').style.backgroundColor = bodyBackgroundColor;
    document.getElementById('color-picker').style.backgroundColor = bodyBackgroundColor;
    document.getElementById('em-converter').style.backgroundColor = bodyBackgroundColor;
    buttonPicker.style.backgroundColor = bodyBackgroundColor;

    document.querySelector('#color-id').innerHTML = `${bodyBackgroundColor}`;
});


// em converter


// buttons-tabs click handlers

buttonChecker.onclick = function(){
    buttonPicker.style.backgroundColor = 'lightgrey';
    buttonChecker.style.backgroundColor = bodyBackgroundColor;
    buttonConverter.style.backgroundColor = 'lightgrey';
    buttonChecker.style.paddingTop = '15px';
    buttonConverter.style.paddingTop = '5px';
    buttonPicker.style.paddingTop = '5px';
    sizeChecker.style.display = 'block';
    colorPicker.style.display = 'none';
    emConverter.style.display = 'none';
}

buttonPicker.onclick = function(){
    buttonPicker.style.backgroundColor = bodyBackgroundColor;
    buttonChecker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = 'lightgrey';
    buttonPicker.style.paddingTop = '15px';
    buttonConverter.style.paddingTop = '5px';
    buttonChecker.style.paddingTop = '5px';
    sizeChecker.style.display = 'none';
    colorPicker.style.display = 'block';
    emConverter.style.display = 'none';
}

buttonConverter.onclick = function(){
    buttonPicker.style.backgroundColor = 'lightgrey';
    buttonChecker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = bodyBackgroundColor;
    buttonConverter.style.paddingTop = '15px';
    buttonChecker.style.paddingTop = '5px';
    buttonPicker.style.paddingTop = '5px';
    sizeChecker.style.display = 'none';
    colorPicker.style.display = 'none';
    emConverter.style.display = 'block';
}
