// Variables

const accordion = document.querySelector('.accordion-content');
const title = document.querySelector('.accordion-title');
const modalBtn = document.querySelector('.modal-btn');
let modal = document.querySelector('.feedback');
let feedBack = document.querySelector('.modal-content');
let input = document.querySelector('.input');
let checkBtn = document.querySelector('.btn');

// accordion event
title.addEventListener('click', function () {
    accordion.classList.toggle('active');
})



checkBtn.addEventListener('click', function () {
// PALINDROME LOGIC
function palindrome(str) {
  //getting rid of whitespaces  and symbols
  let polishedString = str.replace(/\W+|_/g,"").toLowerCase();
  //storing a reversed string
  let reversedString = polishedString.split("").reverse().join("");
  // checking if polished matches with reversed string
  if(polishedString == reversedString){
    return true
  }
  return false;
    }
    
    let string = input.value;

    // Regex for whitespaces

    let spaceReg = /\w+/g;

    if (!spaceReg.test(string)) {
        alert('enter a word or phrase🙄')
        string = "";
    } else if (palindrome(string)) {
        console.log("palindrome wai")
        feedBack.innerHTML = `yes, ${input.value} is a palindrome 🥳 `;
        // Opening the modal
        modal.style.display = 'block';
    } else {
        modal.style.display = 'block';
        feedBack.innerHTML = `no, ${input.value} is not a palindrome 😞`;
    }

})


// Closing the modal
modalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    input.value = "";
})

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        console.log('Window event activated' + e.target)
        input.value = "";
    }
})
