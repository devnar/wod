function handleInput(event) {
    if (event.keyCode === 13) {
      sendCommand(document.getElementById("path").textContent + event.target.value);
      answer(event.target.value)
      event.target.value = '';
    }
  }
  
  function answer(a) {
    if (a == "$help"|a == "help") {
      sendCommand("$tree<br>$cls<br>$cd => open")
    }
    if (a == "$cls") {
      document.querySelector('.messages').innerHTML=""
    }
    if (a == "$tree") {
      sendCommand("PC<br>├───.data<br>├───.attack<br>└───.defence")
    }
    //cd
    if (a.substring(0,3) == '$cd') {
      if(a.substring(4)==".attack"){
        document.getElementById("path").innerText = "A:/User/.attack>	";
      } else if(a.substring(4)==".defence") {
        document.getElementById("path").innerText = "A:/User/.defence>	";
      } else if(a.substring(4)==".data") {
        document.getElementById("path").innerText = "A:/User/.data>	";
      } else {sendCommand("Sistem belirtilen yolu bulamıyor.")}
    }

    //open
    if (a == "open" && document.getElementById("path").innerText == "A:/User/.data>") {
      tab(2);getJ(2,2);sendCommand("data editor'de açılıyor");
      document.getElementById("path").innerText = "A:/User>	";
    } else if (a == "open" && document.getElementById("path").innerText == "A:/User/.defence>") {
      tab(2);getJ(2,2);sendCommand("defence editor'de açılıyor");
      document.getElementById("path").innerText = "A:/User>	";
    } else if (a == "open" && document.getElementById("path").innerText == "A:/User/.attack>") {
      tab(2);getJ(2,2);sendCommand("attack editor'de açılıyor");
      document.getElementById("path").innerText = "A:/User>	";
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