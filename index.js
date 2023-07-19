var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var flag = false;

function start() {
  flag = true;
  stopwatch();
}

function stop() {
  flag = false;
}

function reset() {
  flag = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (flag == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;

      sec = 0;
    }

    var h = hr;
    var m = min;
    var s = sec;
    var c = count;
    if (hr < 10) {
      h = "0" + h;
    }
    if (min < 10) {
      m = "0" + m;
    }

    if (sec < 10) {
      s = "0" + s;
    }

    if (count < 10) {
      c = "0" + c;
    }

    document.getElementById("hr").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
    document.getElementById("count").innerHTML = c;

    setTimeout("stopwatch()", 10);
  }
}
