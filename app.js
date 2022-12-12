let bodyEl = document.getElementsByTagName("body")[0];
let titleEl = document.getElementById("title");
let minuteurEl = document.getElementById("minuteur");
let messageEl = document.getElementById("message");
let joursEl = document.getElementById("j");
let heuresEl = document.getElementById("h");
let minutesEl = document.getElementById("m");
let secondesEl = document.getElementById("s");
let btn = document.querySelector('button');


let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");



startBtn.addEventListener("click", start);

stopBtn.addEventListener("click", stop);

resetBtn.addEventListener("click", reset);

let interval;

function start() {
interval = setInterval(getCountdown, 1000);}

function stop() {
clearInterval(interval);
}

reset.addEventListener('click', function(){

  joursEl.textContent = 0;
  heuresEl.textContent = 0;
  minutesEl.textContent = 0;
  secondesEl.textContent = 0;

clearInterval(interval);
})

let now = new Date();
const dateOffsetInMinutes = now.getTimezoneOffset();

const unJourEnMs = 1000 * 60 * 60 * 24;
const uneHeureEnMs = 1000 * 60 * 60;
const uneMinuteEnMs = 1000 * 60;


const newYear = new Date("2023");

const getCountdown = () => {

  let nowDate = Date.now();

  let tempsRestantEnMs = newYear - nowDate + (dateOffsetInMinutes * uneMinuteEnMs);

  console.log(tempsRestantEnMs);


  // Tages
  let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);


  // Stunde
  let resteTempsSansJoursMs = tempsRestantEnMs - (nbJours * unJourEnMs);
  let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeureEnMs);

  // Minuten
  let resteTempsSansHeuresMs = resteTempsSansJoursMs - (nbHeures * uneHeureEnMs);
  let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs);


  // seconden
  let resteTempsSansMinutesMs = resteTempsSansHeuresMs - (nbMinutes * uneMinuteEnMs);
  let nbSecondes = Math.floor(resteTempsSansMinutesMs / 1000);

  joursEl.textContent = nbJours;
  heuresEl.textContent = nbHeures;
  minutesEl.textContent = nbMinutes;
  secondesEl.textContent = nbSecondes;

  if (tempsRestantEnMs <= 0) {
    clearInterval(countDownInterval);
    bodyEl.style.backgroundImage = 'url("./newyear.gif")';
    joursEl.textContent = 0;
    heuresEl.textContent = 0;
    minutesEl.textContent = 0;
    secondesEl.textContent = 0;
    titleEl.innerHTML = "Bonne année !!! &#127881;&#127881;";
  




  }
}



// init
getCountdown();
