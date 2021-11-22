const popup = document.querySelector('.full-screen-register');
const basket = document.querySelector('.full-screen-basket');
let basketItems = [];

function showPopup(){
     popup.classList.remove('hidden');
}

function closePopup(){
    popup.classList.add('hidden');
}

function showBasket(){
    basket.classList.remove('hidden');
    document.getElementById("basketItems").innerHTML = '';
    basketItems.forEach(function (item)  {
    document.getElementById("basketItems").innerHTML += item + '<br>';
    })
}

function closeBasket(){
    basket.classList.add('hidden');
}

function addToBasket(item) {
    basketItems.push(item);
}
