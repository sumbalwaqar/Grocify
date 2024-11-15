import axios from "axios";
import Noty from 'noty';
const addtoCart = document.querySelectorAll('.add-to-cart');
const cartCounter = document.querySelector('#cartCounter');

function updateCart(food) {
    axios.post('/update-cart', food)
       .then(res => {
            // console.log(res);
            cartCounter.innerText = res.data.totalqty;
            new Noty({
                type: 'success',
                text: 'Item added to cart',
                timeout: 3000
            }).show();
        })
       .catch(error => {
            console.error("Error updating cart:", error);
        });
}

addtoCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    // console.log(e);
    const food = JSON.parse(btn.dataset.food);
    console.log(food);
    updateCart(food);
    });
});