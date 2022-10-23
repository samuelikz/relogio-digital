const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
  let dateToday = new Date();

  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if(hr <= 9 ) hr = "0" + hr;
  if(min <= 9) min = "0" + min;
  if(s <= 9) s = "0" + s;


  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
  
  let dia = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  document.getElementById("header").innerHTML = dia[dateToday.getDay()]+",";
})
