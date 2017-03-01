var data = ["10", "3", "7", "12", "11", "30"];

function init() {
  var btnLI = document.getElementById("leftIn");
  var btnRI = document.getElementById("rightIn");
  var btnLO = document.getElementById("leftOut");
  var btnRO = document.getElementById("rightOut");
  var list = document.getElementById("list");

  btnLI.addEventListener("click", leftIn);
  btnLO.addEventListener("click", leftOut);
  btnRI.addEventListener("click", rightIn);
  btnRO.addEventListener("click", rightOut);

  for (var i = 0; i < data.length; i++) {
    makeLi(data[i]);
  }

}

function makeLi(val) {
  var list = document.getElementById("list");
  var txt = document.createTextNode(val);
  var li = document.createElement("li");
  li.appendChild(txt);
  li.addEventListener("click", liOut);
  list.appendChild(li);
}


function leftIn() {
  var val = document.getElementById("tb").value;
  var list = document.getElementById("list");
  var txt = document.createTextNode(val);
  var li = document.createElement("li");
  li.appendChild(txt);
  li.addEventListener("click", liOut);
  list.insertBefore(li, list.firstChild);

  data.unshift(val);

}

function rightIn() {
  var val = document.getElementById("tb").value;
  makeLi(val);
  data.push(val);
}

function leftOut() {
  var list = document.getElementById("list");
  list.removeChild(list.firstElementChild);
  var num = data.shift();
  alert(num);
}

function rightOut() {
  var list = document.getElementById("list");
  list.removeChild(list.lastElementChild);
  var num = data.pop();
  alert(num);
}

function liOut(event) {
  //var ooo = [];
  var li = event["srcElement"];
  var list = document.getElementById("list");
  var lis = list.querySelectorAll("li");
  var num = -1;
  for (var i = 0; i < lis.length; i++) {
    if (lis[i] == li) {
      num = i;
      break;
    }
  }

  data.splice(num, 1);
  list.removeChild(li);

}






init();