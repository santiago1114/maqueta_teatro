const abc = [
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
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
]


let grada = document.getElementById("gradaIzquierda")
for (let i = 4; i < abc.length; i++) {
  grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${abc[i] + 1}">${abc[i] + 1}</div>
    <div class="puesto" id="${abc[i] + 3}">${abc[i] + 3}</div>
    <div class="puesto" id="${abc[i] + 5}">${abc[i] + 5}</div>
    <div class="puesto" id="${abc[i] + 7}">${abc[i] + 7}</div>
    <div class="puesto" id="${abc[i] + 9}">${abc[i] + 9}</div>
    <div class="puesto" id="${abc[i] + 11}">${abc[i] + 11}</div>
    </div>`
}

grada = document.getElementById("gradaCentral")
for (let i = 2; i < abc.length-1; i++) {
  grada.innerHTML += `<div style="display: flex">
      <div class="puesto" id="${abc[i] + 101}">${abc[i] + 101}</div>
      <div class="puesto" id="${abc[i] + 102}">${abc[i] + 102}</div>
      <div class="puesto" id="${abc[i] + 103}">${abc[i] + 103}</div>
      <div class="puesto" id="${abc[i] + 104}">${abc[i] + 104}</div>
      <div class="puesto" id="${abc[i] + 105}">${abc[i] + 105}</div>
      <div class="puesto" id="${abc[i] + 106}">${abc[i] + 106}</div>
      <div class="puesto" id="${abc[i] + 107}">${abc[i] + 107}</div>
      <div class="puesto" id="${abc[i] + 108}">${abc[i] + 108}</div>
      <div class="puesto" id="${abc[i] + 109}">${abc[i] + 109}</div>
      <div class="puesto" id="${abc[i] + 110}">${abc[i] + 110}</div>
      <div class="puesto" id="${abc[i] + 111}">${abc[i] + 111}</div>
      <div class="puesto" id="${abc[i] + 112}">${abc[i] + 112}</div>
      </div>`
}

grada = document.getElementById("gradaDerecha")
for (let i = 4; i < abc.length; i++) {
  grada.innerHTML += `<div style="display: flex">
        <div class="puesto" id="${abc[i] + 2}">${abc[i] + 2}</div>
        <div class="puesto" id="${abc[i] + 4}">${abc[i] + 4}</div>
        <div class="puesto" id="${abc[i] + 6}">${abc[i] + 6}</div>
        <div class="puesto" id="${abc[i] + 8}">${abc[i] + 8}</div>
        <div class="puesto" id="${abc[i] + 10}">${abc[i] + 10}</div>
        <div class="puesto" id="${abc[i] + 12}">${abc[i] + 12}</div>
        </div>`
}

grada = document.getElementById("balconIzquierda")
for (let i = 3; i < abc.length-10; i++) {
  grada.innerHTML += `<div style="display: flex">
        <div class="puesto" id="${abc[i] + abc[i] + 2}">${abc[i] + abc[i] + 2}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 4}">${abc[i] + abc[i] + 4}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 6}">${abc[i] + abc[i] + 6}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 8}">${abc[i] + abc[i] + 8}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 10}">${abc[i] + abc[i] + 10}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 12}">${abc[i] + abc[i] + 12}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 14}">${abc[i] + abc[i] + 14}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 16}">${abc[i] + abc[i] + 16}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 18}">${abc[i] + abc[i] + 18}</div>
        </div>`
}

grada = document.getElementById("balconDerecha")
for (let i = 3; i < abc.length-10; i++) {
  grada.innerHTML += `<div style="display: flex">
        <div class="puesto" id="${abc[i] + abc[i] + 1}">${abc[i] + abc[i] + 1}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 3}">${abc[i] + abc[i] + 3}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 5}">${abc[i] + abc[i] + 5}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 7}">${abc[i] + abc[i] + 7}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 9}">${abc[i] + abc[i] + 9}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 11}">${abc[i] + abc[i] + 11}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 13}">${abc[i] + abc[i] + 13}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 15}">${abc[i] + abc[i] + 15}</div>
        <div class="puesto" id="${abc[i] + abc[i] + 17}">${abc[i] + abc[i] + 17}</div>
        </div>`
}

grada = document.getElementById("centroIzquerda")
for (let i = 0; i < 3; i++) {
  grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${abc[i] + abc[i] + 1}">${abc[i] + abc[i] + 1}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 3}">${abc[i] + abc[i] + 3}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 5}">${abc[i] + abc[i] + 5}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 7}">${abc[i] + abc[i] + 7}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 9}">${abc[i] + abc[i] + 9}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 11}">${abc[i] + abc[i] + 11}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 13}">${abc[i] + abc[i] + 13}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 15}">${abc[i] + abc[i] + 15}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 17}">${abc[i] + abc[i] + 17}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 19}">${abc[i] + abc[i] + 19}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 21}">${abc[i] + abc[i] + 21}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 23}">${abc[i] + abc[i] + 23}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 25}">${abc[i] + abc[i] + 25}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 27}">${abc[i] + abc[i] + 27}</div>
    </div>`
}

grada = document.getElementById("centroDerecha")
for (let i = 0; i < 3; i++) {
  grada.innerHTML += `<div style="display: flex">
    <div class="puesto" id="${abc[i] + abc[i] + 2}">${abc[i] + abc[i] + 2}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 4}">${abc[i] + abc[i] + 4}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 6}">${abc[i] + abc[i] + 6}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 8}">${abc[i] + abc[i] + 8}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 10}">${abc[i] + abc[i] + 10}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 12}">${abc[i] + abc[i] + 12}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 14}">${abc[i] + abc[i] + 14}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 16}">${abc[i] + abc[i] + 16}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 18}">${abc[i] + abc[i] + 18}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 20}">${abc[i] + abc[i] + 20}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 22}">${abc[i] + abc[i] + 22}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 24}">${abc[i] + abc[i] + 24}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 26}">${abc[i] + abc[i] + 26}</div>
    <div class="puesto" id="${abc[i] + abc[i] + 28}">${abc[i] + abc[i] + 28}</div>
    </div>`
}

grada = document.getElementById("balconCentro")
for (let i = 9; i < 11; i++) {
    grada.innerHTML += `<div style="display: flex">
      <div class="puesto" id="${abc[i] + abc[i] + 101}">${abc[i] + abc[i] + 101}</div>
      <div class="puesto" id="${abc[i] + abc[i] + 102}">${abc[i] + abc[i] + 102}</div>
      <div class="puesto" id="${abc[i] + abc[i] + 103}">${abc[i] + abc[i] + 103}</div>
      <div class="puesto" id="${abc[i] + abc[i] + 104}">${abc[i] + abc[i] + 104}</div>
      <div class="puesto" id="${abc[i] + abc[i] + 105}">${abc[i] + abc[i] + 105}</div>
      <div class="puesto" id="${abc[i] + abc[i] + 106}">${abc[i] + abc[i] + 106}</div>
      <div class="puesto" id="${abc[i] + abc[i] + 107}">${abc[i] + abc[i] + 107}</div>
      </div>`
}

document.getElementById('C106').scrollIntoView({
  behavior: 'auto',
  block: 'center',
  inline: 'center'
});

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

if (urlParams.has("puesto")) {
  const puesto = urlParams.get("puesto")
  const puestos = puesto.split("-")

  puestos.forEach(puesto => {
    document.getElementById(puesto).style.backgroundColor = "#3498DB"
  }); 

}
