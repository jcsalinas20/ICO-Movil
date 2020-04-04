function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function primerInicioSesion(user) {
    var API
    if (user === "") {
        API = `https://api-ico.herokuapp.com/api/null/primer-inicio-sesion`
    } else {
        API = `https://api-ico.herokuapp.com/api/${user}/primer-inicio-sesion`
    }
    $.ajax({
        type: "GET",
        url: API,
        crossDomain: true,
        dataType: "json"
    })
        .done(function(res) {
            if (res) {
                delayPopUp()
            }
        })
        .fail(function() {
            activateToast("No se pudo establecer conexión con el servidor")
        })
}

function delayPopUp() {
    // Comprobar si es el primer inicio sesion
    window.onload = function() {
        setTimeout(loadPopUp, 3000) // Esperar 3 segundos
    }
}

function loadPopUp() {
    document.getElementById("frame-password").style.animation =
        "1s ease-out 0s 1 popup"
    document.getElementById("container-frame-cambio-password").style.display =
        "flex"
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search)
    return results === null
        ? ""
        : decodeURIComponent(results[1].replace(/\+/g, " "))
}

function activateToast(mensaje) {
    M.toast({
        html: mensaje
    })
}

function ocultarVentana() {
    window.parent.document.getElementById("frameNoticia").style.display = "none"
    window.parent.document.getElementById("menuNoticia").style.display = "none"
}
