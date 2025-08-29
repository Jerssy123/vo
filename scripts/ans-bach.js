document.addEventListener("DOMContentLoaded", () => {
  const respuestas = JSON.parse(localStorage.getItem("respuestas") || "[]");

  const indices = {
    informatica: [0, 1, 2, 3, 12],
    contabilidad: [4, 5, 6, 7, 13],
    ciencia: [8, 9, 10, 11, 14]
  };

  let puntajes = { informatica: 0, contabilidad: 0, ciencia: 0 };

  for (let area in indices) {
    indices[area].forEach(i => {
      if (respuestas[i] === "Sí") puntajes[area]++;
    });
  }

  const area = Object.keys(puntajes).reduce((a, b) =>
    puntajes[a] > puntajes[b] ? a : b
  );

  localStorage.setItem("area", area);

  const areaTitulo = {
    informatica: "INFORMÁTICA 💻",
    contabilidad: "CONTABILIDAD 📊",
    ciencia: "CIENCIA 🧪"
  };

  const mensajeHTML = `
    <p class="titulo-fijo">Perteneces al área de:</p>
    <p class="especialidad">${areaTitulo[area]}</p>
    <p class="subtitulo">Elige una carrera</p>
  `;
  document.getElementById("area").innerHTML = mensajeHTML;

  fetch("datos/universidades.json")
    .then(res => res.json())
    .then(data => {
      const carrerasUnicas = [];

      data.forEach(item => {
        if (item.area === area && item.carrera && !carrerasUnicas.includes(item.carrera)) {
          carrerasUnicas.push(item.carrera);
        }
      });

      const contenedorCarreras = document.getElementById("carreras");
      contenedorCarreras.innerHTML = "";

      carrerasUnicas.forEach(carrera => {
        const div = document.createElement("div");
        div.classList.add("carrera-box");
        div.textContent = carrera;

        div.onclick = () => {
          window.location.href = `detalle-carrera.html?carrera=${encodeURIComponent(carrera)}`;
        };

        contenedorCarreras.appendChild(div);
      });
    });
});