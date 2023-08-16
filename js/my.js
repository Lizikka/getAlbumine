const button = document.querySelector('.title')
let div = document.createElement('div')
div.className= 'alert'
div.innerHTML = 'Концентрація альбуміну'
let numberOfSamples
let sum
button.addEventListener('touchstart', createBox)

function createBox(){
    document.body.append(div)
     numberOfSamples = prompt("Введіть оптичну щільність зразка")
     sum = (numberOfSamples / 1.028) * 50 
     div.innerHTML = `Концентрація альбуміну: ${sum} г/л`
}

button.addEventListener('click',  createBox)

function createBox(){
    document.body.append(div)
    numberOfSamples = prompt("Введіть оптичну щільність зразка")
    sum = (numberOfSamples / 1.028) * 50 
    div.innerHTML = `Концентрація альбуміну: ${sum} г/л`
}








