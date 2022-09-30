var div = document.querySelector("#resultado");
const cambiar = () => {
  var num = document.querySelector("#numero").value;
  document.querySelector("#vnumero").innerHTML = num;
  div.innerHTML = "";
  div.innerHTML = "<img src='spiner.gif' width='200px' height='200px'>";
  num = parseInt(num);
  var potencia = Math.pow(num, 2);
  setTimeout(() => {
    div.innerHTML = potencia;
  }, 3000);
}