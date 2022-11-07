const button = document.getElementById('btn');
const body = document.querySelector('body');
const color = ['purple', 'orange', 'grey', 'blue', 'lime'];

button.addEventListener('click', () => {
body.style.backgroundColor = 'black';
const colorIndex = parseInt(Math.random() * color.length);
body.style.backgroundColor = color[colorIndex];
body.style.transition = '1s linear'
});
