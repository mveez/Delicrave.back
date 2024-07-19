function card(desserts) {
  console.log("Desserts: ", desserts);

    desserts.map((dessert, index) => {

      document.getElementById('catalogueItemsSection').innerHTML += '<div class="catalogueItem">'+
                                                                        '<div class="catalogueItemImage">'+
                                                                          `<img src="${dessert.image}" alt="Image ${dessert.name+' ('+dessert.productType+')'}">`+
                                                                        '</div>'+
                                                                        '<div class="catalogueItemTexts">'+
                                                                          `<h2>${dessert.name}</h2>`+
                                                                          `<p>${"$" + dessert.price} ${dessert.productType == "Torta"? "| Entera" : "x Docena"}</p>`+

                                                                          //`<button type="button" class="addToCart" onclick="addToCart(${dessert.id})">Añadir al carrito</button>`+

                                                                          `<input type="button" class="addToCart" onclick="addToCart(${dessert.id})" value="Añadir al carrito" />`+
                                                                        '</div>'+
                                                                    '</div>';
    })
}

let cart = [];

function addToCart(id) {
  //const dessert = desserts.find(dessert => dessert.id === id);${dessert.name}

  let areItems = JSON.parse(localStorage.getItem("miArray"));

  if(areItems) {
    cart = areItems;
  }

  cart.push(id);
  console.log(cart);
  localStorage.setItem("miArray", JSON.stringify(cart));
  alert(`¡Producto añadido al carrito!`);
  //updateCartCount();
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}