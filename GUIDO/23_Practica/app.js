const contarVotos = [0, 0, 0, 0, 0];
var votos = JSON.parse(localStorage.getItem("votos"));

if (votos) { //existe esta variable en localStorage
  votos.map(voto => {
    contarVotos[voto - 1]++;
  });
} else { //cuando existe crear la variable
  localStorage.setItem("votos", JSON.stringify([]));
}




const data = {
  labels: ['Donato', 'El Mariana', 'Fernanfloo', 'El Rubius', 'Luisito Comunica'],
  datasets: [
    {
      label: 'Dataset 1',
      data: contarVotos,
      backgroundColor: ['yellow', 'lightblue', 'lightpink', 'lightgreen', 'black']
    }
  ]
};

const config = {
  type: 'polarArea',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: ' ¿Que youtuber es mejor?  '
      }
    }
  },
};

const chart = new Chart(document.querySelector("#grafica"), config);

const votar = (equipo) => {
  if (equipo != null) {
    votos = JSON.parse(localStorage.getItem("votos"));
    votos.push(equipo);
    localStorage.setItem("votos", JSON.stringify(votos));
    contarVotos[equipo - 1]++;
  }
  chart.update();
}
