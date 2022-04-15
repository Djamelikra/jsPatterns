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
    var tr = [] ;
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
