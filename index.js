const booking = {}
const URL = "https://tic.tunja.gov.co:8181/teatro"
//const URL = "http://localhost:8090"
const QUERY_PARAMS = new URLSearchParams(window.location.search)
const ABC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
]
let selectCounter = 0

function seleccionarSilla(id) {
  selectCounter++

  booking["silla" + selectCounter] = id

  document.getElementById(id).classList.add("seleccionado")

  // Validar que la cantidad de puestos a reservar no sea mayor a 2
  if (QUERY_PARAMS.get("p") > 2) {
    alert("¡No puedes agendar más de dos puestos a la vez!")
  } else {
    if (selectCounter >= QUERY_PARAMS.get("p")) {
      showButtons()
    }
  }
}

function setSeleccionado() {
  if (QUERY_PARAMS.has("puesto")) {
    const puesto = QUERY_PARAMS.get("puesto")
    const puestos = puesto.split("-")

    puestos.forEach((puesto) => {
      document.getElementById(puesto).classList.remove("ocupado")
      document.getElementById(puesto).classList.remove("discapacidad")
      document.getElementById(puesto).classList.add("seleccionado")
    })

    document.getElementById(puestos[0]).scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    })
  }
}

function setAllowedBooking() {
  if (QUERY_PARAMS.has("h") && QUERY_PARAMS.has("p")) {
    const listaPuestos = document.querySelectorAll(".puesto")

    for (let i = 0; i < listaPuestos.length; i++) {
      if (
        listaPuestos[i].classList.contains("ocupado") ||
        listaPuestos[i].classList.contains("discapacidad")
      ) {
        listaPuestos[i].style.setProperty("cursor", "not-allowed")
      } else {
        listaPuestos[i].setAttribute(
          "onclick",
          `seleccionarSilla("${listaPuestos[i].id}");`
        )
        listaPuestos[i].style.setProperty("cursor", "pointer")
      }
    }

    alert(`Selecciona ${QUERY_PARAMS.get("p")} silla(s) a continuación`)
  }
}

function savePuesto() {
  alert(
    "Haz reservado los puestos: " +
      booking["silla1"] +
      "-" +
      booking["silla2"] +
      ". \n Se ha enviado un correo con la reserva realizada."
  )

  booking["documento"] = QUERY_PARAMS.get("h")

  const req = new XMLHttpRequest()
  req.open("POST", URL + "/set-seat")
  req.responseType = "json"
  req.setRequestHeader("Content-Type", "application/json")
  req.send(JSON.stringify(booking))
  req.onload = () => {
    const res = req.response
    console.log(res)
    window.location.href = "https://tic.tunja.gov.co/bicentenario"
  }
}

function showButtons() {
  document.querySelector(
    ".drag"
  ).innerHTML = `<button class="btn btn-warning" onclick="reestablecer()">Reestablecer</button>
  <button class="btn btn-primary" onclick="savePuesto()">Reservar</button>`
}

function reestablecer() {
  window.location.reload()
}

function getOcupados() {
  const req = new XMLHttpRequest()
  req.open("GET", URL + "/get-by?estado=" + "Ocupada")
  req.responseType = "json"
  req.send()
  req.onload = () => {
    const res = req.response
    let puestosOc = []
    for (let i = 0; i < res.length; i++) {
      puestosOc = res[i].puesto.split("-")
      for (let j = 0; j < puestosOc.length; j++) {
        if (puestosOc[j] !== "")
          document.getElementById(puestosOc[j]).classList.add("ocupado")
      }
    }
    setSeleccionado()
  }
}

function getDiscapacidad() {
  const req = new XMLHttpRequest()
  req.open(
    "GET",
    URL + "/get-by?estado=" + "Discapa"
  )
  req.responseType = "json"
  req.send()
  req.onload = () => {
    const res = req.response
    let puestosOc = []
    for (let i = 0; i < res.length; i++) {
      puestosOc = res[i].puesto.split("-")
      for (let j = 0; j < puestosOc.length; j++) {
        if (puestosOc[j] !== "")
          document.getElementById(puestosOc[j]).classList.add("discapacidad")
      }
    }
    setSeleccionado()
  }
}

let grada = document.getElementById("gradaIzquierda")
for (let i = 4; i < ABC.length; i++) {
  grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${ABC[i] + 1}">${ABC[i] + 1}</div>
    <div class="puesto" id="${ABC[i] + 3}">${ABC[i] + 3}</div>
    <div class="puesto" id="${ABC[i] + 5}">${ABC[i] + 5}</div>
    <div class="puesto" id="${ABC[i] + 7}">${ABC[i] + 7}</div>
    <div class="puesto" id="${ABC[i] + 9}">${ABC[i] + 9}</div>
    <div class="puesto" id="${ABC[i] + 11}">${ABC[i] + 11}</div>
    </div>`
}

grada = document.getElementById("gradaCentral")
for (let i = 2; i < ABC.length - 1; i++) {
  if (i % 2) {
    grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${ABC[i] + 101}">${ABC[i] + 101}</div>
    <div class="puesto" id="${ABC[i] + 102}">${ABC[i] + 102}</div>
    <div class="puesto" id="${ABC[i] + 103}">${ABC[i] + 103}</div>
    <div class="puesto" id="${ABC[i] + 104}">${ABC[i] + 104}</div>
    <div class="puesto" id="${ABC[i] + 105}">${ABC[i] + 105}</div>
    <div class="puesto" id="${ABC[i] + 106}">${ABC[i] + 106}</div>
    <div class="puesto" id="${ABC[i] + 107}">${ABC[i] + 107}</div>
    <div class="puesto" id="${ABC[i] + 108}">${ABC[i] + 108}</div>
    <div class="puesto" id="${ABC[i] + 109}">${ABC[i] + 109}</div>
    <div class="puesto" id="${ABC[i] + 110}">${ABC[i] + 110}</div>
    <div class="puesto" id="${ABC[i] + 111}">${ABC[i] + 111}</div>
    <div class="puesto" id="${ABC[i] + 112}">${ABC[i] + 112}</div>
    <div class="puesto" id="${ABC[i] + 113}">${ABC[i] + 113}</div>
    </div>`
  } else {
    grada.innerHTML += `<div style="display: flex; padding-left: 20px;">
    <div class="puesto" id="${ABC[i] + 101}">${ABC[i] + 101}</div>
    <div class="puesto" id="${ABC[i] + 102}">${ABC[i] + 102}</div>
    <div class="puesto" id="${ABC[i] + 103}">${ABC[i] + 103}</div>
    <div class="puesto" id="${ABC[i] + 104}">${ABC[i] + 104}</div>
    <div class="puesto" id="${ABC[i] + 105}">${ABC[i] + 105}</div>
    <div class="puesto" id="${ABC[i] + 106}">${ABC[i] + 106}</div>
    <div class="puesto" id="${ABC[i] + 107}">${ABC[i] + 107}</div>
    <div class="puesto" id="${ABC[i] + 108}">${ABC[i] + 108}</div>
    <div class="puesto" id="${ABC[i] + 109}">${ABC[i] + 109}</div>
    <div class="puesto" id="${ABC[i] + 110}">${ABC[i] + 110}</div>
    <div class="puesto" id="${ABC[i] + 111}">${ABC[i] + 111}</div>
    <div class="puesto" id="${ABC[i] + 112}">${ABC[i] + 112}</div>
    </div>`
  }
}

grada = document.getElementById("gradaDerecha")
for (let i = 4; i < ABC.length; i++) {
  grada.innerHTML += `<div style="display: flex">
        <div class="puesto" id="${ABC[i] + 2}">${ABC[i] + 2}</div>
        <div class="puesto" id="${ABC[i] + 4}">${ABC[i] + 4}</div>
        <div class="puesto" id="${ABC[i] + 6}">${ABC[i] + 6}</div>
        <div class="puesto" id="${ABC[i] + 8}">${ABC[i] + 8}</div>
        <div class="puesto" id="${ABC[i] + 10}">${ABC[i] + 10}</div>
        <div class="puesto" id="${ABC[i] + 12}">${ABC[i] + 12}</div>
        </div>`
}

grada = document.getElementById("balconIzquierda")
for (let i = 3; i < ABC.length - 9; i++) {
  grada.innerHTML += `<div style="display: flex">
        <div class="puesto" id="${ABC[i] + ABC[i] + 2}">${
    ABC[i] + ABC[i] + 2
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 4}">${
    ABC[i] + ABC[i] + 4
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 6}">${
    ABC[i] + ABC[i] + 6
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 8}">${
    ABC[i] + ABC[i] + 8
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 10}">${
    ABC[i] + ABC[i] + 10
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 12}">${
    ABC[i] + ABC[i] + 12
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 14}">${
    ABC[i] + ABC[i] + 14
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 16}">${
    ABC[i] + ABC[i] + 16
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 18}">${
    ABC[i] + ABC[i] + 18
  }</div>
        </div>`
}

grada = document.getElementById("balconDerecha")
for (let i = 3; i < ABC.length - 9; i++) {
  grada.innerHTML += `<div style="display: flex">
        <div class="puesto" id="${ABC[i] + ABC[i] + 1}">${
    ABC[i] + ABC[i] + 1
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 3}">${
    ABC[i] + ABC[i] + 3
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 5}">${
    ABC[i] + ABC[i] + 5
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 7}">${
    ABC[i] + ABC[i] + 7
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 9}">${
    ABC[i] + ABC[i] + 9
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 11}">${
    ABC[i] + ABC[i] + 11
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 13}">${
    ABC[i] + ABC[i] + 13
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 15}">${
    ABC[i] + ABC[i] + 15
  }</div>
        <div class="puesto" id="${ABC[i] + ABC[i] + 17}">${
    ABC[i] + ABC[i] + 17
  }</div>
        </div>`
}

grada = document.getElementById("centroIzquerda")
for (let i = 0; i < 3; i++) {
  grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${ABC[i] + ABC[i] + 1}">${ABC[i] + ABC[i] + 1}</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 3}">${ABC[i] + ABC[i] + 3}</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 5}">${ABC[i] + ABC[i] + 5}</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 7}">${ABC[i] + ABC[i] + 7}</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 9}">${ABC[i] + ABC[i] + 9}</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 11}">${
    ABC[i] + ABC[i] + 11
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 13}">${
    ABC[i] + ABC[i] + 13
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 15}">${
    ABC[i] + ABC[i] + 15
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 17}">${
    ABC[i] + ABC[i] + 17
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 19}">${
    ABC[i] + ABC[i] + 19
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 21}">${
    ABC[i] + ABC[i] + 21
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 23}">${
    ABC[i] + ABC[i] + 23
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 25}">${
    ABC[i] + ABC[i] + 25
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 27}">${
    ABC[i] + ABC[i] + 27
  }</div>
    </div>`
}

grada = document.getElementById("centroDerecha")
for (let i = 0; i < 3; i++) {
  grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${ABC[i] + ABC[i] + 2}">${ABC[i] + ABC[i] + 2}</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 4}">${ABC[i] + ABC[i] + 4}</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 6}">${ABC[i] + ABC[i] + 6}</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 8}">${ABC[i] + ABC[i] + 8}</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 10}">${
    ABC[i] + ABC[i] + 10
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 12}">${
    ABC[i] + ABC[i] + 12
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 14}">${
    ABC[i] + ABC[i] + 14
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 16}">${
    ABC[i] + ABC[i] + 16
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 18}">${
    ABC[i] + ABC[i] + 18
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 20}">${
    ABC[i] + ABC[i] + 20
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 22}">${
    ABC[i] + ABC[i] + 22
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 24}">${
    ABC[i] + ABC[i] + 24
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 26}">${
    ABC[i] + ABC[i] + 26
  }</div>
    <div class="puesto" id="${ABC[i] + ABC[i] + 28}">${
    ABC[i] + ABC[i] + 28
  }</div>
    </div>`
}

grada = document.getElementById("balconCentro")
for (let i = 8; i < 10; i++) {
  grada.innerHTML += `<div style="display: flex">
      <div onclick="" class="puesto" id="${ABC[i] + ABC[i] + 101}">${
    ABC[i] + ABC[i] + 101
  }</div>
      <div class="puesto" id="${ABC[i] + ABC[i] + 102}">${
    ABC[i] + ABC[i] + 102
  }</div>
      <div class="puesto" id="${ABC[i] + ABC[i] + 103}">${
    ABC[i] + ABC[i] + 103
  }</div>
      <div class="puesto" id="${ABC[i] + ABC[i] + 104}">${
    ABC[i] + ABC[i] + 104
  }</div>
      <div class="puesto" id="${ABC[i] + ABC[i] + 105}">${
    ABC[i] + ABC[i] + 105
  }</div>
      <div class="puesto" id="${ABC[i] + ABC[i] + 106}">${
    ABC[i] + ABC[i] + 106
  }</div>
      <div class="puesto" id="${ABC[i] + ABC[i] + 107}">${
    ABC[i] + ABC[i] + 107
  }</div>
      </div>`
}

getOcupados()
getDiscapacidad()
setAllowedBooking()
