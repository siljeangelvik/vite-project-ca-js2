import {checkoutTotal} from "../js/base";

checkoutTotal.innerText = localStorage.getItem("total");
console.log(checkoutTotal);

let payButton = document.getElementById('pay-button');
payButton.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.modal-body').innerHTML = `
     <p>Thank you for your Nice Cream purchase!</p>
     <p>Welcome back!</p>
    `;
})

const storeButton = document.getElementById('store-button');
storeButton.addEventListener('click', (e) => {
    e.preventDefault();
    //localStorage.removeItem("total", total);
    window.location.href = '../index.html.html';
})