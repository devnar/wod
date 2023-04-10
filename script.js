function wload() {
    const today = new Date();let h = today.getHours();let m = today.getMinutes();document.getElementById('clock').innerHTML =  h + ':' + m + '<br>' + today.getDate() + '.' + today.getMonth() + '.' + today.getFullYear();
    document.querySelector("#win1header").innerHTML = "<i class='icon n-terminal' style='margin-right: 16px;'></i>Terminal";
    document.querySelector(".wincontent").innerHTML = "<div class='terminal'><div class='content'> <p class='command'>I'm not Hacker [V2.1]</p><br><div class='messages'></div><br><table> <tr> <td><span id='path' style='cursor:default;'>A:\User> </span></td><td width='100%'><input type='text' class='input-box' onkeydown='handleInput(event)'></td></tr></table> </div></div>";
}

function cmd() {
    document.querySelector("#win1header").innerHTML = "<i class='icon n-terminal' style='margin-right: 16px;'></i>Terminal";
    document.querySelector(".wincontent").innerHTML = "<div class='terminal'><div class='content'> <p class='command'>I'm not Hacker [V2.1]</p><br><div class='messages'></div><br><table> <tr> <td><span id='path' style='cursor:default;'>A:\User> </span></td><td width='100%'><input type='text' class='input-box' onkeydown='handleInput(event)'></td></tr></table> </div></div>";
}
function mail() {
    document.querySelector("#win1header").innerHTML = "<i class='icon n-envelope' style='margin-right: 16px;'></i>E-posta";
    document.querySelector(".wincontent").innerHTML = "Yakında";
}
function edtr() {
    document.querySelector("#win1header").innerHTML = "<i class='icon n-edit' style='margin-right: 16px;'></i>Editor";
    document.querySelector(".wincontent").innerHTML = "Yakında";
}

function main() {
    if (document.querySelector(".menu").style.display == "none") {
        document.querySelector(".menu").style.display = "block"
    } else {
        document.querySelector(".menu").style.display = "none"
    }
    
}