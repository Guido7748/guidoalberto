const cambiar = () => {
  var colorFondo = "#";
  var rojo = document.querySelector("#rojo");
  var verde = document.querySelector("#verde");
  var azul = document.querySelector("#azul");
  var r = (rojo.checked) ? "FF" : "00";
  var v = (verde.checked) ? "FF" : "00";
  var a = (azul.checked) ? "FF" : "00";
  colorFondo += r + v + a;
  console.log(colorFondo)
  document.bgColor = colorFondo;
}
