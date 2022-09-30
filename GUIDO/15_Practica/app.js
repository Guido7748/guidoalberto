var res=document.querySelector("#resultado");
const ver=()=>{

	var num=document.querySelector("#numero").value;
	
	var tabla=`<table border id="Holi">
	<tr>
	
	
	<td>$${num/19.92.toFixed(2)} </td> 


`;
res.innerHTML=tabla;

}

const borrar=()=>{
res.innerHTML="";

}
