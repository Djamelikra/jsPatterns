function generateTable() {
  //nRow, nCol
   //►0 new Div
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "divTable");
  newDiv.innerHTML = "<p>Div for Table</p>";
  newDiv.style.border = "solid 5px red";
  newDiv.style.background = "RGB(250, 226, 192)";
  newDiv.style.width = "500px";
  newDiv.style.height = "500px";
  document.body.appendChild(newDiv);

//   //►1 newTable HTML table
  var newTable = document.createElement("table");
  newTable.setAttribute("id", "newTable");
  document.body.appendChild(newTable);
//   document.getElementById("tableZone").appendChild(newTable);

  //►2 Add Table Header
  let headerRow = newTable.insertRow(0);
  let headerRowArr = new Array();
  headerRowArr = ['user','email','password','Option'];
  for (let i = 0; i < headerRowArr.length; i++) {
      let th = document.createElement('th');
      th.innerHTML = headerRowArr[i];
      headerRow.appendChild(th);
  }

    //►3 CSS
    newTable.setAttribute("width", "10rem");
    newTable.setAttribute("border", "3");
    newTable.setAttribute("cellpadding", "10px");
    newTable.style.border = "outset 5px green";

 //►4 add multiple rows dynamically with a pseudo form


}

function addRow() {
  let user = document.getElementById("user");
  let email = document.getElementById("email");
  let tel = document.getElementById("tel");
  
}

function addForm() {
  let user = document.getElementById("user");
  let email = document.getElementById("email");
  let tel = document.getElementById("tel");
  
}

generateTable();
