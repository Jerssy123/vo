document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  let area = params.get("area");
  if (!area) area = localStorage.getItem("area");

  const areaTitulo = {
    informatica: "INFORMÁTICA 💻",
    contabilidad: "CONTABILIDAD 📊",
    ciencia: "CIENCIA 🧪"
  };

  const areaContainer = document.getElementById("area");
  areaContainer.innerHTML = `<p class="titulo-fijo">Carreras Universitarias de:</p>`;

  // Especialidad
  const especialidadP = document.createElement("p");
  especialidadP.classList.add("especialidad");
  especialidadP.textContent = area && areaTitulo[area] ? areaTitulo[area] : "Área disponible";
  areaContainer.appendChild(especialidadP);

  // Texto "Elige una carrera"
  const eligeCarrera = document.createElement("p");
  eligeCarrera.classList.add("elige-carrera"); 
  eligeCarrera.textContent = "Elige una carrera";
  areaContainer.appendChild(eligeCarrera);

  // Cargar carreras desde JSON
  fetch("datos/universidades.json")
    .then(res => res.json())
    .then(data => {
      const carrerasUnicas = [];
      data.forEach(item => {
        if ((!area || item.area === area) && item.carrera && !carrerasUnicas.includes(item.carrera)) {
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

      if (area) {
        setTimeout(() => {
          contenedorCarreras.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    });
});