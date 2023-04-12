function getJ(num) {
    fetch("app.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector(".wincontent").innerHTML = data[num].code;
        document.querySelector("#win1header").innerHTML = "<i class='icon n-"+ data[num].icon + "' style='margin-right: 16px;'></i>" + data[num].name;
      });
}

function wload() {
    const today = new Date();let h = today.getHours();let m = today.getMinutes();document.getElementById('clock').innerHTML =  h + ':' + m + '<br>' + today.getDate() + '.' + today.getMonth() + '.' + today.getFullYear();
    getJ(0)
}

function cmd() {getJ(0)}

function mail() {getJ(1)}

function edtr() {getJ(2)}

function main() {
    if (document.querySelector(".menu").style.display == "none") {
        document.querySelector(".menu").style.display = "block"
    } else {
        document.querySelector(".menu").style.display = "none"
    }
    
}