/*------------------------------------Window----------------------------*/


/*------------------------------------Clock----------------------------*/
window.onload = displayClock();

function refresh() {
  /*refresh in order to synhronize seconds */
  let step = 1000;
  setTimeout("displayClock()", step);
}

function displayClock() {
  let dt = new Date();
  let hour = dt.getHours();
  let min = dt.getMinutes();
  let sec = dt.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  let theTime = hour + ":" + min + ":" + sec;
  document.getElementById("clock").innerHTML = theTime;
  refresh();
}
/* todo */
function runClock() {
  today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();
  seconds = today.getSeconds();
  timeValue = hours;
  // Les deux prochaines conditions ne servent que pour l'affichage.
  // Si le nombre de minute est inférieur à 10, alors on rajoute un 0 devant...
  timeValue += (minutes < 10 ? ":0" : ":") + minutes;
  timeValue += (seconds < 10 ? ":0" : ":") + seconds;
  document.getElementById("time").value = timeValue;
  timerID = setTimeout("runClock()", 1000);
  timerRunning = true;
}
/*------------------------------------Fr date----------------------------*/
let dt = new Date();
let strDate = dt.toLocaleDateString("fr-Fr");
// document.querySelector('.dateFr').innerHTML = strDate;
opt = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
strDate = dt.toLocaleDateString("fr-FR", opt);
// document.querySelector('p.slice').innerHTML = ('0'+dt.getDate()).slice(-2)+"/"+('0'+(dt.getMonth()+1)).slice(-2)+"/"+dt.getFullYear();
document.querySelector("p.dateFrlong").innerHTML = strDate;

/*********************************TABLE******************************************************* */

///////////////////////////////LOCATION//////////////////////////////////
const loc = document.getElementById("loc");
loc.addEventListener("click", locat, false);

function locat() {
  alert(location.href + " " + location.hostname);
  
  document.querySelector('.display').innerHTML = location.hostname + " / " +  location.protocol + "/ " + location.search;

  
}

