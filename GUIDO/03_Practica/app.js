var res=document.querySelector("#resultado");
const ver=()=>{
	var num=document.querySelector("#numero").value;
	var tabla=`<table border>
				<tr>
				<td>${num}</td>
				<td>x</td>
				<td>1</td>
				<td>=</td>
				<td>${num*1}</td>
				</tr>
				
				<tr>
				<td>${num}</td>
				<td>x</td>
				<td>2</td>
				<td>=</td>
				<td>${num*2}</td>
				</tr>
				

				<tr>
				<td>${num}</td>
				<td>x</td>
				<td>3</td>
				<td>=</td>
				<td>${num*3}</td>
				</tr>

				<tr>
				<td>${num}</td>
				<td>x</td>
				<td>4</td>
				<td>=</td>
				<td>${num*4}</td>
				</tr>

								<tr>
				<td>${num}</td>
				<td>x</td>
				<td>5</td>
				<td>=</td>
				<td>${num*5}</td>
				</tr>

								<tr>
				<td>${num}</td>
				<td>x</td>
				<td>6</td>
				<td>=</td>
				<td>${num*6}</td>
				</tr>

								<tr>
				<td>${num}</td>
				<td>x</td>
				<td>7</td>
				<td>=</td>
				<td>${num*7}</td>
				</tr>

				<tr>
				<td>${num}</td>
				<td>x</td>
				<td>8</td>
				<td>=</td>
				<td>${num*8}</td>
				</tr>

								<tr>
				<td>${num}</td>
				<td>x</td>
				<td>9</td>
				<td>=</td>
				<td>${num*9}</td>
				</tr>

								<tr>
				<td>${num}</td>
				<td>x</td>
				<td>10</td>
				<td>=</td>
				<td>${num*10}</td>
				</tr>
				</table>
				`;
res.innerHTML=tabla;
}

const borrar=()=>{
	res.innerHTML="";

}