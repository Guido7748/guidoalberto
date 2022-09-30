const calcular = () => {
    var p = document.querySelector("#peso").value;
    var a = document.querySelector("#altura").value;
    var imc = document.querySelector("#imc");
    var condicion = document.querySelector("#condicion");

    document.querySelector("#vpeso").innerHTML = p;
    document.querySelector("#valtura").innerHTML = a;

    var ope = p/(a*a);
    imc.innerHTML= "IMC: "+ope.toFixed(2);

     if (ope<18.0) {         
         condicion.innerHTML="INFRAPESO";
         imc.style.backgroundColor="#CEDAFF";
         condicion.style.backgroundColor="#CEDAFF";
     } else if (ope>=18.5 && ope<25){
        condicion.innerHTML="NORMAL";
        imc.style.backgroundColor="#9CFC00";
        condicion.style.backgroundColor="#9CFC00";
     }else if (ope>=25 && ope<30){
        condicion.innerHTML="SOBREPESO";
        imc.style.backgroundColor="#FFFF00";
        condicion.style.backgroundColor="#FFFF00";
     }else if (ope>=30 && ope<35){
        condicion.innerHTML="OBESIDAD I";
        imc.style.backgroundColor="#FFDA00";
        condicion.style.backgroundColor="#FFDA00";
     }else if (ope>=35 && ope<40){
        condicion.innerHTML="OBESIDAD II";
        imc.style.backgroundColor="#FF6900";
        condicion.style.backgroundColor="#FF6900";
     }else if (ope>=40){
        condicion.innerHTML="OBESIDAD III";
        imc.style.backgroundColor="#ED1409";
        condicion.style.backgroundColor="#ED1409";
     }
}
