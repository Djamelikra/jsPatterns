




  /*------------------------------------Clock----------------------------*/
window.onload=displayClock();

function refresh() {
    /*refresh in order to synhronize seconds */
    let step = 1000;
    setTimeout('displayClock()', step);
}


function displayClock(){
    let dt = new Date();
    let hour = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    let theTime = hour + ':'  + min + ':' + sec ;
    document.getElementById('clock').innerHTML = theTime;
    refresh();

}
/* todo */
function runClock() {
    today   = new Date();
    hours   = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    timeValue = hours;
    // Les deux prochaines conditions ne servent que pour l'affichage.
    // Si le nombre de minute est inférieur à 10, alors on rajoute un 0 devant...
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    document.getElementById("time").value = timeValue;
    timerID = setTimeout("runClock()",1000);
    timerRunning = true;
  }
/*------------------------------------Fr date----------------------------*/
let dt = new Date();
let strDate = dt.toLocaleDateString('fr-Fr');
// document.querySelector('.dateFr').innerHTML = strDate;
opt = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
strDate = dt.toLocaleDateString('fr-FR', opt);
// document.querySelector('p.slice').innerHTML = ('0'+dt.getDate()).slice(-2)+"/"+('0'+(dt.getMonth()+1)).slice(-2)+"/"+dt.getFullYear();
document.querySelector('p.dateFrlong').innerHTML = strDate;


/*********************************TABLE******************************************************* */

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body element
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row1 = document.createElement('tr');
let head1 = document.createElement('th');
head1.innerHTML = 'ID';
let head2 = document.createElement('th');
head2.innerHTML = 'City';
let head3 = document.createElement('th');
head3.innerHTML = 'Distance';

row1.appendChild(head1);
row1.appendChild(head2);
row1.appendChild(head3);

thead.appendChild(row1);

// Creating and adding data to row2 of the table
let row2 = document.createElement('tr');
let row2Td1 = document.createElement('td');
row2Td1.innerHTML = '1';
let row2Td2 = document.createElement('td');
row2Td2.innerHTML = 'New York';
let row2Td3 = document.createElement('td');
row2Td3.innerHTML = '0';

row2.appendChild(row2Td1);
row2.appendChild(row2Td2);
row2.appendChild(row2Td3);

tbody.appendChild(row2);

//Creating and adding data to row3 of the table

let row3 = document.createElement('tr');
let row3Td1 = document.createElement('td');
row3Td1.innerHTML = '2';
let row3Td2 = document.createElement('td');
row3Td2.innerHTML = 'Los Angeles';
let row3Td3 = document.createElement('td');
row3Td3.innerHTML = '2451';

row3.appendChild(row3Td1);
row3.appendChild(row3Td2);
row3.appendChild(row3Td3);

tbody.appendChild(row3);

//Creating and adding data to row4 of the table

let row3 = document.createElement('tr');
let row3Td1 = document.createElement('td');
row3Td1.innerHTML = '2';
let row3Td2 = document.createElement('td');
row3Td2.innerHTML = 'Los Angeles';
let row3Td3 = document.createElement('td');
row3Td3.innerHTML = '2451';

row3.appendChild(row3Td1);
row3.appendChild(row3Td2);
row3.appendChild(row3Td3);

tbody.appendChild(row3);

