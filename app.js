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
      sendCommand("Hangi dosyayı görmek istersin?<br>.attack<br>.defense<br>.data")
    }
    //run
    if (a.substring(0,4) == '$run') {
      if(a.substring(5)==".attack"){
        sendCommand("Attack başladı")
      } else if(a.substring(5)==".defence") {
        sendCommand("Defence başladı")
      }
    }
    //open
    if (a.substring(0,5) == '$open') {
      if(a.substring(6)==".attack"){
        tab2();
      } else if(a.substring(6)==".defence") {
        tab2();
      } else if(a.substring(6)==".data") {
        tab2();
        document.getElementById("output").innerHTML = localStorage.getItem("f_data");
      } else {sendCommand("bir dosya belirt")} 
    }
    //cd
    if (a.substring(0,3) == '$cd') {
      if(a.substring(4)==".attack"){
        document.getElementById("path").innerText = "A:/User/.attack>	";
        sendCommand("Dosya konumuna geçildi 'A:/User/.attack>'")
      } else if(a.substring(4)==".defence") {
        document.getElementById("path").innerText = "A:/User/.defence>	";
        sendCommand("Dosya konumuna geçildi 'A:/User/.defence>'")
      } else if(a.substring(4)==".data") {
        document.getElementById("path").innerText = "A:/User/.data>	";
        sendCommand("Dosya konumuna geçildi 'A:/User/.data>'")
      } else {sendCommand("bir dosya belirt")}
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