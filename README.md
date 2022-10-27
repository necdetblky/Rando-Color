# Rando-Color
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <h1>Javascript Random color</h1>
    <button id="btn">Click Me</button>
</body>
</html>

css
body{
    font-family: Arial, Helvetica, sans-serif;
    padding: 0%;
    margin: 0%;
    text-align: center;
    color: rgb(243, 243, 243);
}
#btn{
    border: 1px solid white;
    border: none;
    background: none;
    padding: 0px;
    color: darkgray;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
    font-size: 50px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
}

h1{
    text-shadow: 1px 1px 2px rgb(104, 104, 104), 0 0 1em rgb(55, 55, 58), 0 0 0.2em rgb(61, 61, 83);
}

javascript
const button = document.getElementById('btn');
const body = document.querySelector('body');
const color = ['purple', 'orange', 'grey', 'blue', 'lime'];

button.addEventListener('click', () => {
body.style.backgroundColor = 'black';
const colorIndex = parseInt(Math.random() * color.length);
body.style.backgroundColor = color[colorIndex];
body.style.transition = '1s linear'
});
