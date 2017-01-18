function setInitialText(number) {
  document.getElementById('demo').innerHTML = `You can also write ${140 - number} words`;
}

function onTestChange() {
   var value = document.getElementById('name').value;
   setInitialText(value.length);
}

setInitialText(0);