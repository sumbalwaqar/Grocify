const addtoCart = document.querySelectorAll('.add-to-cart');

addtoCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    // console.log(e);
    const food = JSON.parse(btn.dataset.food);
    console.log(food);
    });
});