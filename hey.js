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
let operatorClicked= '';
let check = false;
let start = false;
let stringNum = '';
let stringNum2 = '';
let stringAns = '';

numbers.forEach((number) =>{
    number.addEventListener('click', (e)=>{
        if(start){
            stringNum = "";
            stringNum2 = "";
            calcAnswer.innerHTML = "";
            calcTyped.innerHTML = "";
        }
        if(!check){
            stringNum += number.value;
            calcTyped.innerHTML = stringNum;
            if(stringNum.length<10) {
                calcTyped.innerHTML = stringNum;
            }else{
                calcTyped.innerHTML = 'Che-culator user, you are given a maximum of 9 values'
                stringNum != number.value;
            }
            return
        } else{
            stringNum2 += number.value;
            calcTyped.innerHTML = `${stringNum} ${operatorClicked} ${stringNum2}`;
        }
        
        console.log(stringNum)

        e.preventDefault()
    })
})

opts.forEach((opt) =>{
    opt.addEventListener('click', (e)=>{
        check = true
        start = false
        operatorClicked = opt.value
        calcTyped.innerHTML = `${stringNum} ${operatorClicked} ${stringNum2}`;
        console.log(calcTyped.innerHTML)
        calcAnswer.innerHTML = '';

    })
    
})

equalTo.addEventListener('click', (e)=>{ 
    check = false
    start = true
    
    if(operatorClicked === "+"){ 
        
        stringAns = Number(stringNum) + Number(stringNum2)
        calcAnswer.innerHTML = stringAns
        return
    } else if(operatorClicked === "-") {
        
        stringAns = Number(stringNum) - Number(stringNum2)
        calcAnswer.innerHTML = stringAns
        return
    } else if(operatorClicked === "*"){
        
        stringAns = Number(stringNum) * Number(stringNum2)
        calcAnswer.innerHTML = stringAns
        return
    }else if(operatorClicked === "/"){

        stringAns = Number(stringNum) / Number(stringNum2)
        calcAnswer.innerHTML = stringAns
        return
    }else if(operatorClicked === "%"){

        stringAns = Number(stringNum) % Number(stringNum2)
        calcAnswer.innerHTML = stringAns
        return
    }
  
})

cntrls.forEach((cntrl) =>{
    cntrl.addEventListener('click', (e)=>{
        cntrlClicked = cntrl.value
        if(cntrlClicked === "AC"){
            check = false
            stringAns = ''
            stringNum = ''
            stringNum2 = ''
            let clear = ''
            calcAnswer.innerHTML = clear
            calcTyped.innerHTML = clear
        }    

        if(cntrlClicked === "Del"){


            if(check){
                console.log(stringNum2)
               stringNum2 =  stringNum2.slice(0,-1)
               console.log(stringNum2)
            }
            else{
                console.log(stringNum)
                stringNum = stringNum.slice(0,-1)
                console.log(stringNum)
            }
            // check = false

            // calcTyped.innerHTML.splice(-1, 1)
            // calcTyped.innerHTML = calcTyped.innerHTML

            // calcTyped.innerHTML.pop()
            // calcTyped.innerHTML = calcTyped.innerHTML.pop()
            // calcTyped.innerHTML = calcTyped.innerHTML.substring(0, calcTyped.innerHTML.length-1)
            calcTyped.innerHTML = calcTyped.innerHTML.slice(0, -1)  
        } return
        
        console.log('clear') 
    })
}) 