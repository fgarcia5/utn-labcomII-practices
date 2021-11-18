
// Declaración de variables
let emailValue;
let passwordValue;

// Escuchar evento change de Email
let emailElem = document.getElementById('email');
emailElem.addEventListener('change', function(event) {
    emailValue = event.target.value;
});

// Escuchar evento change de Password
let passwordElem = document.getElementById('password');
passwordElem.addEventListener('change', function(event) {
    passwordValue = event.target.value;
});

/**
 * Función que se dispara cuando el usuario hace
 * click en el botón "Ingresar"
 */
function onClickBtnEntry() {
    // TODO: Realizar validaciones
    
    let loadingElement = document.getElementById('loading');
    loadingElement.style.display = "block";
    // Enviar información a Servidor para Ingresar
    simulateLogin(emailValue, passwordValue)
        .then((response) => {
            alert("Usuario Logueado!");
        }).catch((error) =>{
            console.error("Error!!")
        }).finally(() => {
            loadingElement.style.display = "none";
        });
}

let btnShowPasswordElem = document.getElementById('btn-show-password');
/**
 * Función que se dispara cuando el usuario hace
 * click en el botón de mostrar/ocultar contraseña
 */
function onClickBtnShowPass() {
    // Si el type de passwordElement es password
    if (passwordElem.getAttribute('type') === 'password') {
        // cambio a type text el input de password
        passwordElem.setAttribute('type', 'text');
        // cambio texto del botón
        btnShowPasswordElem.innerText = "Ocultar contraseña";
    } else {
        // cambio a type password el input de password
        passwordElem.setAttribute('type', 'password');
        // cambio texto del botón
        btnShowPasswordElem.innerText = "Mostrar contraseña";
    }
}


function simulateLogin(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Usuario logueado");
        }, 5000);
    });
}

