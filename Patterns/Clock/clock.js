

 /*------------------------------------Clock----------------------------*/
window.onload=displayClock();

function refresh() {
    /*refresh in order to synhronize seconds */
    let step = 1000;
    setTimeout('displayClock()', step);
}


function displayClock(){
    let dt = new Date();
    let hour = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    let theTime = hour + ':'  + min + ':' + sec ;
    document.getElementById('clock').innerHTML = theTime;
    refresh();

}


let dt2 = new Date();

 /*------------------------------------Arabic date----------------------------*/
 let strDate = dt2.toLocaleDateString('ar-EG');
 document.querySelector('.dateAr').innerHTML = strDate;
 let opt = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
 strDate = dt2.toLocaleDateString('ar-EG', opt);
 document.querySelector('.dateArlong').innerHTML = strDate;
 document.querySelector('.Ar h3.slice').innerHTML =  ('0'+dt2.getDate()).slice(-2)+"/"+('0'+(dt2.getMonth()+1)).slice(-2)+"/"+dt2.getFullYear();


/*------------------------------------US date----------------------------*/

strDate = dt2.toLocaleDateString('en-US');
document.querySelector('.dateUS').innerHTML = strDate;
opt = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
strDate = dt2.toLocaleDateString('en-US', opt);
document.querySelector('.dateUSlong').innerHTML = strDate;
document.querySelector('.us h3.slice').innerHTML = ('0'+(dt2.getMonth()+1)).slice(-2)+"/"+ ('0'+dt2.getDate()).slice(-2)+"/"+dt2.getFullYear();

/*------------------------------------Fr date----------------------------*/

strDate = dt2.toLocaleDateString('fr-Fr');
document.querySelector('.dateFr').innerHTML = strDate;
opt = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
strDate = dt2.toLocaleDateString('fr-FR', opt);
document.querySelector('.dateFrlong').innerHTML = strDate;
document.querySelector('.fr h3.slice').innerHTML =  ('0'+dt2.getDate()).slice(-2)+"/"+('0'+(dt2.getMonth()+1)).slice(-2)+"/"+dt2.getFullYear();






