//Create variables
const popup = document.querySelector('.full-screen-register');
const basket = document.querySelector('.full-screen-basket');
let basketItems = [];
let setColor = false;

//Show/hide register popup functions
function showPopup(){
     popup.classList.remove('hidden');
}

function closePopup(){
    popup.classList.add('hidden');
}

//show/hide basket
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

//Add item to basket array
function addToBasket(item) {
    basketItems.push(item);
}

//create array of all cards and add enter and leave events
$(document).ready(function(){
    let card = document.getElementsByClassName('card');
    for (var i=0;i<card.length;i++) {

        card[i].addEventListener("mouseenter", myScript);
        card[i].addEventListener("mouseleave", myScript2);
    }
});

//add and remove color while entering or leaving
function myScript() {
    this.classList.add('enter-color');
}
function myScript2() {
    this.classList.remove('enter-color');
}

//Timed function for banner colors
setInterval(function(){
    if (!setColor) {
    document.getElementById("sale3").style.color = "#ffffff";
    document.getElementById("sale2").style.color = "#c00b39";
    setColor = true;
    } else {
        document.getElementById("sale" + '2').style.color = "#ffffff";
        document.getElementById("sale" + '3').style.color = "#c00b39";
        setColor = false;
    }
 }, 3000);