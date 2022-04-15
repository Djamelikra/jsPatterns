/*********************** */
"use strict";
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
////
function genTableV1() {
  //table location
  let tblZone = document.getElementById("tbl");

  //init table
  let myTable = document.createElement("table");
  var tblBody = document.createElement("tbody");

  //number of row and column
  let iRow = 3;
  let jCol = 3;

  // creating all cells
  for (let i = 0; i < iRow; i++) {
    // creates a table row
    var tblRow = document.createElement("tr");

    for (let j = 0; j < jCol; j++) {
      var tdCell = document.createElement("td");
      var cellText = document.createTextNode("i-" + i + " ,j: " + j);
      tdCell.appendChild(cellText);
      tblRow.appendChild(tdCell);
    }
    tblBody.appendChild(tblRow);
  }
  myTable.appendChild(tblBody);
//append the table
  tblZone.appendChild(myTable);

  // add a few CSS
  myTable.setAttribute('border', '2');
  myTable.style.borderCollapse='collapse';
}

  let ctaV1 = document.getElementsByName('btnV1')[0];
  ctaV1.addEventListener("click", genTableV1);
