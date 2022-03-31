
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    document.querySelector('.curLat').innerHTML = `Latitude : ${crd.latitude}`;
    document.querySelector('.curLong').innerHTML = `Longitude : ${crd.longitude}`;
    document.querySelector('.accur').innerHTML = `The accuracy is \u2248 ${crd.accuracy} meters`;
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  