p
"use strict"
function addUserInfo() {
  //function that will get the user input and store it in the words variable
  let datas = [];
    let userAdd = document.getElementById("userInput").value;
    //check if the input field is empty then do nothing
    if (userAdd != "") {
        datas.push(userAdd);
      showUserInfo();
    }
} 

function showUserInfo() {
    let listInfo = "";
    for (let i = 0; i < datas.length; i++) {
        listInfo += `
        <li class="list-group-item m-1">
            <p class="display-4>${datas[i]}<span class="float-right">
            <button value="${i}" onClick="removeName(this)" class="btn btn-danger">Delete</button></span></p>
            </li>
        `;
        
    }
    
}