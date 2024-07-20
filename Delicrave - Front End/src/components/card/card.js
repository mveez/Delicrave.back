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
let cantProd = [];

function addToCart(id) {
  let areItems = JSON.parse(localStorage.getItem("miArray"));
  let areCantProds = JSON.parse(localStorage.getItem("cantProd"));

  if(areItems) {
    cart = areItems;
  }

  if(areCantProds) {
    cantProd = areCantProds;
  }
  
  const cartExist = cart.find(element => element === id);

  if (cartExist !== undefined) {
    alert(`¡El producto ya existe en el carrito!`);
  } else {
    cart.push(id);
    cantProd.push(1);
    
    console.log("Cart: ", cart);
    console.log("CantProd: ", cantProd);

    localStorage.setItem("miArray", JSON.stringify(cart));  
    localStorage.setItem("cantProd", JSON.stringify(cantProd));
    alert(`¡Producto añadido al carrito!`);
    //updateCartCount();
  }
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}