# Rando-Color
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Color</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Javascript Random color</h1>
    <button id="btn">Click Me</button>
</body>
</html>

css
body{
    margin: 0%;
    padding: 0%;
    font-family: Arial, Helvetica, sans-serif;
    color: white;

}

h1{
    text-align: center;
    color:darkgray;
    
}

button{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
    border: none;
    font-size: 2em;
    cursor: pointer;
    color: darkgray;

}

javascript
const button = document.getElementById('btn');
const body = document.querySelector('body');
const color = ['red', 'black', 'green', 'yellow', 'lime'];

body.style.backgroundColor = 'black';
button.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
    body.style.transition = '1s linear'
});
