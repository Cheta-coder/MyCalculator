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


let answer = document.getElementById('calc-operation')
let display = document.getElementById('calc-typed')
let numbers = document.querySelectorAll('.number')
let opts = document.querySelectorAll('.opt')
let submit = document.querySelector('.submit')

// b0 = 0
// b1 = 1
// b2 = 2
// b3 = 3
// b4 = 4
// b5 = 5
// b6 = 6
// b7 = 7
// b8 = 8
// b9 = 9
let stringAns = ''
let stringNum2 =''
let stringOpt =''
let stringNum =''

numbers.forEach((number) => {

    number.addEventListener('click', (e)=>{
        stringNum += number.value;
        // stringNum2 += number.value;

        console.log(stringNum)        
        // console.log(stringNum.length<9)
        
        if(stringNum.length<10) {
            display.innerHTML= stringNum 
                                 
        }else {
            display.innerHTML = `Dear Che-Culator user, You should not exceed maximum length of 9`
        }
       //stringNum = Number(stringNum)
        e.preventDefault()
    })
    
    
})


opts.forEach((opt) => {


    opt.addEventListener('click', (e)=>{
        
        stringOpt = opt.value;
        //stringNum += stringOpt;
        
        // console.log(stringNum)
        submit = opt.value === '='
        console.log(submit)

        if(stringNum + stringOpt) {     
            
            display.innerHTML = stringNum += stringOpt
            answer.innerHTML = stringNum2 += stringOpt
            console.log(answer.innerHTML)

            if(stringOpt === '+') {
                Num1 = Number(stringNum)       
                Num2 = Number(stringNum2)
                answer.innerHTML =  Num1 + Num2
                console.log(answer.innerHTML)
            }
           
        }console.log(stringNum)

        if (stringOpt === " ") {
            stringNum = ' '
            display.innerHTML = stringNum
            answer.innerHTML = stringNum
        }

        if (stringOpt === 'del') {
            stringNum =
            display.innerHTML = stringNum
            answer.innerHTML = stringNum
            console.log(display.innerHTML)
        }

        
        //  console.log(stringOpt)
        
        

        // if(stringOpt === '+' || stringOpt === '-' || stringOpt === '*' || stringOpt === '/' || stringOpt === '%') {
        //     display.innerHTML = ''
        //     answer.innerHTML = stringNum 
        //    //console.log(stringNum)
        // }


    })

})
submit