import {checkoutButton, errorMessage} from "../js/base";

let total = 0;
const cartDetails = document.querySelector('.modal-body');
const totalAmount = document.querySelector('.total');

let addButton = document.getElementById('add-button');
addButton.addEventListener('click', function () {

    let flavour = document.querySelector('input[name="flavour"]:checked');
    let size = document.querySelector('option[value]:checked');
    let additions = document.querySelectorAll('input[type="checkbox"]:checked');

    console.log(additions);
    console.log(size.value);

    if (size.value === 0) {
        console.log("test");
        cartModal.style.display = "none";
        errorMessage.innerHTML = "You need to choose a size";
        return;
    }

    let additionsValue = 0;
    for (let i = 0; i < additions.length; i++) {
        console.log(additions[i]);
        additionsValue += parseInt(additions[i].value);
    }
    console.log(flavour.value, parseInt(size.value), additionsValue);

    let price = additionsValue + parseInt(size.value);
    console.log("VALUE = " + price);

    displayCart(flavour, size, additions, price);
});

let cartModal = document.getElementById('cartModal');

function displayCart(flavour, size, additions, price) {
    // console.log(flavour.id);
    // console.log(size.textContent);
    // console.log(additions);
    console.log(price);

    let additionsItems = [];
    for (let i = 0; i < additions.length; i++) {
        additionsItems.push(additions[i].id);
    }
    console.log("ADDITIONS ITEMS")
    console.log(additionsItems);

    cartDetails.innerHTML += `
<div id="quantity" aria-valuenow="${price}" class="quantity flex flex-row justify-between mb-6">
    <div>
        <h2 class="font-bold">Flavour:</h2>
        <p>${flavour.id}</p>
    </div>
    <div>
        <h2 class="font-bold">Size:</h2>
        <p>${size.textContent}</p>
    </div>
    <div>
        <h2 class="font-bold">Additions:</h2>
        <div class="flex flex-col">${additions.length}</div>
    </div>
    <div>
        <h2 class="font-bold">Price:</h2>
        <p>$${price}</p>
    </div>
</div>
  `;

    // QUANTITY
    total += price;
    console.log(total);
    totalAmount.innerHTML = `
    <h2 class="font-bold">Total:</h2>
    <p>$${total}</p>`;

    cartModal.style.display = "block";
}

checkoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem("total", total);
    window.location.href = '../checkout.html';
})