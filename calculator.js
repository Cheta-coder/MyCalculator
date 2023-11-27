let numbers = document.querySelectorAll('.button');
let screen = document.getElementById('upper-screen');
let screen2 = document.getElementById('lower-screen');
let Operators = document.querySelectorAll('.operator');
let startButtons = document.querySelectorAll('.operator');
let OffButton = document.querySelector('.off');
let onButton = document.querySelector('.on');
let Clear = document.getElementById('AC');
let Del = document.querySelectorAll('.DEL')
let result = document.querySelector('.result');
let newScreen = document.querySelector('.new-div');
let stringNum = '';
let secondString = '';
let display = "";
let check = false;
let funcNum = '';
let delNum = '';
let resultNum = 0;
let clearNum = "";
let On = "";


numbers.forEach(button => {
    button.addEventListener('click', (e) => {
        if(!check){
            console.log(check)
            stringNum += button.value;
            screen2.in
            nerHTML = stringNum;
            if (stringNum.length>10) {
                screen2.innerHTML = 'Dear user, you have been limited from adding other numbers'
            }
            console.log(stringNum)
        } else{
            console.log(check)
            secondString += button.value;
            screen2.innerHTML = secondString;
            display += button.value
            screen.innerHTML = display
            if (secondString.length>10) {
                screen.innerHTML = 'Dear user, you have been limited from adding other numbers'
            } 
        }
       
        
    })

});

Operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        funcNum = operator.value;
        check = true; 
        display = stringNum
        display += funcNum
        screen.innerHTML = display
        console.log(funcNum)
        screen2.innerText = ''
        e.preventDefault();
       
    })
})

result.addEventListener('click', (e) => {

    
    // resultNum = eval(...stringNum);
    if (funcNum === '+'){
        resultNum = Number(stringNum) + Number(secondString) ;
        check = false;
        screen2.innerHTML = resultNum;
    } else {
        resultNum = Number(stringNum) - Number(secondString) ;
        check = false;
        screen2.innerHTML = resultNum;
        }
    // else()
    console.log(resultNum);
    e.preventDefault();
            
})
        // } 
        // }
        
        
       
    Clear.addEventListener('click', (e) => {
            stringNum = clearNum;
            funcNum = clearNum;
            screen.innerHTML = clearNum;
            screen2.innerHTML = "";
            display = "";
            console.log(clearNum);
            
            e.preventDefault();
            return screen.innerHTML = 0;
            
        })

Del.forEach(DEL => {
    DEL.addEventListener('click', (e) => {
    if (screen.innerHTML = stringNum) {
        delNum = stringNum.slice()    
        screen.innerHTML = delNum ;
    } else {  
        return  screen.innerHTML = delNum.slice(1) ;
    }
        console.log(delNum.slice())
        event.preventDefault();
    })
})

newScreen.style.visibility = 'visible'

OffButton.addEventListener('click', (e) => {
    newScreen.style.visibility = 'visible'
    
    newScreen.innerHTML,screen.innerHTML = "";
    console.log(newScreen.innerHTML)
})

onButton.addEventListener('click', (e) => {
   if( newScreen.style.visibility = 'hidden') {
       stringNum === "";
       secondString = ''
       funcNum === "";
       screen2.innerHTML = 0;
    }
    
    console.log(stringNum,On)
    
    e.preventDefault()
})