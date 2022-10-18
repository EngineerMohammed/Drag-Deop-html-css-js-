let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let boxs = document.querySelectorAll(".box");
let drag = null;


window.onload = function () {
  window.localStorage.getItem("pargh");
}
btn.onclick = function () {
  if (inp.value != "") {
    let pargh = document.createElement("p");
    pargh.className = "item";
    let textP = document.createTextNode(inp.value);
    pargh.setAttribute("draggable", "true");
    pargh.appendChild(textP);
    boxs[0].appendChild(pargh);
    
    inp.value = "";
  }
  dragitem();
};

function dragitem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });
    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "#090";
        this.style.color = "#fff";
      });
      box.addEventListener("dragleave", function () {
        this.style.background = "#fff";
        this.style.color = "#000";
      });
      box.addEventListener("drop", function () {
        box.append(drag);
        this.style.background = "#fff";
        this.style.color = "#000";
      });
    });
  });
}
