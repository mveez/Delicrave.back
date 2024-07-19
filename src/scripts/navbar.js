let state = true;

function navbarClick() {
    const navBarBottom = document.getElementById("navBarBottom");
    const firstSection = document.getElementsByClassName("firstSection");

    if(state == true) {
        navBarBottom.style.display = "flex";
        firstSection[0].style.margin = "38rem 0rem";
        state = false;
    } else {
        navBarBottom.style.display = "none";
        firstSection[0].style.margin = "12rem 0rem";
        state = true;
    }
}

function aboutUsChanger() {
    const navBarBottom = document.getElementById("navBarBottom");
    const firstSection = document.getElementsByClassName("firstSection");

    navBarBottom.style.display = "none";
    firstSection[0].style.margin = "12rem 0rem";
    state = true;
}

//---------------------------------------------------------------------------------------

function cartClick() {
    const stringX = window.location.pathname;

    console.log("stringX: ", stringX);
    
    if(!stringX.includes("views")) {
        window.location.href = './src/views/cart/cart.html';
    } else {
        window.location.href = '../cart/cart.html';
    }
}

//---------------------------------------------------------------------------------------

// setInterval(() => {
//     let areDessserts = localStorage.getItem("desserts");
//     const navBarBottom = document.getElementById("navBarBottom");
    
//     if (areDessserts) {

//     }

//     if (!areDessserts) {

//     }
// }, 1000)