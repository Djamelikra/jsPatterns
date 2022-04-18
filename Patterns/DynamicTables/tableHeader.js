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

  //►4 add a form dynamically 
  addForm();
  //►5 add multiple rows dynamically in the previous dynamic form
  addBtnAdd();
  addRow() ;

}
function removeRow(r) {
  let theTable = document.getElementById("newTable");
  theTable.deleteRow(r.parentNode.parentNode.rowIndex);
}
function addBtnAdd() {
  var btnAddRow = document.createElement("button");
  btnAddRow.setAttribute("type", "button");
  btnAddRow.setAttribute("id", "btnAddRow");
  btnAddRow.innerHTML = "Add a Row";
  let parentNode = document.getElementById('newFrm');
  parentNode.appendChild(btnAddRow);
}

function addRow() {
  document.getElementById("btnAddRow").addEventListener("click", function () {
    let userName = document.getElementById("userName");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let birthDate = document.getElementById("birthDate");

    let tr = newTable.insertRow(-1);

    let tblDataArray = new Array();
    tblDataArray = [user.value, email.value, pwd.value];

    for (let i = 0; i < tblDataArray.length; i++) {
      let td = tr.insertCell(-1);
      td.innerHTML = tblDataArray[i];
    }

    let td = tr.insertCell(-1);
    // add a button
    var btnRemove = document.createElement("button");
    btnRemove.setAttribute("type", "button");
    btnRemove.innerHTML = "Remove";
    btnRemove.setAttribute("onclick", "removeRow(this)");
    td.appendChild(btnRemove);

    userName.value = "";
    email.value = "";
    tel.value = "";
    birthDate.value = "";
  });
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
  iUser.setAttribute("id", "user");
  let brUser = document.createElement("br");
  let hrUser = document.createElement("hr");

  let lblEmail = document.createElement("label");
  lblEmail.setAttribute("for", "email");
  lblEmail.innerHTML = "Email :";
  let iEmail = document.createElement("input");
  iEmail.setAttribute("type", "email");
  iEmail.setAttribute("id", "email");
  let brEmail = document.createElement("br");
  let hrEmail = document.createElement("hr");

  let lblPwd = document.createElement("label");
  lblPwd.setAttribute("for", "pwd:");
  lblPwd.innerHTML = "Password :";
  let iPwd = document.createElement("input");
  iPwd.setAttribute("type", "password");
  iPwd.setAttribute("id", "pwd");
  let brPwd = document.createElement("br");
  let hrPwd = document.createElement("hr");

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
  frm.appendChild(brPwd);
  frm.appendChild(hrPwd);


  frm.style.width = '20%';
  frm.style.border = 'outset 5px green';

  document.body.appendChild(frm);
}

generateTable();
