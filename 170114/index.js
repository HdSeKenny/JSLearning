function Create(){
	var content = document.getElementById("content").value;
	document.getElementById("show").innerHTML = content;
	document.getElementById("show").style.background = "#fff";
  document.getElementById("show").style.padding = "20px";
}

function Move() {
	var content = document.getElementById("show").value;
	document.getElementById("show").style.float= "right";
}

function Change() {
   var length = document.getElementById("content").value.length;
   var number = 140 - length;
   if (number < 0) {
      document.getElementById("words").innerHTML = `You can't write over ${140} words`;
      document.getElementById("words").style.color = "red";
   }
   else {
      document.getElementById("words").innerHTML = `You can still write ${number} words`;
   }
}

function test() {
  document.getElementById("words").innerHTML = `You can still write ${140} words`;
}

test();