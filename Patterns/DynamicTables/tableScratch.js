/*********************** */
"use strict";
/************************V0************************** */
function genTableV0() {
  let tblZone = document.getElementById("tbl");
  let myTable = document.createElement("table");

  for (let i = 0; i < 4; i++) {
    var tblRow = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    var text1 = document.createTextNode("text_" + i);
    var text2 = document.createTextNode("text_" + i);

    td1.appendChild(text1);
    td2.appendChild(text2);

    tblRow.appendChild(td1);
    tblRow.appendChild(td2);

    myTable.appendChild(tblRow);
  }

  tblZone.appendChild(myTable);
}
//
let ctaV0 = document.getElementsByName("btnV0")[0];
ctaV0.addEventListener("click", genTableV0);
/************************V1************************** */
function genTableV1() {
  //table location
  let tblZone = document.getElementById("tbl");

  //init table
  let myTable = document.createElement("table");
  var tblBody = document.createElement("tbody");

  //number of row and column
  let iRow = 5;
  let jCol = 5;

  // creating all cells
  for (let i = 0; i < iRow; i++) {
    // creates a table row
    var tblRow = document.createElement("tr");

    for (let j = 0; j < jCol; j++) {
      var tdCell = document.createElement("td");
      var cellText = document.createTextNode(
        "i:" + (i + 1) + " , j: " + (j + 1)
      );
      tdCell.appendChild(cellText);
      tblRow.appendChild(tdCell);
    }
    tblBody.appendChild(tblRow);
  }
  myTable.appendChild(tblBody);
  //append the table
  tblZone.appendChild(myTable);

  // add a few CSS STYLE ///////////
  myTable.setAttribute("border", "2");
  myTable.style.borderCollapse = "collapse";
  myTable.style.background = "orange";
  myTable.style.width = "50%";
}

let ctaV1 = document.getElementsByName("btnV1")[0];
ctaV1.addEventListener("click", genTableV1);
/************************V2************************** */

function genTableV2() {
  //table location
  let tblZone = document.getElementById("tbl");

  //init table
  let myTable = document.createElement("table");

  for (var i = 1; i < 5; i++) {
    var tr = [];
    tr[i] = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.appendChild(document.createTextNode("Text1"));
    td2.appendChild(document.createTextNode("Text2"));
    tr[i].appendChild(td1);
    tr[i].appendChild(td2);
    myTable.appendChild(tr[i]);
  }
  tblZone.appendChild(myTable);
  // add a few CSS STYLE ///////////
  myTable.setAttribute("border", "2");
  myTable.style.borderCollapse = "collapse";
  myTable.style.background = "orange";
  myTable.style.width = "50%";
}

let ctaV2 = document.getElementsByName("btnV2")[0];
ctaV2.addEventListener("click", genTableV2);

/************************V3************************** */
function addToDom(newElement, newId, newContent) {
  var thisElement = document.createElement(newElement);
  thisElement.setAttribute("id", newId);
  var eltContent = document.createTextNode(newContent);
  thisElement.appendChild(eltContent);

  var location = document.getElementById("tbl");
  document.body.appendChild(thisElement);

  //add CSS
  thisElement.style.border = "outset 5px green";
}

function genTableV3() {
  addToDom("div", "testDiv", "texte de remplissage de la div");
}

let ctaV3 = document.getElementsByName("btnV3")[0];
ctaV3.addEventListener("click", genTableV3);
/************************V4************************** */
function populateTable(newTable, nbrRows, nbrCells, newContent) {
  if (!newTable) {
    newTable = document.createElement(newTable);
  }
  for (let i = 0; i < nbrRows; i++) {
    let newRow = document.createElement("tr");
    for (let j = 0; j < nbrCells; j++) {
      newRow.appendChild(document.createElement("td"));
      newRow.cells[j].appendChild(
        document.createTextNode(newContent + (j + 1))
      );
    }
    newTable.appendChild(newRow);
  }
  //add CSS

  return newTable;
}
function genTableV4() {
  document
    .getElementById("tbl")
    .appendChild(populateTable(null, 5, 3, "div padding text"));
}

let ctaV4 = document.getElementsByName("btnV4")[0];
ctaV4.addEventListener("click", genTableV4);

/************************V5************************** */
function genTableV5() {
  // //►1 contain
  // let contain = document.createElement("div");
  // contain.setAttribute("id", "contain");
  // document.body.appendChild(contain);
  //►2 newTable HTML table
  let newTable = document.createElement("table");
  newTable.setAttribute("id", "newTable");
  document.body.appendChild(newTable);
  // contain.appendChild(newTable);
  //►3 Add Table Header
  let tblHeadRow = newTable.insertRow(0);
  let tblHeadArray = new Array();
  tblHeadArray = ["userName", "email", "tel", "birthDate","Option"];
  for (let i = 0; i < tblHeadArray.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = tblHeadArray[i];
    tblHeadRow.appendChild(th);
  }
  //►4 CSS
  newTable.setAttribute("width", "10rem");
  newTable.setAttribute("border", "3");
  newTable.setAttribute("cellpadding", "10px");
  newTable.style.border = "outset 5px green";

  //►5 add multiple rows dynamically with a pseudo form
  document.getElementById("btnAddRow").addEventListener("click", function () {
    let userName = document.getElementById("userName");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let birthDate = document.getElementById("birthDate");

    let tr = newTable.insertRow(-1);

    let tblDataArray = new Array();
    tblDataArray = [userName.value, email.value, tel.value, birthDate.value];

    for (let i = 0; i < tblDataArray.length; i++) {
      let td = tr.insertCell(-1);
      td.innerHTML = tblDataArray[i];
    }

    let td = tr.insertCell(-1);
    // add a button
    var btnRemove = document.createElement("button");
    btnRemove.setAttribute("type", "button");
    btnRemove.innerHTML = "Remove";
    btnRemove.setAttribute('onclick','removeRow(this)');
    td.appendChild(btnRemove);

    userName.value = "";
    email.value= "";
    tel.value= "";
    birthDate.value = "";

  });


}

function removeRow(r) {
let theTable = document.getElementById('newTable');
theTable.deleteRow(r.parentNode.parentNode.rowIndex);
  
}

let ctaV5 = document.getElementsByName("btnV5")[0];
ctaV5.addEventListener("click", genTableV5);

/************************V6************************** */
function genTableV6() {
  //Build an array containing Customer records.
  var customers = new Array();
  customers.push(["Customer Id", "Name", "Country"]);
  customers.push([1, "John Hammond", "United States"]);
  customers.push([2, "Mudassar Khan", "India"]);
  customers.push([3, "Suzanne Mathews", "France"]);
  customers.push([4, "Robert Schidner", "Russia"]);

  //Create a HTML Table element.
  var table = document.createElement("TABLE");
  table.border = "1";

  //Get the count of columns.
  var columnCount = customers[0].length;

  //Add the header row.
  var row = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = customers[0][i];
      row.appendChild(headerCell);
  }

  //Add the data rows.
  for (var i = 1; i < customers.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
          var cell = row.insertCell(-1);
          cell.innerHTML = customers[i][j];
      }
  }

  var dvTable = document.getElementById("dvTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}

let ctaV6 = document.getElementsByName("btnV6")[0];
ctaV6.addEventListener("click", genTableV6);

/************************V7?************************** */