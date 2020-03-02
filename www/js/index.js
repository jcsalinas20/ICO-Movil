/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(document).ready(function() {
    $("#submit").click(authLogin)
})

function authLogin() {
    var user = document.getElementById("user").value
    getEncryptPass(user, document.getElementById("pass").value)
}

function getEncryptPass(user, pass) {
    $.ajax({
        method: "GET",
        url: "https://api-ico.herokuapp.com/api/encrypt/" + pass,
        dataType: "json" // necessitem això pq ens retorni un objecte JSON
    })
        .done(function(msg) {
            console.log(msg.password)
            login(user, msg.password)
        })
        .fail(function() {
            alert("ERROR")
        })
}

function login(user, pass) {
    $.ajax({
        method: "GET",
        url:
            "https://api-ico.herokuapp.com/api/paciente/auth/" +
            user +
            "/" +
            pass,
        dataType: "json" // necessitem això pq ens retorni un objecte JSON
    })
        .done(function(msg) {
            M.toast({ html: msg.mensaje })
            if (msg.mensaje === "El login se realizó correctamente.") {
                location.href = "./pages/home/home.html"
            }
        })
        .fail(function() {
            alert("ERROR")
        })
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener(
            "deviceready",
            this.onDeviceReady.bind(this),
            false
        )
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent("deviceready")
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id)
        var listeningElement = parentElement.querySelector(".listening")
        var receivedElement = parentElement.querySelector(".received")

        listeningElement.setAttribute("style", "display:none;")
        receivedElement.setAttribute("style", "display:block;")

        console.log("Received Event: " + id)
    }
}

app.initialize()
