const numMaxPasos = 7
const numMinPasos = 1

function siguientePaso() {
    const index =
        parseInt(document.getElementsByClassName("activated")[0].id) + 1

    if (index <= numMaxPasos) {
        document.getElementById(index - 1).classList = "bolas"
        document.getElementById(index).classList = "bolas activated"
    }
}

function anteriorPaso() {
    const index =
        parseInt(document.getElementsByClassName("activated")[0].id) - 1

    if (index >= numMinPasos) {
        document.getElementById(index + 1).classList = "bolas"
        document.getElementById(index).classList = "bolas activated"
    }
}

function cerrarVentana() {
    window.parent.document.getElementById(
        "container-frame-guia"
    ).style.display = "none"
}
