const visualizarCitas = () => {
  let citashtml = ``;
  let citas = JSON.parse(localStorage.getItem("citas"));
  citas.map(cita => {
    citashtml += `<div class="cita">
   <p>Mascota:<span>${cita.mascota}</span></p>
   <p>Propietario:<span>${cita.propietario}</span></p>
    <p>Fecha:<span>${cita.fecha}</span></p>
    <p>Hora:<span>${cita.hora}</span></p>
    <p>Sintomas:<span>${cita.sintomas}</span></p>
    <p>Sucursal:<span>${cita.sucursal}</span></p>
   
  <button 
  class="button eliminar u-full-width"
  onclick="eliminarCitas('${cita.id}')">Eliminar
  Cita</button>
  
   </div>`;
  document.querySelector("#listadoCitas").innerHTML = citashtml;
  })
}
var citas=JSON.parse(localStorage.getItem("citas"));
if(citas){
  localStorage.setItem("citas",JSON.stringify(citas));
  
}else{
  localStorage.setItem("citas",JSON.stringify([]));
}




const agregarCita=()=>{
  let id=uuid.v1();
  let mascota=document.querySelector("#mascota").value;
  
  let propietario=document.querySelector("#propietario").value;
  
  let fecha=document.querySelector("#fecha").value;
  
  let hora=document.querySelector("#hora").value;
  
  let sintomas=document.querySelector("#sintomas").value;
    let sucursal=document.querySelector("#sucursal").value;
  
  if(mascota.trim()===''||
  propietario.trim()===''||
  fecha.trim()===''||
  hora.trim()===''||
  sintomas.trim()===''||
 sucursal.trim()==='' ){
    
    swal.fire("ERROR");
    return;
  }
  let nuevaCita={id,mascota,propietario,fecha,hora,sintomas, sucursal};
  
  citas.push(nuevaCita);
  localStorage.setItem("citas",JSON.stringify(citas));
  limpiarCampos();
  visualizarCitas();
}


const limpiarCampos=()=>{
  document.querySelector("#mascota").value="";
  document.querySelector("#propietario").value="";
  document.querySelector("#fecha").value="";
  document.querySelector("#hora").value="";
  document.querySelector("#sintomas").value="";
  document.querySelector("#sucursal").value="";
} 


const eliminarCitas=(idCita)=>{
  Swal.fire({
    title:'Estas seguro de Eliminar cita?',
    showDenyButton:true,
    confirmButtonText:'SI',
    donyButtonText:'NO',
    
  }).then((result)=>{
    if(result.isConfirmed){
      let citas = JSON.parse(localStorage.getItem("citas"));
      const nuevascitas = citas.filter(cita => cita.id !== idcita);
      localStorage.setItem("citas", JSON.stringify(nuevascitas));
      visualizarCitas();
    }
  });
}
