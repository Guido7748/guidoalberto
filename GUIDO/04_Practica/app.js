const dibujar=()=>{ 	
	var res=document.querySelector("#resultado");
	var tipo=document.querySelector("#tipo").value;
	var color=document.querySelector("#color").value;
	var colorborde=document.querySelector("#colorborde").value;	
	var figura=document.querySelector("#figura");
	var ancho=document.querySelector("#ancho").value;
	var alto=document.querySelector("#alto").value;
	var tipoborde=document.querySelector("#tipoborde").value;
	var anchoborde=document.querySelector("#anchoborde").value;
	document.querySelector("#vanchoborde").innerHTML=anchoborde;
	document.querySelector("#vancho").innerHTML=ancho;
	document.querySelector("#valto").innerHTML=alto;
	figura.className=tipo;
	figura.style.backgroundColor=color;
	figura.style.width=ancho+"px";
	figura.style.height=alto+"px";
	figura.style.borderStyle=tipoborde;
	figura.style.borderColor=colorborde;
	figura.style.borderWidth=anchoborde+"px";
	
}