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

let calcAnswer = document.querySelector('#calcAnswer');
let calcTyped = document.querySelector('#calcTyped');
let numbers = document.querySelectorAll('.number');
let opts = document.querySelectorAll('.opt');
let cntrls = document.querySelectorAll('.cntrl');
let equalTo = document.querySelector('.equalTo');
let calcType = 0;
let calcAnswered = 0;
let operatorClicked= '';
let check = false;
let stringNum = '';
let stringNum2 = '';
let stringAns = '';

numbers.forEach((number) =>{
    number.addEventListener('click', (e)=>{
        if(!check){
            stringNum += number.value;
            calcTyped.innerHTML = stringNum;
        } else{
            stringNum2 += number.value;
            calcTyped.innerHTML = `${stringNum} ${operatorClicked} ${stringNum2}`;
        }
        
        if(stringNum.length<10) {
            calcTyped.innerHTML = stringNum;
        }else{
            calcTyped.innerHTML = 'Che-culator user, you are given a maximum of 9 values'
            stringNum != number.value;
        }
        return
        console.log(stringNum)

        e.preventDefault()
    })
})

opts.forEach((opt) =>{
    opt.addEventListener('click', (e)=>{
        check = true
        operatorClicked = opt.value
        calcTyped.innerHTML = `${stringNum} ${operatorClicked} ${stringNum2}`;
        console.log(calcTyped.innerHTML)
        calcAnswer.innerHTML = '';

    })

})

equalTo.addEventListener('click', (e)=>{ 
    
   

    if(operatorClicked === "+"){ 
                  
        console.log('im in +')

        stringAns = Number(stringNum) + Number(stringNum2)
        calcAnswer.innerHTML = stringAns
        return
    } else if(operatorClicked === "-") {
        stringNum = ' '
        
        calcTyped.innerHTML = calcAnswered - calcType
        calcAnswer.innerHTML = stringNum
        console.log('I ran ooo')
        return
    } else if(operatorClicked === "*"){
        stringNum = ' '

        calcTyped.innerHTML = calcAnswered * calcType
        calcAnswer.innerHTML = stringNum
        return
    }else if(operatorClicked === "/"){
        stringNum = ' '

        calcTyped.innerHTML = calcAnswered / calcType
        calcAnswer.innerHTML = stringNum
        return
    }else if(operatorClicked === "%"){
        stringNum = ' '

        calcTyped.innerHTML = calcAnswered % calcType
        calcAnswer.innerHTML = stringNum
    
    }
               
    console.log(typeof(stringAns))
    console.log(stringAns)
    console.log(calcAnswered)
    console.log(calcAnswered)
    console.log(calcType - calcAnswered)
})

cntrls.forEach((cntrl) =>{
    cntrl.addEventListener('click', (e)=>{
        cntrlClicked = cntrl.value
        if(cntrlClicked === "AC"){
            stringNum = ' '
            calcAnswer.innerHTML = stringNum
            calcTyped.innerHTML = stringNum
        }    

        if(cntrlClicked === "Del"){
            stringNum.slice(-1)
        }
        
        console.log('clear') 
    })
})