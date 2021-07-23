const numberButtons = document.querySelectorAll('.number__button');
const funcButtons = document.querySelectorAll('.func-button');
const outputScreen = document.querySelector('.output_screen');
const clearScreen = document.querySelector('.clear-screen');
const submit = document.querySelector('.submit');
const backspace = document.querySelector('.backspace');

let outputValue = '';

for(let numberButton of numberButtons) {
  numberButton.addEventListener('click', ()=> {
    outputValue += numberButton.getAttribute('data-value');
    outputScreen.textContent = outputValue;
    // outputScreen.textContent += numberButton.getAttribute('data-value');
    // outputValue = outputScreen.textContent;
    // console.log(outputValue);
  })
}

for(let funcButton of funcButtons) {
  funcButton.addEventListener('click', ()=> {
    outputValue += funcButton.getAttribute('data-value');
    outputScreen.textContent = outputValue;
    // console.log(outputValue);
  })
}

clearScreen.addEventListener('click', ()=> {
  outputValue = '';
  outputScreen.textContent = outputValue;
})

backspace.addEventListener('click', () => {
  outputValue = outputValue.slice(0, outputValue.length - 1);
  outputScreen.textContent = outputValue;
})

submit.addEventListener('click', ()=> {
  let arrNumbers = [];
  let arrSigns = [];
  let currentNumber = '';
  for(let i = 0; i < outputValue.length; i++) {
    if(!isNaN(outputValue[i])) {
      currentNumber += outputValue[i];
    } else {
      arrNumbers.push(currentNumber);
      currentNumber = '';
      arrSigns.push(outputValue[i]);
    }
  }
  arrNumbers.push(currentNumber);
  
  const arrTrueNumbers = arrNumbers.map(item => Number(item));
  console.log(arrTrueNumbers);
  console.log(arrSigns);

  outputValue = countResult(arrTrueNumbers, arrSigns);
  outputScreen.textContent = outputValue;

  // let result = 0;
  // for(let i = 0; i < arrTrueNumbers.length; i++) {
  //    if()
  // }
  // let plusIndex = outputValue.indexOf('+');
  // console.log(plusIndex);
  // let numOne = +outputValue.slice(0, plusIndex);
  // console.log(numOne);
  // let numTwo = +outputValue.slice(plusIndex + 1, outputValue.length);
  // console.log(numTwo);
  // outputValue = numOne + numTwo;
  // outputScreen.textContent = outputValue;
})

function countResult(arr1, arr2) {
  let result = 0;
  if(arr2[0] == '+') {
    result = arr1[0] + arr1[1];
  }
  if(arr2[0] == '-') {
    result = arr1[0] - arr1[1];
  }
  if(arr2[0] == '*') {
    result = arr1[0] * arr1[1];
  }
  if(arr2[0] == ':') {
    result = arr1[0] / arr1[1];
  }
  return result;
}

