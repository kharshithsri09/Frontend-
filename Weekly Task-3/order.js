const orderTableBody = document.getElementById('orderTableBody');
const grandTotalElement = document.getElementById('grandTotal');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayOrders() {

    orderTableBody.innerHTML = '';

    let grandTotal = 0;

    cart.forEach((item, index) => {

        let total = item.price * item.quantity;
        grandTotal += total;

        const row = `
            <tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}"
                    class="form-control quantity-input" data-index="${index}">
                </td>
                <td>₹${total}</td>
            </tr>
        `;

        orderTableBody.innerHTML += row;
    });

    grandTotalElement.innerText = grandTotal;

    updateQuantity();
}

function updateQuantity() {

    const quantityInputs = document.querySelectorAll('.quantity-input');

    quantityInputs.forEach(input => {

        input.addEventListener('change', (e) => {

            const index = e.target.dataset.index;
            cart[index].quantity = parseInt(e.target.value);

            localStorage.setItem('cart', JSON.stringify(cart));

            displayOrders();
        });
    });
}

displayOrders();