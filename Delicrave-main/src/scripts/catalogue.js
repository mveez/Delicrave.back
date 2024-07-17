
const URI = "http://localhost:8000/api/v1/carts/"; // URL de la API a consumir
let desserts = [];

async function fetchData() {
    try {
        const response = await fetch(URI);
        const data = await response.json();
        desserts = data;
        renderCatalogue(desserts);
    } catch (error) {
        console.log("Error: ", error);
    }
}

// Función para renderizar el catálogo en el DOM
function renderCatalogue(desserts) {
    const catalogueItemsSection = document.getElementById("catalogueItemsSection");
    catalogueItemsSection.innerHTML = ''; // Limpiar contenido previo

    desserts.forEach(dessert => {
        const dessertCard = document.createElement("div");
        dessertCard.classList.add("card");

        dessertCard.innerHTML = `
            <img src="${dessert.image}" alt="${dessert.nameDessert}">
            <h2>${dessert.nameDessert}</h2>
            <p>${dessert.type}</p>
            <p>${dessert.price}</p>
            <button onclick="addToCart(${dessert.id})">Añadir al carrito</button>
        `;

        catalogueItemsSection.appendChild(dessertCard);
    });
}

// Inicializa la aplicación
function init() {
    fetchData();
    navBbar(); // Asumimos que esta función inicializa la barra de navegación
}

init();



/*let desserts = [
    {
        id : 1,
        image : "./../../assets/images/6aa2e3f00989fbdbdb725c6305d5f25a.jpg",
        nameDessert : "Torta Personalizada",
        type : "cake",
        price : "Precio a consultar",
    },
    {
        id : 2,
        image : "./../../assets/images/de5a8814b1872818a047badf65e2596d.jpg",
        nameDessert : "Macarons",
        type : "cookies",
        price : "$5000 x Docena",
    },
    {
        id : 3,
        image : "./../../assets/images/91861e7dc91dbd3b9f3ec6566e1a5f04.jpg",
        nameDessert : "Pie de Limón",
        type : "cake",
        price : "$5000 | Entera",
    },
    {
        id : 4,
        image : "./../../assets/images/890964c2874a04453ae015321d3389d6.jpg",
        nameDessert : "3 Leches",
        type : "cake",
        price : "$650 | Entera",
    },
    
    {
        id : 5,
        image : "./../../assets/images/dbf2756dbceefaf0eabec31a26001f63.jpg",
        nameDessert : "Magdalenas Personalizadas",
        type : "cupcakes",
        price : "Precio a consultar",
    },
    {
        id : 6,
        image : "./../../assets/images/18477a646065e1f47ae93733ee1f215c.jpg",
        nameDessert : "Galletas Personalizadas",
        type : "cookies",
        price : "Precio a consultar",
    },
    {
        id : 7,
        image : "./../../assets/images/e9a7420e011d536b99f4110455a3551a.jpg",
        nameDessert : "Fresas Cubiertas",
        type : "fruits",
        price : "$3500 x Docena",
    },
    {
        id : 8,
        image : "./../../assets/images/e7a9083fc290de4185db0a4a4f2930f2.jpg",
        nameDessert : "Donas Cubiertas",
        type : "donuts",
        price : "$4000 x Docena",
    },
];

navBbar();
card(desserts);*/