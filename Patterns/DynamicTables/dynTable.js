/*------------------------------------Window----------------------------*/


/*------------------------------------Clock----------------------------*/
"use strict";

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
let opt = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
strDate = dt.toLocaleDateString("fr-FR", opt);
// document.querySelector('p.slice').innerHTML = ('0'+dt.getDate()).slice(-2)+"/"+('0'+(dt.getMonth()+1)).slice(-2)+"/"+dt.getFullYear();
document.querySelector("p.dateFrlong").innerHTML = strDate;
/******************************************************************************************* */
/*********************************TABLE******************************************************* */

//Array classes
let classes = [
  { title: "JavaScript", price: 25 },//0
  { title: "HTML", price: 35 }, // 1
  { title: "CSS", price: 22 }, // 2
  { title: "jQuery", price: 17 }, // 3
  { title: "Ajax", price: 45 }, // 4
  { title: "Java", price: 30 }, // 5
  { title: "SQL", price: 30 }, // 6
  { title: "UML", price: 58 }, // 7
  { title: "Git", price: 15 }, // 8
  { title: "Bootstrap", price: 20 }, // 9
  { title: "Membership fees", price: 35 }  // 10
];

const euro = new Intl.NumberFormat( 'fr-FR', { style: 'currency', currency: 'EUR' } );

function initTable() {
  
  let tbody = document.querySelector('#invoiceTable').querySelector('tbody');
  for (let i = 0; i < classes.length; i++) {
    let line = tbody.insertRow();

    // cells classes
    let cellClass = line.insertCell();
    cellClass.innerHTML = classes[i].title;
    cellClass.className='fldClass';
    // cells contribution
    let cellCont = line.insertCell();
    cellCont.innerHTML = euro.format(classes[i].price) ;
    cellCont.className='fldCont';
    // cells register
    let cellReg = line.insertCell();
    cellReg.className='fldReg';
    // insert checkboxes
    if (i === classes.length -1) {
      cellReg.innerHTML = '<input type="checkbox" disabled checked />';
    }else{
      cellReg.innerHTML = '<input type="checkbox"/>';
    }
    // cells price
    let cellPrice = line.insertCell();
    cellPrice.className='fldPrice';
    cellPrice.innerHTML = euro.format(0) ; 
  }

};

//to launch automaticly the function


function contribCalcul() {
  let tabRow = document.querySelector('#invoiceTable').querySelector('tbody').querySelectorAll('tr');
  let total = 0;

  for (let i = 0; i < classes.length; i++) {
    if (tabRow[i].cells[2].childNodes[0].checked) {
      tabRow[i].cells[3].style.color = 'red';
      tabRow[i].cells[3].innerHTML = euro.format(classes[i].price);
      total += classes[i].price;
    }else{
      tabRow[i].cells[3].innerHTML = euro.format(0);
    } 

    document.querySelector('#total').innerHTML = euro.format(total)  ;
  }
  
}


initTable();
contribCalcul();
















/********************************************************************************************** */
///////////////////////////////LOCATION//////////////////////////////////
const loc = document.getElementById("loc");
loc.addEventListener("click", locat, false);

function locat() {
  alert(location.href + " " + location.hostname);

  document.querySelector('.display').innerHTML = location.hostname + " / " + location.protocol + "/ " + location.search;


}

