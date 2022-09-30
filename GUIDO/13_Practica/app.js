const cargar = () => {
  var a = document.querySelector(".a").value;
  var b = document.querySelector(".b").value;
  var c = document.querySelector(".c").value;
  document.querySelector(".va").innerHTML = a;
  document.querySelector(".vb").innerHTML = b;
  document.querySelector(".vc").innerHTML = c;
  
  r=(b*b)-(4*a*c);
  ope1= (-b-Math.sqrt(r))/(2*a);
  ope2= (-b+Math.sqrt(r))/(2*a);
  
  document.querySelector(".resx1").innerHTML = ope1;
  
  document.querySelector(".resx2").innerHTML = ope2;
}
