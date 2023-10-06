// My Thought Process
// First of all I grabed my elements from the HTML
// Give the buttons value
// At the click of any of the number buttons or operators, the value will be seen in the answer box
// I want to add an event listener or function to my submit(=) button
// At the click of that button (submit(=)) The calculation should be evaluated
// The operation to be carried out should show at the top of the answer box
// The answer of the evaluation should show at the bottom of the answer box

// The New Thought Process
// Mock up the buttons and paragraph(div) for display
// Give the buttons value-property equal to the display value
// Give the paragraphs an Id or class
// Give button 0-9 a similar class
// Give operators a similar class
// Give control buttons a similar class
// Grab them in Js file
// Using .forEach loop, Add event listener of click to respective buttons
// For button, 0-9 create a variable that stores the string equivalent
// Give a maximum number of 9 values to the variable with a warning message if it exceeds 9 values
// When an operator is clicked, have a variable to hold the value of the operator clicked move values from lower display to the upper display
// Create a second variable to hold the 2nd part of the value
// When = is clicked, bring the first values and second values, use a number constructor change its data type to number and using if statement get the operator clicked(pressed) and use it or calculation.

let inputs = document.querySelectorAll('.inputs');
let formstyle = document.querySelectorAll('.formstyle');
let form1 = document.querySelectorAll('form1');
let submit = document.querySelector('.submit');

let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let bAdd = document.getElementById ('#b+');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let bMinus = document.querySelector('.b-');
let b7 = document.querySelector('.b7');
let b8 = document.querySelector('.b8');
let b9 = document.querySelector('.b9');
let bTimes = document.getElementById('#b*');
let bDivide = document.getElementById('#b/');
let b0 = document.querySelector('.b0');
let bPoint = document.getElementById('#b.');
let bModulus = document.getElementById('#b%')
let bClear = document.querySelector('.bClear');
let answerValue =document.getElementById('#calc')
answerValue = '';


b1 = 1;
b2 = 2;
b3 = 3;
bAdd = '+';
b4 = 4;
b5 = 5;
b6 = 6;
bMinus = '-';
b7 = 7;
b8 = 8;
b9 = 9;
bTimes = '*';
bDivide = '/';
b0 = 0;
bPoint = '.';
bModulus = '%';

   
// b1.addEventListener('click', (e) => {




console.log(eval(b1+bAdd+b2))

// b5.forEach(button => {
//     if (button.clicked) {
//         let b5 = `${button.value}`
//     }
//     console.log(b5)
// })


submit.addEventListener('onclick', (e) => {
    inputs.forEach(input => {
        inputValue = input.value;
        inputName = input.name;
        let answerValue = `${inputValue}`
        console.log(inputValue)
    })

    // radioButtons.forEach(button => {
    //     if(button.checked)   formValues = {...formValues,['title identification']:button.value}
    // })

    // saleType.forEach(button => {
    //     if(button.checked) {
    //         let sale = `${button.value}`
    //         if(!sales) {
    //             sales = sale
    //             return
    //         }else{
    //             sales += `,${sale}`
    //         }
            
    //         formValues = {...formValues,['saleType']:sales
    //     }
    //         // console.log(formValues)
    //     }
    // })
    // console.log(formValues)
    e.preventDefault()
})
