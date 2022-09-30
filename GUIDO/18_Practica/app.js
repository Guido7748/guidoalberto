const convertir=()=>{
  var valor=parseInt(document.querySelector("#valor").value);
 document.querySelector("#spd").innerHTML=valor;
  var de=document.querySelector("#de").value;
  var a=document.querySelector("#a").value;
  var valorDe=document.querySelector("#d").innerHTML=valor;
  var valorres=document.querySelector("#res");
  var res=0;
  if(de==1&& a==2){
    res=(valor*9/5)+32;
  }else if(de==1&& a==3){
    res=(valor+273.15);
  }else if(de==2 && a==1){
    res=(valor-32)* (5/9);
  }else if(de==2 && a==3){
    res=(valor-32)* (5/9) + 273.15;
  }else if(de==3 && a==2){
    res=(valor-273.15)* (9/5)+32;
  }else if(de==3 && a==1){
    res=(valor-273.15);
  }else{
    res=valor;
    
  }
  valorres.innerHTML=res.toFixed(2);
}
