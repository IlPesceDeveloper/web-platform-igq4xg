function bulbon(){
  document.getElementById("logoHint").src="https://i.ibb.co/F3872h2/light-bulb.png";
}

function bulboff(){
  document.getElementById("logoHint").src="https://i.ibb.co/NxWkCW6/light-bulb-1.png";
}

function ics(f){
  if(f==0){
    document.getElementById("btnIcs").src="https://i.ibb.co/jG9LfXS/close.png";
  }else if(f==1){
    document.getElementById("btnIcs").src="https://i.ibb.co/7CKsbrf/close.png";
  }
}

function removeOverlay(){
  document.getElementById("overlay").style.visibility="collapse";
}