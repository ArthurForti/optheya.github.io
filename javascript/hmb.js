document.getElementById("hmb_initial").style.display = "block";
document.getElementById("hmb_middle").style.display = "none";
document.getElementById("hmb_final").style.display = "none";

document.getElementById("hmb_initial").onmouseenter = function() {
  console.log("enter");
  document.getElementById("hmb_initial").style.display = "none"
  document.getElementById("hmb_middle").style.display = "block"
}

document.getElementById("hmb_middle").onmouseover = function() {
  
  setTimeout(function myGreeting() {
    console.log("over");
    document.getElementById("hmb_middle").style.display = "none"
    document.getElementById("hmb_final").style.display = "block"
  }, 100);
}

document.getElementById("hmb_final").onmouseout = function() {
  console.log("out");
  document.getElementById("hmb_final").style.display = "none"
  document.getElementById("hmb_initial").style.display = "block"
}