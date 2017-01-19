setInterval(function() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let h = d.getHours();
  let mins = d.getMinutes();
  let s = d.getSeconds();

  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (s < 10) {
    s = "0" + s;
  }

  console.log(year + ', ' + month + ', ' + date + ', ' + h + ':' + mins + ":" + s);
}, 1000);
