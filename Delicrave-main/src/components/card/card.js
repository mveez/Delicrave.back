let cart = [];
const cartId = 1; // Reemplaza con el ID del carrito real

function addToCart(id) {
    const dessert = desserts.find(dessert => dessert.id === id);
    const today = new Date().toISOString().split('T')[0];
    cart.push({
        id: dessert.id,
        shipDate: today,
        quantity: 1,
        itemsPrice: dessert.price
    });
    console.log(cart);
    alert(`${dessert.nameDessert} ha sido añadido al carrito.`);
    updateCartCount();
    saveCartToDatabase(cart);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function saveCartToDatabase(cart) {
    const URI = `http://localhost:8000/api/v1/carts/${cartId}/add_items/`;
    fetch(URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({ cart })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Carrito guardado:', data);
    })
    .catch((error) => {
        console.error('Error al guardar el carrito:', error);
    });
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function card(desserts) {
    desserts.map((dessert) => {
        document.getElementById('catalogueItemsSection').innerHTML += '<div class="catalogueItem">' +
            '<div class="catalogueItemImage">' +
            `<img src="${dessert.image}" alt="Image ${dessert.nameDessert + ' (' + dessert.type + ')'}">` +
            '</div>' +
            '<div class="catalogueItemTexts">' +
            `<h2>${dessert.nameDessert}</h2>` +
            `<p>${dessert.price}</p>` +
            `<button onclick="addToCart(${dessert.id})">Añadir al carrito</button>` +
            '</div>' +
            '</div>';
    });
}


/*function card(desserts) {

    desserts.map((dessert) => {

        document.getElementById('catalogueItemsSection').innerHTML += '<div class="catalogueItem">'+
                                                                          '<div class="catalogueItemImage">'+
                                                                            `<img src="${dessert.image}" alt="Image ${dessert.nameDessert+' ('+dessert.type+')'}">`+
                                                                          '</div>'+
                                                                          '<div class="catalogueItemTexts">'+
                                                                            `<h2>${dessert.nameDessert}</h2>`+
                                                                            `<p>${dessert.price}</p>`+
                                                                            `<button onclick="addToCart(${dessert.id})">Añadir al carrito</button>`+
                                                                          '</div>'+
                                                                      '</div>';
    })
}


let cart = [];

function addToCart(id) {
    const dessert = desserts.find(dessert => dessert.id === id);
    cart.push(dessert);
    console.log(cart);
    alert(`${dessert.nameDessert} ha sido añadido al carrito.`);
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}
*/