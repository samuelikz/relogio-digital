let profissao = "Desenvolvedor";
let idade = 25;
let numero_residencia = "200";
let esta_em_casa = true;
let esta_milionario = false;
let uma_variavel_indefinida = null;

if (idade === 26) {
    try {
        console.log(idade,"Ainda não")
    } catch (error) {
        console.log(error)
    }
} else {
    idade ++;
}

let numero = "0"

if ( numero ) {

  console.log("Entrou no primeiro bloco (verdadeiro)")

} else {

  console.log("Entrou no segundo bloco (falso)")

} 

let saldo = 200

let valor_do_saque = 250

if ( saldo > 0) {

  console.log("valor_do_saque")

} else { 

  console.log("Saldo insuficiente")

}


const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const regoligo = setInterval(function time(){
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
  
  var dia = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  document.getElementById("header").innerHTML = dia[dateToday.getDay()];
})





