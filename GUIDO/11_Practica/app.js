const evaluar=()=>{
  
  var respuestas=[3,2,1,3,2];
  var contesto=0;
  var aciertos=0;
  
  for (i=1;i<=5;i++){
    
    var r1=document.querySelector("#p"+i+"r1");
    var r2=document.querySelector("#p"+i+"r2");
    var r3=document.querySelector("#p"+i+"r3");
    
    if(r1.checked||r2.checked||r3.checked){
      contesto++;
    }
    var correcta=document.querySelector("#p"+i+"r"+respuestas[i-1]);
    if (correcta.checked){
      aciertos++;
    }
  }
  if(contesto<5){
    alert("Error");
  }else{
    alert("aciertos:"+aciertos);
  }
}


  
