function Create() {
  var content = document.getElementById("content").value;
  document.getElementById("show").innerHTML = content;
  document.getElementById("show").style.background = "white";
  document.getElementById("show").style.width = "700px";
  document.getElementById("show").style.height = "100px";

}

function Move() {
  var content = document.getElementById("content").value;
  // document.getElementById("show").style.float = "right";
}

function Change() {
  var number = document.getElementById("content").value.length;
  if (number > 140) {
    document.getElementById("words").innerHTML = `The words are more than 140!`;
    document.getElementById("words").style.color = "red";
  } else {
    document.getElementById("words").innerHTML = `You can still write ${140-number} words`;
  }

  // Change(0);
}

Change();
