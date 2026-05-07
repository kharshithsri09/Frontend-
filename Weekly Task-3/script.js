const orderButtons = document.querySelectorAll('.order-btn');

orderButtons.forEach(button => {

    button.addEventListener('click', () => {

        const item = {
            name: button.dataset.name,
            price: parseInt(button.dataset.price),
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(product => product.name === item.name);

        if(existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(item);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'order.html';
    });
});