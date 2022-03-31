




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

/*------------------------------------Fr date----------------------------*/
let dt = new Date();
let strDate = dt.toLocaleDateString('fr-Fr');
document.querySelector('.dateFr').innerHTML = strDate;
opt = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
strDate = dt.toLocaleDateString('fr-FR', opt);
document.querySelector('.dateFrlong').innerHTML = strDate;
document.querySelector('.fr h3.slice').innerHTML =  ('0'+dt.getDate()).slice(-2)+"/"+('0'+(dt.getMonth()+1)).slice(-2)+"/"+dt.getFullYear();

/*------------------------------------US date----------------------------*/

strDate = dt.toLocaleDateString('en-US');
document.querySelector('.dateUS').innerHTML = strDate;
opt = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
strDate = dt.toLocaleDateString('en-US', opt);
document.querySelector('.dateUSlong').innerHTML = strDate;
document.querySelector('.us h3.slice').innerHTML = ('0'+(dt.getMonth()+1)).slice(-2)+"/"+ ('0'+dt.getDate()).slice(-2)+"/"+dt.getFullYear();


