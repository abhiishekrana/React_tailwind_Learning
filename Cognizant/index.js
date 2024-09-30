const fontSizeInput = document.getElementById('fontSizeInput');
const greeting = document.getElementById('greeting');

fontSizeInput.addEventListener('input',function(){
    const newSize = fontSizeInput.value;
    greeting.style.fontSize = newSize+'px';
});

const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click',function(){
    greeting.style.color='red'
})
