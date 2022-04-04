
/*------------------------------------Window----------------------------*/



/*------------------------------------Clock----------------------------*/
window.onload = displayClock();

function refresh() {
    /*refresh in order to synhronize seconds */
    let step = 1000;
    setTimeout('displayClock()', step);
}


function displayClock() {
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

    let theTime = hour + ':' + min + ':' + sec;
    document.getElementById('clock').innerHTML = theTime;
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
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    document.getElementById("time").value = timeValue;
    timerID = setTimeout("runClock()", 1000);
    timerRunning = true;
}
/*------------------------------------Fr date----------------------------*/
let dt = new Date();
let strDate = dt.toLocaleDateString('fr-Fr');
// document.querySelector('.dateFr').innerHTML = strDate;
opt = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
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
// document.getElementById('body').appendChild(table);
document.body.appendChild(table);

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

let row4 = document.createElement('tr');
let row4Td1 = document.createElement('td');
row4Td1.innerHTML = '3';
let row4Td2 = document.createElement('td');
row4Td2.innerHTML = 'Chicago';
let row4Td3 = document.createElement('td');
row4Td3.innerHTML = '713';

row4.appendChild(row4Td1);
row4.appendChild(row4Td2);
row4.appendChild(row4Td3);

tbody.appendChild(row4);

//Creating and adding data to row5 of the table

let row5 = document.createElement('tr');
let row5Td1 = document.createElement('td');
row5Td1.innerHTML = '4';
let row5Td2 = document.createElement('td');
row5Td2.innerHTML = 'Minneapolis';
let row5Td3 = document.createElement('td');
row5Td3.innerHTML = '1018';

row5.appendChild(row5Td1);
row5.appendChild(row5Td2);
row5.appendChild(row5Td3);

tbody.appendChild(row5);

let hr1 = document.createElement('hr');
document.body.appendChild(hr1);
let hr2 = document.createElement('hr');
document.body.appendChild(hr2);
// document.body.appendChild(hr1);

function crerTable(tabContent) {

    var nbL = tabContent.length;
    var nbC = tabContent[0].length;
    console.log('nbL => ' + nbL);
    console.log('nbC => ' + nbC);

    var eltTab = document.createElement('table');

    for (var il = 0; il < nbL; il++) {

        var eltTr = document.createElement('tr');

        for (var ic = 0; ic < nbC; ic++) {
            var eltTd = document.createElement('td');
            console.log(tabContent[il][ic]);
            var eltTdContent = document.createTextNode(tabContent[il][ic]);
            eltTr.appendChild(eltTd).appendChild(eltTdContent);
        }

        eltTab.appendChild(eltTr);

    }

    return eltTab;

}

// Tableau qui contient la donnÃ©es
var tabContent = [
    ['', "City", "New York", "Los Angeles", "Chicago", 'Minneapolis', 'Denver', 'Dallas', 'Seattle', 'Boston', 'San Francisco', 'St. Louis', 'Houston', 'Phoenix', 'Salt Lake City'],
    [1, "New York", 0, 2451, 713, 1018, 1631, 1374, 2408, 213, 2571, 875, 1420, 2145, 1972],
    [2, "Los Angeles", 2451, 0, 1745, 1524, 831, 1240, 959, 2596, 403, 1589, 1374, 357, 579],
    [3, "Chicago", 713, 1745, 0, 355, 920, 803, 1737, 851, 1858, 262, 940, 1453, 1260],
    [4, "Minneapolis", 1018, 1524, 355, 0, 700, 862, 1395, 1123, 1584, 466, 1056, 1280, 987],
    [5, "Denver",],
    [6, "Dallas",],
    [7, "Seattle",],
    [8, "Boston",],
    [9, "San Francisco",],
    [10, "St. Louis",],
    [11, "Houston",],
    [12, "Phoenix",],
    [13, "Salt Lake City",],

];

document.body.insertBefore(crerTable(tabContent), document.body.lastChild);
let hr3 = document.createElement('hr');
document.body.appendChild(hr3);
/////////////////////////////////////////////////////////////////////////////////////

function generateTable() {
    var body = document.getElementsByTagName('body')[0];

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    // Now, creating all cells
    //Nested loops
    //First loop for the rows (i)
    for (let i = 0; i < 2; i++) {
        //create table row
        let row = document.createElement('tr');
         //Second loop for the columns (j)
        for (let j = 0; j < 2; j++) {
            //1-Create a <td> element
            let td = document.createElement('td');
            // and create a text node, make the text node the contents of the <td>
            let tdText = document.createTextNode('cell in row : ' + i + ' , column : ' +j);
            //and put the <td> with his content, at the end of the table row
            td.appendChild(tdText);
            row.appendChild(td);
        }
          // add the row to the end of the table body
          tbody.appendChild(row);
    }
      // put the <tbody> in the <table>
      table.appendChild(tbody);
       // appends <table> into <body>
       body.appendChild(table);
       // sets the border attribute of tbl to 2;
       table.setAttribute('border','2');
}

/////////////////////////////////////////
    //     var elt = document.getElementById('doTable');
    //     elt.onclick = generateTable();
// document.getElementById('doTable').addEventListener('click',function());
// window.onload = function(){
//     var elt = document.getElementById('doTable');
//     elt.onclick = generateTable();
// }
