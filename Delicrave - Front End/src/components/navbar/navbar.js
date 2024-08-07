function navBbar() {
  const stringX = window.location.pathname;

  if(!stringX.includes("views")) {
    document.getElementById("navBar").innerHTML = '<div class="navBarTop">'+
                                                    '<a href="index.html">DELICRAVE</a>'+
                                                    '<p onclick="navbarClick()">☰</p>'+
                                                    '<span onclick="cartClick()"><img src="/src/assets/images/shopping_cart_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="Carrito" id="cartIcon"></span>'+
                                                  '</div>'+
                                                  '<ul id="navBarBottom">'+
                                                    '<li><a href="index.html">INICIO</a></li>'+
                                                    '<li><a href="./src/views/catalogue/catalogue.html">CATÁLOGO</a></li>'+
                                                    '<li><a href="index.html#sobre-nosotros" onclick="aboutUsChanger()">SOBRE NOSOTROS</a></li>'+
                                                    '<li><a href="./src/views/contactUs/contactUs.html">CONTACTO</a></li>'+
                                                    '<li><a href="./src/views/locations/locations.html">LOCACIÓN</a></li>'+
                                                  '</ul>';
  } else {
    document.getElementById("navBar").innerHTML = '<div class="navBarTop">'+
                                                    '<a href="../../../index.html">DELICRAVE</a>'+
                                                    '<p onclick="navbarClick()">☰</p>'+
                                                    '<span onclick="cartClick()"><img src="/src/assets/images/shopping_cart_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="Carrito" id="cartIcon"></span>'+
                                                  '</div>'+
                                                  '<ul id="navBarBottom">'+
                                                    '<li><a href="../../../index.html">INICIO</a></li>'+
                                                    '<li><a href="../catalogue/catalogue.html">CATÁLOGO</a></li>'+
                                                    '<li><a href="../../../index.html#sobre-nosotros">SOBRE NOSOTROS</a></li>'+
                                                    '<li><a href="../contactUs/contactUs.html">CONTACTO</a></li>'+
                                                    '<li><a href="../locations/locations.html">LOCACIÓN</a></li>'+
                                                  '</ul>';
  }
}