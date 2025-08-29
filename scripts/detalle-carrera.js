document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const carrera = params.get("carrera");

  document.getElementById("titulo-carrera").innerText = carrera ? carrera : "Carrera no especificada";

  fetch("datos/universidades.json")
    .then(res => res.json())
    .then(data => {
      const resultados = data.filter(u => u.carrera === carrera);
      const cuadroDetalle = document.querySelector(".cuadro-detalle");

      if (resultados.length === 0) {
        cuadroDetalle.innerHTML = `<p style="text-align: center; font-size: 1.5rem;">No hay información disponible para esta carrera.</p>`;
        return;
      }

      const mallaPromedio = resultados.find(u => u.malla)?.malla || null;

      let html = '';

      // Campo ocupacional
      const campoOcupacional = resultados[0].campo || "Información no disponible.";
      html += `<h3 class="subtitulo">Campo Ocupacional</h3>`;
      html += `<div class="section" style="text-align:justify;">
                <p>${campoOcupacional}</p>
              </div>`;

      // Malla curricular promedio
      if (mallaPromedio) {
        html += `<h3 class="subtitulo">Malla Curricular Básica</h3>`;
        html += `<div class="section" style="text-align:center;">`;
        if (Array.isArray(mallaPromedio)) {
          html += `<ul>`;
          mallaPromedio.forEach(asig => {
            html += `<li>${asig}</li>`;
          });
          html += `</ul>`;
        } else {
          html += `<a href="${mallaPromedio}" target="_blank">Ver malla curricular</a>`;
        }
        html += `</div>`;
      }

      // Universidades
      html += `<h3 class="subtitulo">Universidades que ofertan esta carrera</h3>`;
      resultados.forEach(u => {
        html += `<div class="universidad-cuadro">
                  <h3 class="universidad-nombre">${u.universidad || "Universidad no especificada"}</h3>
                  <p class="universidad-puntaje">Puntaje: ${u.puntaje || "(No disponible públicamente)"}</p>
                </div>`;
      });

      cuadroDetalle.innerHTML = html;
    });
});