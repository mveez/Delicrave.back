navBbar();

function handleSubmit(e) {
    e.preventDefault();

    const URIContactUs = "http://localhost:8000/api/v1/contacts/";

    const formInputs = document.getElementsByTagName("INPUT");    

    const fullName = formInputs[0].value;
    const messageReason = document.getElementById("messageReason").value;
    const email = formInputs[1].value;
    const message = document.getElementById("message").value;
    const image = formInputs[2].value;
    //const checkbox = formInputs[3].checked;

    console.log("fullName: " + fullName + " | messageReason: " + messageReason + " | email: " + email + " | message: " + message + " | image: " + image);

    if(!fullName || !messageReason || !email || !message) {
        alert("Por favor llene todos los campos");
        return;
    }

    let data;
    let contactData = [];
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName.length >= 3 && fullName.length <= 75) {
        if(regex.test(email)) {

            // Dividir el fullName en partes
            const nameParts = fullName.split(' ');
            const name = nameParts[0] || '';
            const secondName = nameParts[1] || '';
            const lastName = nameParts[2] || '';
            const secondLastName = nameParts[3] || '';

            contactData = 
            // [
                {
                    "name":name,
                    "secondName":secondName,
                    "lastName":lastName,
                    "secondLastName":secondLastName,
                    "subject":messageReason,
                    "email":email,
                    "message":message,
                    "image":image,
                    //"checkbox":checkbox,
                }
            // ]
            
            
            fetch(URIContactUs, {
                    method:'POST',
                    headers:{
                        'Content-type':'application/json',
                    },
                    body: JSON.stringify(contactData),
            })
            .then((response) => response.json())
            .then((response) => {data = response})
            .catch((error) => console.log("Error: ", error));
            
            alert("Enviado");
            window.location = "./../../../index.html";

        } else {
            alert("Por favor ingrese un email válido!");
        }
    } else {
        alert("Por favor ingrese un nombre completo válido! Debe tener entre 5 y 100 caracteres");
    }
}
