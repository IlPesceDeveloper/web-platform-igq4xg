console.log('hello!');


var testo = "Benvenuto a Vimyli (VIdeogame is MY LIfe), in questo luogo potrai sfidare il più grande nemico dell'umanità... La tua memoria videoludica";
var output = "";
var i = 0;
var speed = 30;
function scrivi() {
  output += testo.charAt(i);
  i++;
  document.getElementById("parole").innerHTML = output;
  if(i >= testo.length) {
      clearInterval(s);
  }
}
var testo2 = "Inoltre potrai leggere diverse trame. Lo studio è importantissimo.";
var output2 = "";
var i2 = 0;
var speed2 = 30;
function scrivi2() {
  output2 += testo2.charAt(i2);
  i2++;
  document.getElementById("parole2").innerHTML = output2;
  if(i >= testo2.length) {
      clearInterval(s2);
  }
}
function say(n){
  if(n==0){
    document.getElementById("parole").style.visibility="visible";
    s = setInterval("scrivi()",speed);
    
  }else if(n==1){
    document.getElementById("parole").style.visibility="collapse";
    clearInterval(s);
    output="";
    i=0;
  }
}
function sayt(n){
  if(n==0){
    document.getElementById("parole2").style.visibility="visible";
    s2 = setInterval("scrivi2()",speed2);
    
  }else if(n==1){
    document.getElementById("parole2").style.visibility="collapse";
    clearInterval(s2);
    output2="";
    i2=0;
  }
}