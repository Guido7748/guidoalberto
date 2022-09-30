const comprar=()=>{

    var producto = document.querySelector("#producto").value;
    var cantidad = document.querySelector("#cantidad").value;
    document.querySelector("#vcantidad").innerHTML = cantidad;
    var img = document.querySelector("#imagen");
    var precio = document.querySelector("#precio");
    var costo = 0;
    var plazo = 0;
    var porcentaje = 0;
    img.innerHTML=`<img src="img/${producto}.png" width=240>`;

    switch (producto) {
        case "moto": costo=19999; break;
        case "smarttv": costo=15349; break;
        case "refrigerador": costo=10000; break;
        case "huawei": costo=5560; break;
        case "licuadora": costo=2100; break;
    }

    precio.innerHTML=`<h5>Precio: $${costo.toFixed(2)} MXN </h5>`;

    var uno = document.querySelector("#uno");
    var dos = document.querySelector("#dos");
    var tres = document.querySelector("#tres");

    if (uno.checked) {
        plazo=12;
        porcentaje=0.1;
    }else if (dos.checked) {
        plazo=18;
        porcentaje=0.15;
    }else{
        plazo=24;
        porcentaje=0.2;
    }

    var contado = costo*cantidad;
    document.querySelector("#preciodecontado").innerHTML=`<h5> $${contado.toFixed(2)} MXN </h5>`;
    var credito = contado+(contado*porcentaje);
    document.querySelector("#precioacredito").innerHTML=`<h5> $${credito.toFixed(2)} MXN </h5>`;
    var abono = credito/plazo;
    document.querySelector("#abono").innerHTML=`<h5> $${abono.toFixed(2)} MXN </h5>`;
}
