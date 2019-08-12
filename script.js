// toolbox

const buttonChecker = document.getElementById('button-checker');
const buttonPicker = document.getElementById('button-picker');
const buttonConverter = document.getElementById('button-converter');
const sizeChecker = document.getElementById('size-checker');
const colorPicker = document.getElementById('color-picker');
const emConverter = document.getElementById('em-converter');

buttonChecker.onclick = function(){
    buttonPicker.style.backgroundColor = 'lightgrey';
    buttonChecker.style.backgroundColor = 'rgb(174, 228, 250)';
    buttonConverter.style.backgroundColor = 'lightgrey';
    buttonPicker.style.borderBottom = 'solid';
    buttonChecker.style.borderBottom = 'none';
    buttonConverter.style.borderBottom = 'solid';
    sizeChecker.style.display = 'block';
    colorPicker.style.display = 'none';
    emConverter.style.display = 'none';
}

buttonPicker.onclick = function(){
    buttonPicker.style.backgroundColor = 'rgb(174, 228, 250)';
    buttonChecker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = 'lightgrey';
    buttonPicker.style.borderBottom = 'none';
    buttonChecker.style.borderBottom = 'solid';
    buttonConverter.style.borderBottom = 'solid';
    sizeChecker.style.display = 'none';
    colorPicker.style.display = 'block';
    emConverter.style.display = 'none';
}

buttonConverter.onclick = function(){
    buttonPicker.style.backgroundColor = 'lightgrey';
    buttonChecker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = 'rgb(174, 228, 250)';
    buttonPicker.style.borderBottom = 'solid';
    buttonChecker.style.borderBottom = 'solid';
    buttonConverter.style.borderBottom = 'none';
    sizeChecker.style.display = 'none';
    colorPicker.style.display = 'none';
    emConverter.style.display = 'block';
}


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
document.querySelector('#color').addEventListener('click', e => {
    const rColor = Math.floor(Math.random() * 256);
    const gColor = Math.floor(Math.random() * 256);
    const bColor = Math.floor(Math.random() * 256);
    const opacityColor = parseFloat(Math.random().toFixed(1));

    const bodyBackgroundColor = "rgba(" + rColor + "," + gColor + "," + bColor + ", " + opacityColor + ")";

    document.body.style.background = bodyBackgroundColor;
    document.querySelector('#color-picker').innerHTML = `Your background Color is: ${bodyBackgroundColor}`;
});

// em converter