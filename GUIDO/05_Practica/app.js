const uwu = () => {
  var color1 = document.querySelector("#color1").value;
  var color2 = document.querySelector("#color2").value;
  var f = document.querySelector("#fil").value;
  var c = document.querySelector("#col").value
  var tabla = document.querySelector("#tabla");
  document.querySelector("#vfil").innerHTML = f;
  document.querySelector("#vcol").innerHTML = c;
  var x = 1;
  var tablaHTML = "<table border>";
  for (i = 1; i < f; i++) {
    tablaHTML += (i % 2 == 0) ? "<tr style='background:" + color2 + "'>" : "<tr style='background:" + color1 + "'>";
    for (j = 0; j < c; j++) {
      tablaHTML += "<td>" + x + "</td>";
      x++;
    }
    tablaHTML += "</tr>";
  }
  tablaHTML += "</table>";
  tabla.innerHTML = tablaHTML;
  //console.log("Filas:"+f);
  //console.log("Columnas:"+c);
}
