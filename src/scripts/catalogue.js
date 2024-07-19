navBbar();

const URI_Products = "http://localhost:8000/api/v1/products/";

async function getProducts() {
    try {
        const response = await fetch(URI_Products);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("ProductsData-response: ", data);

        card(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

getProducts();