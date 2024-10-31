const addtoCart = document.querySelectorAll('.add-to-cart');

addtoCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    console.log(e);
    });
});