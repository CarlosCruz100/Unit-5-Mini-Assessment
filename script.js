let mathAnswer = 11

let button = document.querySelector('.button')
let input = document.querySelector('.input')
let message = document.querySelector('.message')


//Write your event handler here
button.onclick = function() {
let userInput = input.value
  console.log(userInput)

if (userInput == mathAnswer) {
  message.innerHTML = "you haved guessed it!!"
}
else {
  message.innerHTML = "wrong guess again!"
  }
  
}

