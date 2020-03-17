function mostrarHome() {
    console.log('frfrfe')
    ocultarMostrarMenu()
    window.parent.document.getElementById('frameConsultaPendiente').style.display = 'none'
    // window.parent.document.getElementById('frameConsultaPendiente').style.display = 'none'
    // window.parent.document.getElementById('').style.display = 'none'
    // window.parent.document.getElementById('').style.display = 'none'
    // window.parent.document.getElementById('').style.display = 'none'
    // window.parent.document.getElementById('').style.display = 'none'
    window.parent.document.body.style.display = 'flex'
}

function mostrarHome() {}

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
