function getJ(num,tab) {
    fetch("app.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#win"+ tab +"content").innerHTML = data[num].code;
        document.querySelector("#win"+ tab +"header").innerHTML = "<i class='icon n-"+ data[num].icon + "' style='margin-right: 16px;' onclick='close("+tab+")'></i>" + data[num].name;
      });
}
function tab(num) {
    document.getElementById("win"+num).style.display="block";
}

function close(num) {
    document.getElementById("win"+num).style.display="none";
}

function wload() {
    const today = new Date();let h = today.getHours();let m = today.getMinutes();document.getElementById('clock').innerHTML =  h + ':' + m + '<br>' + today.getDate() + '.' + today.getMonth() + '.' + today.getFullYear();
    getJ(0,1)
}

function cmd() {tab(1);getJ(0,1)}
function edtr() {tab(2);getJ(2,2)}
function mail() {tab(3);getJ(1,3)}

function main() {
    if (document.querySelector(".menu").style.display == "none") {
        document.querySelector(".menu").style.display = "block"
    } else {
        document.querySelector(".menu").style.display = "none"
    }
    
}