function getDiaActual() {
    var date = new Date()
    var dia = getNombreDia(date.getDay())
    var diaNum = date.getDate()
    if (diaNum < 10) {
        diaNum = "0" + diaNum
    }
    var mes = date.getMonth() + 1
    if (mes < 10) {
        mes = "0" + mes
    }
    console.log()
    document.getElementById(
        "dia-actual"
    ).innerHTML = `Día: <b id="dia">${dia}</b> - ${diaNum}/${mes}/${date.getFullYear()}`
}

function getNombreDia(dia) {
    if (dia == 0) {
        return "Domingo"
    } else if (dia == 1) {
        return "Lunes"
    } else if (dia == 2) {
        return "Martes"
    } else if (dia == 3) {
        return "Miercoles"
    } else if (dia == 4) {
        return "Jueves"
    } else if (dia == 5) {
        return "Viernes"
    } else if (dia == 6) {
        return "Sabado"
    }
    return null
}

function getItems(token) {
    queryMedicamentos(token)
}

var queryMedicamentos = function callQuery(token) {
    var URL
    if (token == "") {
        URL = `https://api-ico.herokuapp.com/api/null/medicamentos`
    } else {
        URL = `https://api-ico.herokuapp.com/api/${token}/medicamentos`
    }

    $.ajax({
        type: "GET",
        url: URL,
        crossDomain: true,
        dataType: "json"
    })
        .done(async function(res) {
            if (res) {
                var dia = document.getElementById("dia").innerHTML.toLowerCase()
                var parent = document.getElementById("medicamentos")
                parent.innerHTML = ""
                for (let j = 0; j < res.medicamentos.length; j++) {
                    var med = res.medicamentos[j]
                    if (med.dias[dia] == 1) {
                        var li = document.createElement("li")
                        var div1 = document.createElement("div")
                        var img = document.createElement("img")
                        var div2 = document.createElement("div")
                        var p1 = document.createElement("p")
                        var p2 = document.createElement("p")
                        var div3 = document.createElement("div")
                        var div4 = document.createElement("div")
                        var label = document.createElement("label")
                        var span1 = document.createElement("span")
                        var input = document.createElement("input")
                        var span2 = document.createElement("span")

                        img.className = "imagen-med"
                        img.width = "50"
                        img.height = "50"
                        img.src = med.imagen
                        img.alt = med.nombre
                        div1.appendChild(img)
                        div1.className = "container-img"

                        span1.className = "text"
                        span1.innerHTML = "Ya me la he tomado:"
                        input.type = "checkbox"
                        span2.className = "lever"
                        label.appendChild(span1)
                        label.innerHTML += " &nbsp;&nbsp;&nbsp;&nbsp;No"
                        label.appendChild(input)
                        label.appendChild(span2)
                        label.innerHTML += "Sí"
                        label.className = "lbl-med"
                        div4.appendChild(label)
                        div4.className = "switch"
                        div3.appendChild(div4)
                        div3.className = "container-medicamento-tomado"
                        p1.className = "nombre-med"
                        p1.innerHTML = med.nombre
                        p2.className = "hora-med"
                        p2.innerHTML = "Hora: " + med.hora
                        div2.appendChild(p1)
                        div2.appendChild(p2)
                        div2.appendChild(div3)
                        div2.className = "container-datos"

                        li.appendChild(div1)
                        li.appendChild(div2)
                        li.id = med.id
                        li.className = "collection-item container-medicamento"
                        parent.appendChild(li)
                    }
                }
                await sleep(10000) // 1 minuto
                queryMedicamentos(token)
            }
        })
        .fail(function() {
            // LLAMAR AL METODO DEL PADRE
            activateToast("No se pudo establecer conexión con el servidor")
        })
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
