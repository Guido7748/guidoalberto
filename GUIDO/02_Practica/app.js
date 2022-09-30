const sumar = () => {
  var op = "SUMA";
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;

  var res = parseInt(num1) + parseInt(num2);

  document.querySelector("#resultado").innerHTML = res;
  document.querySelector("#operacion").innerHTML = op;
};

const restar = () => {
  var op = "RESTA";
  var num1 = document.querySelector("#num1").value;
  var num2 = document.querySelector("#num2").value;

  var ope = num1 - num2;

  document.querySelector("#resultado").innerHTML = ope;
  document.querySelector("#operacion").innerHTML = op;
};

const multiplicar = () => {
  var op = "MULTIPLICACION";
  var num1 = document.querySelector("#num1").value;
  var num2 = document.querySelector("#num2").value;

  var ope = num1 * num2;

  document.querySelector("#resultado").innerHTML = ope;
  document.querySelector("#operacion").innerHTML = op;
};

const dividir = () => {
  var op = "DIVICION";
  var num1 = document.querySelector("#num1").value;
  var num2 = document.querySelector("#num2").value;

  var ope = num1 / num2;

  document.querySelector("#resultado").innerHTML = ope;
  document.querySelector("#operacion").innerHTML = op;
};
