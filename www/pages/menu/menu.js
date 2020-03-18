function mostrarHome() {
    ocultarMostrarMenu()
    window.parent.document.getElementById(
        "frameConsultaPendiente"
    ).style.display = "none"
    // window.parent.document.getElementById('frameConsultaPendiente').style.display = 'none'
    // window.parent.document.getElementById('').style.display = 'none'
    // window.parent.document.getElementById('').style.display = 'none'
    // window.parent.document.getElementById('').style.display = 'none'
    // window.parent.document.getElementById('').style.display = 'none'
    window.parent.document.body.style.display = "flex"
}

async function mostrarPerfil() {
    ocultarMostrarMenu()
    const token = window.parent.document.getElementById("token").innerHTML
    var URL
    if (token == "") {
        URL = `https://api-ico.herokuapp.com/api/null/perfil`
    } else {
        URL = `https://api-ico.herokuapp.com/api/${token}/perfil`
    }

    await $.ajax({
        type: "GET",
        url: URL,
        crossDomain: true,
        dataType: "json"
    })
        .done(async function(res) {
            if (res) {
                window.parent.document
                    .getElementById("framePerfil")
                    .contentWindow.document.getElementById("foto-perfil").src =
                    res.foto
                window.parent.document
                    .getElementById("framePerfil")
                    .contentWindow.document.getElementById("nombre").innerHTML =
                    res.nombre
                window.parent.document
                    .getElementById("framePerfil")
                    .contentWindow.document.getElementById("fecha").innerHTML =
                    `<b>Fecha Nacimiento:</b> ${res.fecha_nacimiento}`
                window.parent.document
                    .getElementById("framePerfil")
                    .contentWindow.document.getElementById("dni").innerHTML =
                    `<b>DNI:</b> ${res.dni}`
                window.parent.document
                    .getElementById("framePerfil")
                    .contentWindow.document.getElementById("genero").innerHTML =
                    `<b>Genero:</b> ${res.genero}`
                window.parent.document
                    .getElementById("framePerfil")
                    .contentWindow.document.getElementById("consultasP").innerHTML =
                    `<b>Consultas pendientes:</b> ${res.consultasCount}`
                window.parent.document
                    .getElementById("framePerfil")
                    .contentWindow.document.getElementById("consultasH").innerHTML =
                    `<b>Historial consultas:</b> ${res.historialConsultasCount}`
            }
        })
        .fail(function() {
            // LLAMAR AL METODO DEL PADRE
            window.parent.activateToast(
                "No se pudo establecer conexión con el servidor"
            )
        })
    window.parent.document.getElementById("framePerfil").style.display = "flex"
}

function mostrarHome() {}

function ocultarMostrarMenu() {
    var circle = document.getElementById("circulo")
    var line1 = document.getElementById("linea1")
    var line2 = document.getElementById("linea2")
    var menu = document.getElementById("menu")
    var frameMenu = window.parent.document.getElementById("frameMenu")
    if (menu.className === "navbar-page open-page-navbar") {
        mostrarMenu(circle, line1, line2, menu, frameMenu)
    } else {
        ocultarMenu(circle, line1, line2, menu, frameMenu)
    }
}

function mostrarMenu(circle, line1, line2, menu, frameMenu) {
    frameMenu.style.width = "100%"
    frameMenu.style.height = "100%"
    setTimeout(function() {
        menu.className = "navbar-page"
        circle.classList.value = "circle circle-in"
        line1.classList.value = "line-1 line1-in"
        line2.classList.value = "line-2 line2-in"
    }, 120)
}

function ocultarMenu(circle, line1, line2, menu, frameMenu) {
    menu.className = "navbar-page open-page-navbar"
    circle.classList.value = "circle"
    line1.classList.value = "line-1"
    line2.classList.value = "line-2"
    setTimeout(function() {
        frameMenu.style.width = "23%"
        frameMenu.style.height = "9%"
    }, 120)
}
