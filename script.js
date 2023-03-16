// Tabs
function tab1() {
  document.getElementById('tab2').className = '';
  document.getElementById('tab1').className = 'active';
}

function tab2() {
  document.getElementById('tab1').className = '';
  document.getElementById('tab2').className = 'active';
}

// Term
function wLoad() {
  if (localStorage.getItem("f_data") == undefined) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz@#$%&?>*_-&!+^";
    var string_length = 15;
    var randomstring = "";
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    localStorage.setItem("f_data",randomstring)
  }
}

function handleInput(event) {
    if (event.keyCode === 13) {
      sendCommand(document.getElementById("path").textContent + event.target.value);
      answer(event.target.value)
      event.target.value = '';
    }
  }
  
  function answer(a) {
    if (a == "$help"|a == "help") {
      sendCommand("sana yardımcı olamam")
    }
    if (a == "$cls"|a == "cls") {
      document.querySelector('.messages').innerHTML=""
    }
    if (a == '$file') {
      sendCommand("Hangi dosyayı görmek istersin? ($cd .DosyaAdı)<br>.attack<br>.defense<br>.data")
    }
    if (a.substring(0,20) == '$run A:/User/.attack') {
      sendCommand(a.substring(20))
    }
    if (a == '$cd .attack') {
      document.getElementById("path").innerText = "A:/User/.attack>	";
      sendCommand("Dosya konumuna geçildi 'A:/User/.attack>'")
    }
    if (a == '$cd .defence') {
      document.getElementById("path").innerText = "A:/User/.defence>	";
      sendCommand("Dosya konumuna geçildi 'A:/User/.defence>'")
    }
    if (a == '$cd .data') {
      document.getElementById("path").innerText = "A:/User/.data>	";
      sendCommand("Dosya konumuna geçildi 'A:/User/.data>'")
    }
  }
  
  function sendCommand(inputValue) {
    const newLine = document.createElement('br');
    const commandSpan = document.createElement('span');
    commandSpan.classList.add('command');
    commandSpan.innerHTML = inputValue;
    document.querySelector('.messages').appendChild(newLine);
    document.querySelector('.messages').appendChild(commandSpan);
  }

  