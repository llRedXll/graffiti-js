document.querySelector('#sprayCan').addEventListener('click', run)

function run() {
  const userText = document.querySelector('#userText').value
//   let colorMain = document.getElementById("colorMain").value
//   document.getElementById("tag").style.color = colorMain
  document.querySelector('#tag').innerText = userText
}

function checkSubmit(e) {
  if(e && e.keyCode == 13) {
     run()
  }
}

var colorWell;
var defaultColor = "#00ffaa";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  var h2 = document.querySelector("h2");

  if (h2) {
    h2.style.color = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll("h2").forEach(function(h2) {
    h2.style.color = event.target.value;
  });
}

