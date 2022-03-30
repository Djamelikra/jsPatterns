



//   var date = new Date()
//   document.querySelector('p').innerHTML= date;
 

/*------------------------------------US date----------------------------*/
let dt = new Date();
let strDate = dt.toLocaleDateString('en-US');
document.querySelector('.dateUS').innerHTML = strDate;
let opt = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
strDate = dt.toLocaleDateString('en-US', opt);
document.querySelector('.dateUSlong').innerHTML = strDate;
document.querySelector('.us h3.slice').innerHTML = ('0'+(dt.getMonth()+1)).slice(-2)+"/"+ ('0'+dt.getDate()).slice(-2)+"/"+dt.getFullYear();
/*------------------------------------Fr date----------------------------*/

strDate = dt.toLocaleDateString('fr-Fr');
document.querySelector('.dateFr').innerHTML = strDate;
opt = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
strDate = dt.toLocaleDateString('fr-FR', opt);
document.querySelector('.dateFrlong').innerHTML = strDate;
document.querySelector('.fr h3.slice').innerHTML =  ('0'+dt.getDate()).slice(-2)+"/"+('0'+(dt.getMonth()+1)).slice(-2)+"/"+dt.getFullYear();

/*------------------------------------Arabic date----------------------------*/

strDate = dt.toLocaleDateString('ar-EG');
document.querySelector('.dateAr').innerHTML = strDate;
opt = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
strDate = dt.toLocaleDateString('ar-EG', opt);
document.querySelector('.dateArlong').innerHTML = strDate;
document.querySelector('.Ar h3.slice').innerHTML =  ('0'+dt.getDate()).slice(-2)+"/"+('0'+(dt.getMonth()+1)).slice(-2)+"/"+dt.getFullYear();



//  alert('hello !');
