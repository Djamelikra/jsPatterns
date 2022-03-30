



//   var date = new Date()
//   document.querySelector('p').innerHTML= date;
 





var date = new Date()
document.querySelector('p.date').innerHTML =  ('0'+date.getDate()).slice(-2)+"/"+('0'+(date.getMonth()+1)).slice(-2)+"/"+date.getFullYear();


var d = new Date();
var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
document.querySelector('p.date2').innerHTML = date;


// document.querySelector('p.date').innerHTML = '0' + theDate.getDate().slice(-2)+'/' +('0' +
//  theDate.getMonth()+1).slice(-2)+'/'+ theDate.getFullYear();



//  var els = document.querySelector('p');
// document.querySelector('p.show').innerHTML = 'retest___show'



//  alert('hello !');
