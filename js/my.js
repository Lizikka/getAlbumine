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
     if (sum < 35 || sum > 55){
     div.style.color = 'pink'}
     if ( sum > 35 || sum < 55){
        div.style.color = 'green'
     }
}

button.addEventListener('click',  createBox)

function createBox(){
    document.body.append(div)
    number = Number(num.value)
    
    sum = ( number/ 1.028) * 50 
    if ((sum < 35) || (sum > 50)){
        div.style.backgroundColor = 'pink'}
        
    div.innerHTML = `Концентрація альбуміну: ${sum} г/л`

}








