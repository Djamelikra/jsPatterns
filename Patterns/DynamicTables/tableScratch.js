/*********************** */
"use strict";
function genTable() {
  let tblZone = document.getElementById("tbl");
  let myTable = document.createElement("table");

  var tblRow = [];
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");

  var text1 = document.createTextNode("text1");
  var text2 = document.createTextNode("text2");

  for (let i = 0; i < 4; i++) {
    tblRow[i] = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      td1.appendChild(text1);
      td2.appendChild(text2);
      tblRow[i].appendChild(td1);
      tblRow[i].appendChild(td2);
    }
    myTable.appendChild(tblRow[i]);
  }
  tblZone.appendChild(myTable);
}
