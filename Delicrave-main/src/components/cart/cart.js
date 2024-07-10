document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
});

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.nameDessert}">
                <h3>${item.nameDessert}</h3>
                <p>${item.price}</p>
            `;

            cartItemsContainer.appendChild(itemElement);
        });
    }
}

function cartClick(){
    window.location.href = 'ruta/a/la/pagina/del/carrito.html'; // Cambia esta ruta según tu estructura
}