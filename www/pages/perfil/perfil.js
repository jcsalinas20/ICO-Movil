function ocultarVentana() {
    window.parent.document.getElementById('framePerfil').style.display = 'none'
    window.parent.document.body.style.animation = '0.7s ease-out 0s 1 bottomToTop'
}

function cambiarContra() {
    window.parent.document.getElementById('framePerfil').style.display = 'none'
    window.parent.document.getElementById('container-frame-cambio-password').style.display = 'flex'
}