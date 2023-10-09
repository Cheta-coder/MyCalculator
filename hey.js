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

let calcAnswer = document.querySelector('#calcAnswer')
let calcTyped = document.querySelector('#calcTyped')
let numbers = document.querySelectorAll('.number')
let opts = document.querySelectorAll('.opt')
let cntrls = document.querySelectorAll('.cntrl')
let equalTo = document.querySelector('.equalTo')

numbers.forEach((number) =>{
    stringNum = ''
    number.addEventListener('click', (e)=>{
        stringNum += number.value;

        if(stringNum.length<10) {
            calcTyped.innerHTML = stringNum
        }else if(stringNum.length>8) {
            calcTyped.innerHTML = 'Che-culator user, you are given a maximum of 9 values'
        }
        console.log(stringNum)

        e.preventDefault()
    })
})

opts.forEach((opt) =>{
    opt.addEventListener('click', (e)=>{
        stringNum = ''
        calcAnswer.innerHTML = calcTyped.innerHTML
        calcTyped.innerHTML = stringNum;
    })

})

equalTo.addEventListener('click', (e)=>{    
    if(opts.value = '+'){
        stringNum = ''
        stringAns = ''
                
        stringAns = (calcAnswered + calcTyped)
        calcAnswered = Number(calcAnswer.innerHTML)
        calcType = Number(calcTyped.innerHTML)
        stringAns = Number(stringAns)
        
        calcAnswer.innerHTML = stringAns
        calcTyped.innerHTML = stringNum
    }
    console.log(typeof(stringAns))
    console.log(stringAns)
    e.preventDefault()
})