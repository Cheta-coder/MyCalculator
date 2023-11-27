let naMe = document.getElementById('div1')
let you  = document.getElementById('div2')
let input = document.getElementById('input')
let submit = document.getElementById('submit')
let plusSign = document.getElementById('na-your-plus-be-this')

// naMe = ''
submit.addEventListener('click', (event)=>{ 
   naMe.innerHTML = input.value 
   console.log(typeof(naMe))
   console.log(naMe)
    event.preventDefault()
})
plusSign.addEventListener('click', (event)=>{
you.innerText = ""
you.innerHTML = naMe.innerHTML
console.log(you)
console.log(typeof(you))
naMe.innerHTML = ""
event.preventDefault()

})
