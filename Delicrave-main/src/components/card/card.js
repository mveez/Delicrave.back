function card(desserts) {

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
