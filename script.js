const numberButtons = document.querySelectorAll('.number__button');
const funcButtons = document.querySelectorAll('.func-button');
const outputScreen = document.querySelector('.output_screen');
const clearScreen = document.querySelector('.clear-screen');
const submit = document.querySelector('.submit');
const backspace = document.querySelector('.backspace');

// let outputValue = outputScreen.textContent;
// console.log(outputValue);

for(let numberButton of numberButtons) {
  numberButton.addEventListener('click', ()=> {
    outputScreen.textContent += numberButton.getAttribute('data-value');
  })
}

for(let funcButton of funcButtons) {
  funcButton.addEventListener('click', ()=> {
    outputScreen.textContent += funcButton.getAttribute('data-value');
  })
}

clearScreen.addEventListener('click', ()=> {
  outputScreen.textContent = '';
})

backspace.addEventListener('click', () => {
  outputScreen.textContent = outputScreen.textContent.slice(0, outputScreen.textContent.length - 1);
})

submit.addEventListener('click', ()=> {

})

