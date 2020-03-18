function ocultarVentana() {
    window.parent.document.getElementById('framePerfil').style.display = 'none'
    window.parent.document.body.style.animation = '0.7s ease-out 0s 1 bottomToTop'
}