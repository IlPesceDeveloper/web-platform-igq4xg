function bulbon() {
  document.getElementById('logoHint').src =
    'https://i.ibb.co/F3872h2/light-bulb.png';
}

function bulboff() {
  document.getElementById('logoHint').src =
    'https://i.ibb.co/xDFpK98/light-bulb-1.png';
}

function ics(f) {
  if (f == 0) {
    document.getElementById('btnIcs').src =
      'https://i.ibb.co/jG9LfXS/close.png';
  } else if (f == 1) {
    document.getElementById('btnIcs').src =
      'https://i.ibb.co/7CKsbrf/close.png';
  }
}

let cookie;

function overlaycheck() {
  cookie = leggiCookie('overlay');
  if (cookie == 'no') {
    document.getElementById('overlay').style.visibility = 'collapse';
  }
}

function leggiCookie(nomeCookie) {
  if (document.cookie.length > 0) {
    var inizio = document.cookie.indexOf(nomeCookie + '=');
    if (inizio != -1) {
      inizio = inizio + nomeCookie.length + 1;
      var fine = document.cookie.indexOf(';', inizio);
      if (fine == -1) fine = document.cookie.length;
      return unescape(document.cookie.substring(inizio, fine));
    } else {
      return '';
    }
  }
  return '';
}

function removeOverlay() {
  document.cookie = "overlay=no";
  document.getElementById('overlay').style.visibility = 'collapse';
}

function inviaRisp(){
  let risposta=document.getElementById("risposta").value.toLowerCase().replace(/ /g, "");
  let ndomanda=parseInt(document.getElementById("ndomanda").innerHTML);
  switch(ndomanda){
    case 1:
      if(risposta=="alduin"){
        ndomanda++;
        document.getElementById("ndomanda").innerHTML=ndomanda;
        document.getElementById("domandah1").innerHTML="in quale luogo vivono i barbagrigia";
      }
  }
}
