function init(){
//add your javascrip between these two lines of code

  function clickAlertMe(){
    var text = document.getElementById("entryinput").value;
    alert("Harrison Loh: " + text);
    document.getElementById("textoutput").innerHTML = text
  }
  var entrybtn = document.getElementById("entrybutton");
  entrybtn.addEventListener('click',clickAlertMe);
  
}
window.addEventListener('load', init);