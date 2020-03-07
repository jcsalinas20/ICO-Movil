function ocultarError() {
    document.getElementById("error").style.display = "none"
}

function mostrarError(text) {
    document.getElementById("error").style.display = "block"
    document.getElementById("error").innerHTML = text
}

function comprobarPassword() {
    var pass = document.getElementById("pass")
    var passRepetida = document.getElementById("passRepetida")
    if (pass.value.length > 5) {
        if (pass.value === passRepetida.value) {
            console.log(pass.value + " - " + passRepetida.value)
        }else {
            mostrarError("Las contraseñas no coinciden")
            passRepetida.value = ""
        }
    } else {
        mostrarError("Longitud mínima de 6 digitos")
        pass.value = ""
        passRepetida.value = ""
    }
}

function cambioPasswod() {
    comprobarPassword()
}