const button = document.querySelector('.title')
let div = document.createElement('div')
let num = document.getElementById('optical')
div.className= 'alert'
div.innerHTML = 'Концентрація альбуміну'
let numberOfSamples
let sum
let number


button.addEventListener('touchstart', createBox)

function createBox(){
    document.body.append(div)
     number = Number(num.value)
     sum = (number / 1.028) * 50 
     div.innerHTML = `Концентрація альбуміну: ${sum} г/л`
}

button.addEventListener('click',  createBox)

function createBox(){
    document.body.append(div)
    number = Number(num.value)
    
    sum = ( number/ 1.028) * 50 
    div.innerHTML = `Концентрація альбуміну: ${sum} г/л`
}








