// BASKET COUNTER
let basketCount = 0;

const basketDisplay = document.getElementById("basket-count");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {

button.addEventListener("click", function(event){

event.preventDefault();

basketCount++;

basketDisplay.textContent = basketCount;

});

});


// CARD SCROLL ANIMATION

const cards = document.querySelectorAll(".photo-card");

function revealCards(){

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(cardTop < windowHeight - 100){
card.classList.add("show");
}

});

}

window.addEventListener("scroll", revealCards);

revealCards();

// CART PANEL

const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");
const basketIcon = document.querySelector(".basket");
const closeCart = document.getElementById("close-cart");

basketIcon.addEventListener("click", () => {

cartPanel.classList.add("open");

});

closeCart.addEventListener("click", () => {

cartPanel.classList.remove("open");

});


// ADD ITEMS TO CART

buttons.forEach(button => {

button.addEventListener("click", function(event){

event.preventDefault();

basketCount0++;
basketDisplay.textContent = basketCount;

const card = this.closest(".photo-card");
const title = card.querySelector(".caption").textContent;

const li = document.createElement("li");
li.textContent = title;

cartItems.appendChild(li);

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you! Your booking request has been sent.");
        bookingForm.reset();
    });
}

});

});