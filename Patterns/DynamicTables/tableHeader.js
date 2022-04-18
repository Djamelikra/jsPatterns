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
  headerRowArr = ["user", "email", "password", "Option"];
  for (let i = 0; i < headerRowArr.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = headerRowArr[i];
    headerRow.appendChild(th);
  }

  //►3 CSS
  newTable.setAttribute("width", "10rem");
  newTable.setAttribute("border", "3");
  newTable.setAttribute("cellpadding", "10px");
  newTable.style.border = "outset 5px green";

  //►4 add multiple rows dynamically with a pseudo form
  addForm();
}

function addRow() {
  let user = document.getElementById("user");
  let email = document.getElementById("email");
  let tel = document.getElementById("password");
}

function addForm() {
  let frm = document.createElement("form");
  frm.setAttribute("id", "newFrm");
  frm.setAttribute("name", "newFrm");

  let lblUser = document.createElement("label");
  lblUser.setAttribute("for", "user");
  lblUser.innerHTML = "User :";
  let iUser = document.createElement("input");
  iUser.setAttribute("type", "text");
  iUser.setAttribute("name", "user");
  let brUser = document.createElement("br");
  let hrUser = document.createElement("hr");

  let lblEmail = document.createElement("label");
  lblEmail.setAttribute("for", "email");
  lblEmail.innerHTML = "Email :";
  let iEmail = document.createElement("input");
  iEmail.setAttribute("type", "email");
  iEmail.setAttribute("name", "email");
  let brEmail = document.createElement("br");
  let hrEmail = document.createElement("hr");

  let lblPwd = document.createElement("label");
  lblPwd.setAttribute("for", "pwd:");
  lblPwd.innerHTML = "Password :";
  let iPwd = document.createElement("input");
  iPwd.setAttribute("type", "password");
  iPwd.setAttribute("name", "pwd");

  frm.appendChild(lblUser);
  frm.appendChild(iUser);
  frm.appendChild(brUser);
  frm.appendChild(hrUser);
  frm.appendChild(lblEmail);
  frm.appendChild(iEmail);
  frm.appendChild(brEmail);
  frm.appendChild(hrEmail);
  frm.appendChild(lblPwd);
  frm.appendChild(iPwd);


  frm.style.width = '20%';
  frm.style.border = 'outset 5px green';

  document.body.appendChild(frm);
}

generateTable();
