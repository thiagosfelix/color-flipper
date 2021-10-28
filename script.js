const btn = document.querySelector('button');
const background = document.querySelector('body');
const color = document.querySelector('#color');
const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

btn.addEventListener('click', flipColor);

function flipColor() {
    //Changes the background color and the text informing wich color is on
    const newColor = randomColor();
    background.style.backgroundColor = newColor;
    color.innerHTML = newColor;
    document.querySelector('span').style.color = newColor;
}

function randomColor() {
    //Generate a random hex color
    let hexColor = '#';
    for(let i = 0; i <= 5; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
}