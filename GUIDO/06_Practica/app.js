var vcounter = 0;
var resul=document.querySelector("#res");

const subir=()=> {
    updateDisplay(++vcounter);
    cambiarColor();
}

const reset=()=> {
    vcounter = 0;
    updateDisplay(vcounter);
    cambiarColor();
}

const bajar=()=> {
    updateDisplay(--vcounter);
    cambiarColor();
}

const updateDisplay=(val)=> {
    document.getElementById("res").innerHTML = val;
}
const cambiarColor=()=>{
  resul.innerHTML=vcounter;
  if (vcounter>0) {
    resul.style.color="green";
  } else if (resul==0) {
    resul.style.color="blue";
  } else {
    resul.style.color="black";
  }
}
