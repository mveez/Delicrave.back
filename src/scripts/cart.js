navBbar();

async function handleSubmit(e) {
    e.preventDefault();

    const URIClientAddress = "http://localhost:8000/api/v1/clientaddres/";
    const URIClient = "http://localhost:8000/api/v1/clients/";
    const URICarrito = "http://localhost:8000/api/v1/carts/";
    const URICarritoItem = "http://localhost:8000/api/v1/cartitems/";

    const formInputs = document.getElementsByTagName("INPUT");

    const name = formInputs[0].value;
    const secondName = formInputs[1].value;
    const lastname = formInputs[2].value;
    const secondLastname = formInputs[3].value;
    const email = formInputs[4].value;
    const phoneNumber = formInputs[5].value;
    const province = formInputs[6].value;
    const locality = formInputs[7].value;
    const street = formInputs[8].value;
    const streetNumber = formInputs[9].value;
    const deliveryDate = formInputs[10].value;

    // Contenido a mandar el Post  
    const clientAddressContent = {
        "province":province,
        "locality":locality,
        "street":street,
        "streetNumber":streetNumber,
        "deliveryDate":deliveryDate
    }

    // Post para crear Dirección del Cliente        
    let clientAddressResponse = await fetch((URIClientAddress), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientAddressContent),
    })

    let clientAddressData = await clientAddressResponse.json();
    console.log("clientData: ", clientAddressData);

    // Contenido a mandar el Post siguiente
    const clientContent = {
        "idClientAddress":clientAddressData.id,
        "idClient":clientAddressData.id,
        "name":name,
        "lastname":lastname,
        "secondName":secondName,
        "secondLastname":secondLastname,
        "email":email,
        "phoneNumber":phoneNumber,
    }

    // Post para crear el Cliente
    let clientResponse = await fetch((URIClient), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientContent),
    })

    let clientData = await clientResponse.json();
    console.log("clientData: ", clientData);

    // Cálculo del totalItems y totalPrice
    let totalItems = 0;
    let totalPrice = 0;

    const precios = Array.from(document.getElementsByClassName("tableTdPrice")).map(td => parseFloat(td.innerHTML));
    
    cantProd.forEach((item, index) => {
        totalItems += item;
        totalPrice += item * precios[index];
    });

    console.log("TotalItems: ", totalItems);
    console.log("TotalPrice: ", totalPrice);

    const carritoContent = {
        "idClient":clientData.id,
        "totalItems":totalItems,
        "totalPrice":totalPrice,
        "state":"ordered",
    }

    // Post para crear el Carrito
    let CarritoResponse = await fetch((URICarrito), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(carritoContent),
    })

    let carritoData = await CarritoResponse.json();
    console.log("clientData: ", carritoData);


    //Falta hacer POST Con los Items Individuales a: "http://localhost:8000/api/v1/cartitems/"

    //localStorage.removeItem("cantProd");
    //localStorage.removeItem("miArray");
}

// Get Product List
const getProductos = async () => {
    const url = "http://localhost:8000/api/v1/products/";

    let response = await fetch((url), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    let data = await response.json()
    return data;
}

function addButton(e) {
    const productIndex = e.getAttribute("data-index");
    const productPrice = parseFloat(e.getAttribute("data-price"));

    cantProd[productIndex] += 1;
    localStorage.setItem("cantProd", JSON.stringify(cantProd));
    document.getElementsByClassName("tableTdCant")[productIndex].innerHTML = cantProd[productIndex];
    document.getElementsByClassName("tableTdPrice")[productIndex].innerHTML = productPrice * cantProd[productIndex];
}

function removeButton(e) {
    const productIndex = e.getAttribute("data-index");
    const productPrice = parseFloat(e.getAttribute("data-price"));

    if (cantProd[productIndex] > 1) {
        cantProd[productIndex] -= 1;
        localStorage.setItem("cantProd", JSON.stringify(cantProd));
        document.getElementsByClassName("tableTdCant")[productIndex].innerHTML = cantProd[productIndex];
        document.getElementsByClassName("tableTdPrice")[productIndex].innerHTML = productPrice * cantProd[productIndex];
    }
}

function deleteButton(e) {
    const productIndex = e.getAttribute("data-index");
    cantProd.splice(productIndex, 1);
    localStorage.setItem("cantProd", JSON.stringify(cantProd));
    miArray.splice(productIndex, 1);
    localStorage.setItem("miArray", JSON.stringify(miArray));
    const row = e.parentElement.parentElement.parentElement;
    row.remove();
}


/* Si se hace el set en Catalogo comentar estas dos lineas siguientes para que NO sobre escriban */
//const miArray = [0];
//localStorage.setItem("miArray", JSON.stringify(miArray));


// A partir de aca no tocar nada!
const miArray = JSON.parse(localStorage.getItem("miArray"));
console.log("miArray", miArray);

let cantProd = [];

miArray.forEach(() => {
    cantProd.push(1);
});

localStorage.setItem("cantProd", JSON.stringify(cantProd));

const micantProdRecuperado = JSON.parse(localStorage.getItem("cantProd"));
console.log("micantProdRecuperada:", micantProdRecuperado);

//GET PRODUCTOS 
getProductos()
.then((prod) => {
    console.log("Prod: ", prod)

    prod.forEach((itemProd) => {
        miArray.forEach((itemArray, index) => {
            if (itemProd.id == itemArray) {
                document.getElementById("tableBodyCart").innerHTML += '<tr id="tableBodyTr">'+
                                                                        `<td class="tableTd">${itemProd.id}</td>`+
                                                                        `<td class="tableTd">${itemProd.name}</td>`+
                                                                        `<td class="tableTd">${itemProd.productType}</td>`+
                                                                        `<td class="tableTd tableTdPrice">${itemProd.price * cantProd[index]}</td>`+
                                                                        `<td class="tableTd tableTdCant">${cantProd[index]}</td>`+
                                                                        `<td class="tableTd">`+
                                                                            '<span>'+
                                                                                `<button id="addButton" data-id="${itemProd.id}" data-index="${index}" data-price="${itemProd.price}" onclick="addButton(this)">+</button>`+
                                                                                `<button id="removeButton" data-id="${itemProd.id}" data-index="${index}" data-price="${itemProd.price}" onclick="removeButton(this)">-</button>`+
                                                                                `<button id="deleteButton" data-id="${itemProd.id}" data-index="${index}" onclick="deleteButton(this)">Eliminar</button>`+
                                                                            '</span>'+
                                                                        '</td>'+
                                                                    '</tr>';
            }
        })
    })
})
