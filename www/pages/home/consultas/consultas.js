var query = function callQuery(token) {
    $.ajax({
        type: "GET",
        url: `https://api-ico.herokuapp.com/api/${token}/consultas`,
        crossDomain: true,
        dataType: "json"
    })
        .done(async function(res) {
            if (res) {
                var parent = document.getElementById("consultas")
                parent.innerHTML = ""
                for (let j = 0; j < res.consultas.length; j++) {
                    var con = res.consultas[j]
                    var li = document.createElement("li")
                    var div1 = document.createElement("div")
                    var div2 = document.createElement("div")
                    var div3 = document.createElement("div")
                    var a = document.createElement("a")
                    var i1 = document.createElement("i")
                    var i2 = document.createElement("i")

                    i1.appendChild(document.createTextNode("access_time"))
                    i1.className = "material-icons"
                    i1.style.verticalAlign = "middle"
                    div1.appendChild(i1)
                    div1.className = "icons-consultas"

                    div2.className = "text-consultas"
                    div2.appendChild(
                        document.createTextNode(
                            "Día: " + con.dia + " - Hora: " + con.hora
                        )
                    )

                    i2.appendChild(document.createTextNode("send"))
                    i2.style.verticalAlign = "middle"
                    i2.className = "material-icons"
                    i2.addEventListener('click', function(){
                        mostrarConsulta(j)
                    });
                    a.appendChild(i2)
                    a.className = "secondary-content"
                    // a.href = "#" + j
                    div3.appendChild(a)
                    div3.className = "icons-consultas"

                    if (comprobarHora(con.hora, con.dia)) {
                        li.style.backgroundColor = '#ffa50091'
                    }

                    li.appendChild(div1)
                    li.appendChild(div2)
                    li.appendChild(div3)
                    li.id = con.id_consulta
                    li.className = "collection-item container-lista"
                    parent.appendChild(li)
                }
                await sleep(60000) // 1 minuto
                query(token)
            }
        })
        .fail(function() {
            activateToast("No se pudo establecer conexión con el servidor")
        })
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function mostrarConsulta(index) {
    console.log(index)
}

function comprobarHora(hora, dia) {
    var date = new Date()
    var day = date.getDate()
    if (day < 10) {
        day = "0" + day
    }
    var month = date.getMonth() + 1
    if (month < 10) {
        month = "0" + month
    }
    var fechaActual = `${date.getFullYear()}${month}${day}`
    var fechaConsulta = ''
    var fechaSeparada = dia.split('-')
    for (let i = fechaSeparada.length-1; i >= 0; i--) {
        fechaConsulta += fechaSeparada[i]
    }

    var h = date.getHours()
    if (h < 10) {
        h = "0" + h
    }
    var d = date.getMinutes()
    if (d < 10) {
        d = "0" + d
    }
    var horaActual = `${h}:${d}`
    
    if (fechaActual >= fechaConsulta) {
        if (horaActual > hora) {
            return true
        }
        return false
    }
    return false
}

$(document).ready(function() {
    $(".collapsible").collapsible()
})
