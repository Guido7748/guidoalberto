const cambiar = () => {
    var dia = document.querySelector("#dia").value;
    var mes = document.querySelector("#mes").value;
    var signo = document.querySelector("#signo");

    var imagen = "";

    switch (mes) {
        case "Enero":
            if (dia<=20) {
                imagen="capricornio.jpg";
            } else {
                imagen="acuario.jpg";
            }
            break;
        case "Febrero":
            if (dia<=19) {
                imagen="acuario.jpg";
            } else {
                imagen="piscis.jpg";
            }
            break;
        case "Marzo":
            if (dia<=20) {
                imagen="piscis.jpg";
            } else {
                imagen="aries.jpg";
            }
            break;
        case "Abril":
            if (dia<=20) {
                imagen="aries.jpg";
            } else {
                imagen="tauro.jpg";
            }
            break;
        case "Mayo":
            if (dia<=20) {
                imagen="tauro.jpg";
            } else {
                imagen="geminis.jpg";
            }
            break;
        case "Junio":
            if (dia<=20) {
                imagen="geminis.jpg";
            } else {
                imagen="cancer.jpg";
            }
            break;
        case "Julio":
            if (dia<=20) {
                imagen="cancer.jpg";
            } else {
                imagen="leo.jpg";
            }
            break;
        case "Agosto":
            if (dia<=21) {
                imagen="leo.jpg";
            } else {
                imagen="virgo.jpg";
            }
            break;
        case "Septiembre":
            if (dia<=20) {
                imagen="virgo.jpg";
            } else {
                imagen="libra.jpg";
            }
            break;
        case "Octubre":
            if (dia<=20) {
                imagen="libra.jpg";
            } else {
                imagen="escorpion.jpg";
            }
            break;
        case "Noviembre":
            if (dia<=21) {
                imagen="escorpion.jpg";
            } else {
                imagen="sagitario.jpg";
            }
            break;
        case "Diciembre":
            if (dia<=21) {
                imagen="sagitario.jpg";
            } else {
                imagen="capricornio.jpg";
            }
            break;
    }
    signo.innerHTML=`<img src='img/${imagen}' width=500 height=314>`;
};
