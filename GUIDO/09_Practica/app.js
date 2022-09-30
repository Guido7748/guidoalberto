var numPizza = 0;
var costoPizza = 0;
var extra = 0;

const numeroPizza = () => {
  var np = parseInt(document.querySelector("#np").value);
  document.querySelector("#vnp").innerHTML = np;
  numPizza = np;
  calcularTotal();
}

const tamanio = () => {
  costoPizza = 0;
  var chica = document.querySelector("#chica");
  var mediana = document.querySelector("#mediana");
  var grande = document.querySelector("#grande");
  var familiar = document.querySelector("#familiar");
  var jumbo = document.querySelector("#jumbo");
  if (chica.checked) {
    costoPizza = 80;
  }
  if (mediana.checked) {
    costoPizza = 110;
  }

  if (grande.checked) {
    costoPizza = 130;
  }

  if (familiar.checked) {
    costoPizza = 150;
  }

  if (jumbo.checked) {
    costoPizza = 170;
  }


  calcularTotal();
}

const extras = () => {
  extra = 0;
  var papas = document.querySelector("#papas");
  var alitas = document.querySelector("#alitas");
  var refresco = document.querySelector("#refresco");
  var espagueti = document.querySelector("#espagueti");
  if (papas.checked) {
    extra += 50;
  }
  if (alitas.checked) {
    extra += 70;
  }
  if (refresco.checked) {
    extra += 30;
  }
  if (espagueti.checked) {
    extra += 60;
  }

  calcularTotal();
}

const calcularTotal = () => {
  console.log("costo " + costoPizza + " x " + numPizza)
  var total = (numPizza * costoPizza) + extra;
  document.querySelector("#resultado").innerHTML = "TOTAL $" + total;
}
