navBbar();
function handleSubmit(e) {
    e.preventDefault();

    const URIContactUs = "http://localhost:8000/api/v1/contacts/";

    const formInputs = document.getElementsByTagName("INPUT");
    const fullName = formInputs[0].value;
    const messageReason = document.getElementById("messageReason").value;
    const email = formInputs[1].value;
    const message = document.getElementById("message").value;
    const imageFile = formInputs[2].files[0];  // obtener el archivo en lugar del valor
    const checkbox = formInputs[3].checked

    if (!fullName || !messageReason || !email || !message || !checkbox) {
        alert("Por favor llene todos los campos");
        return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (fullName.length >= 3 && fullName.length <= 75 && regex.test(email)) {

        const nameParts = fullName.split(' ');
        const name = nameParts[0] || '';
        const secondName = nameParts[1] || '';
        const lastName = nameParts[2] || '';
        const secondLastName = nameParts[3] || '';

        const formData = new FormData();
        formData.append("name", name);
        formData.append("secondName", secondName);
        formData.append("lastName", lastName);
        formData.append("secondLastName", secondLastName);
        formData.append("subject", messageReason);
        formData.append("email", email);
        formData.append("message", message);
        if (imageFile) {
            formData.append("image", imageFile);
        }

        fetch(URIContactUs, {
            method: 'POST',
            body: formData,
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(error => { throw new Error(JSON.stringify(error)); });
            }
            return response.json();
        })
        .then((data) => {
            console.log('Success:', data);
            alert("Enviado");
            window.location = "./../../../index.html";
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error al enviar el formulario. Por favor, inténtelo de nuevo.');
        });
    } else {
        alert("Por favor ingrese datos válidos.");
    }
}
