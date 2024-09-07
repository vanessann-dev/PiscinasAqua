
document.getElementById('formularioPiscina').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;


    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
        mostrarAlerta('Por favor, complete todos los campos.', 'error');
        return;
    }

    if (!validateEmail(email)) {
        mostrarAlerta('Por favor, ingrese un correo válido.', 'error');
        return;
    }


    const data = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };

   
    fetch('http://localhost:3000/formulario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        mostrarAlerta('Formulario enviado con éxito.', 'success');
        document.getElementById('formularioPiscina').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        mostrarAlerta('Hubo un error al enviar el formulario.', 'error');
    });
});

function mostrarAlerta(mensaje, tipo) {
    const alerta = document.getElementById('alerta');
    alerta.textContent = mensaje;
    alerta.style.backgroundColor = tipo === 'success' ? '#4caf50' : '#f44336'; // Verde o rojo según tipo
    alerta.classList.remove('alertaOculta');
    alerta.style.display = 'block';

    setTimeout(function() {
        alerta.style.display = 'none';
    }, 3000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
