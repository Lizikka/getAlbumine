const button = document.querySelector('.title')
let div = document.createElement('div')
div.className= 'alert'
div.innerHTML = 'Концентрація альбуміну'

button.addEventListener('touchstart', createBox)

function createBox(){
    document.body.append(div)
}

button.addEventListener('click', createBox)

function createBox(){
    document.body.append(div)
}








