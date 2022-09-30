const colorear=()=>{
    var rojo=document.querySelector("#color-rojo").value;
    var azul=document.querySelector("#color-verde").value;
    var verde=document.querySelector("#color-azul").value;
    var res=document.querySelector("#resultado");

    document.querySelector("#vROJO").innerHTML=rojo;
    document.querySelector("#vVERDE").innerHTML=verde;
    document.querySelector("#vAZUL").innerHTML=azul;


    res.style.backgroundColor="rgb("+rojo+","+verde+","+azul+")";
}