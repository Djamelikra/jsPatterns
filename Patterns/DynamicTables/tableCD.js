
"use strict"
let datas = [];
function addUserInfo() {
  //function that will get the user input and store it in the words variable
 
    let userAdd = document.getElementById("userInput").value;
    //check if the input field is empty then do nothing
    if (userAdd != "") {
        datas.push(userAdd);
      showUserInfo();
    }
    
} 
//Variant:
// function showUserInfo() {
//     let listInfo = "";
//     for (let i = 0; i < datas.length; i++) {
//         listInfo += `
//         <li class="list-group-item m-1">
//             <p class="display-4">${datas[i]}<span class="float-right">
//             <button value="${i}" onClick="removeName(this)" class="btn btn-danger">Delete</button></span></p>
//             </li>
//         `;
//     }
//     document.getElementById('display').innerHTML = listInfo;
//     document.getElementById("userInput").value = "";
// }

function showUserInfo() {
    let listInfo = "";
    let count = 0;
   datas.forEach(data =>
    listInfo += `
    <li class="list-group-item m-1">
        <p class="display-4">${data}<span class="float-right">
        <button value="${count++}" onClick="removeName(this)" class="btn btn-danger">Delete</button></span></p>
        </li>
    `
    )
    document.getElementById('display').innerHTML = listInfo;
    document.getElementById("userInput").value = "";
}

function removeName(e) {
    datas.splice(parseInt(e),1);
    showUserInfo();
    
}


