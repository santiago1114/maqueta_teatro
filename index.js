const abc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
]


let grada = document.getElementById("gradaIzquierda")
for (let i = 4; i < abc.length; i++) {
  grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${abc[i].toUpperCase() + 1}">${abc[i].toUpperCase() + 1}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + 3}">${abc[i].toUpperCase() + 3}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + 5}">${abc[i].toUpperCase() + 5}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + 7}">${abc[i].toUpperCase() + 7}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + 9}">${abc[i].toUpperCase() + 9}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + 11}">${abc[i].toUpperCase() + 11}</div>
    </div>`
}

grada = document.getElementById("gradaCentral")
for (let i = 2; i < abc.length-1; i++) {
  grada.innerHTML += `<div style="display: flex">
      <div class="puesto" id="${abc[i].toUpperCase() + 101}">${abc[i].toUpperCase() + 101}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 102}">${abc[i].toUpperCase() + 102}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 103}">${abc[i].toUpperCase() + 103}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 104}">${abc[i].toUpperCase() + 104}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 105}">${abc[i].toUpperCase() + 105}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 106}">${abc[i].toUpperCase() + 106}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 107}">${abc[i].toUpperCase() + 107}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 108}">${abc[i].toUpperCase() + 108}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 109}">${abc[i].toUpperCase() + 109}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 110}">${abc[i].toUpperCase() + 110}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 111}">${abc[i].toUpperCase() + 111}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + 112}">${abc[i].toUpperCase() + 112}</div>
      </div>`
}

grada = document.getElementById("gradaDerecha")
for (let i = 4; i < abc.length; i++) {
  grada.innerHTML += `<div style="display: flex">
        <div class="puesto" id="${abc[i].toUpperCase() + 2}">${abc[i].toUpperCase() + 2}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + 4}">${abc[i].toUpperCase() + 4}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + 6}">${abc[i].toUpperCase() + 6}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + 8}">${abc[i].toUpperCase() + 8}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + 10}">${abc[i].toUpperCase() + 10}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + 12}">${abc[i].toUpperCase() + 12}</div>
        </div>`
}

grada = document.getElementById("balconIzquierda")
for (let i = 3; i < abc.length-10; i++) {
  grada.innerHTML += `<div style="display: flex">
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 2}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 2}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 4}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 4}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 6}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 6}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 8}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 8}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 10}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 10}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 12}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 12}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 14}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 14}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 16}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 16}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 18}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 18}</div>
        </div>`
}

grada = document.getElementById("balconDerecha")
for (let i = 3; i < abc.length-10; i++) {
  grada.innerHTML += `<div style="display: flex">
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 1}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 1}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 3}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 3}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 5}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 5}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 7}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 7}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 9}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 9}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 11}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 11}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 13}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 13}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 15}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 15}</div>
        <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 17}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 17}</div>
        </div>`
}

grada = document.getElementById("centroIzquerda")
for (let i = 0; i < 3; i++) {
  grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 1}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 1}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 3}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 3}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 5}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 5}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 7}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 7}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 9}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 9}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 11}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 11}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 13}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 13}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 15}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 15}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 17}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 17}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 19}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 19}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 21}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 21}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 23}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 23}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 25}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 25}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 27}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 27}</div>
    </div>`
}

grada = document.getElementById("centroDerecha")
for (let i = 0; i < 3; i++) {
  grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 2}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 2}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 4}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 4}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 6}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 6}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 8}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 8}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 10}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 10}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 12}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 12}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 14}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 14}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 16}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 16}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 18}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 18}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 20}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 20}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 22}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 22}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 24}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 24}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 26}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 26}</div>
    <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 28}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 28}</div>
    </div>`
}

grada = document.getElementById("balconCentro")
for (let i = 9; i < 11; i++) {
    grada.innerHTML += `<div style="display: flex">
      <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 101}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 101}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 102}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 102}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 103}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 103}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 104}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 104}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 105}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 105}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 106}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 106}</div>
      <div class="puesto" id="${abc[i].toUpperCase() + abc[i].toUpperCase() + 107}">${abc[i].toUpperCase() + abc[i].toUpperCase() + 107}</div>
      </div>`
  }

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

if (urlParams.has("puesto")) {
  const puesto = urlParams.get("puesto")
  console.log("====================================")
  console.log("El puesto seleccionado es: " + puesto)
  console.log("====================================")
  document.getElementById(puesto).style.backgroundColor = "#3498DB"
}
