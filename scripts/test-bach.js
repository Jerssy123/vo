const preguntas = [
  { texto: "¿Te interesa el análisis de datos y la búsqueda de patrones y tendencias?", area: "informatica" },
  { texto: "¿Te interesa la tecnología y su aplicación en diferentes campos?", area: "informatica" },
  { texto: "¿Te interesa la precisión y la exactitud en el trabajo?", area: "contabilidad" },
  { texto: "¿Te interesa la resolución de problemas y la búsqueda de soluciones efectivas?", area: "informatica" },
  { texto: "¿Te interesa la investigación y el desarrollo de nuevas ideas y productos?", area: "ciencia" },
  { texto: "¿Te interesa la organización y la planificación de proyectos y tareas?", area: "contabilidad" },
  { texto: "¿Te interesa la colaboración y el trabajo en equipo para lograr objetivos comunes?", area: "contabilidad" },
  { texto: "¿Te interesa la mejora continua y la búsqueda de la excelencia en el trabajo?", area: "contabilidad" },
  { texto: "¿Te interesa la creación de soluciones innovadoras y creativas?", area: "informatica" },
  { texto: "¿Te interesa la aplicación de conocimientos y habilidades en diferentes contextos?", area: "ciencia" }
];

const formulario = document.getElementById("form-bach");

preguntas.forEach((p, index) => {
  const div = document.createElement("div");
  div.classList.add("pregunta");
  div.innerHTML = `
    <p>${p.texto}</p>
    <div class="opciones">
      <button type="button" onclick="seleccionar(${index}, 'Sí', this)">Sí</button>
      <button type="button" onclick="seleccionar(${index}, 'No', this)">No</button>
    </div>
  `;
  formulario.appendChild(div);
});

let respuestas = Array(preguntas.length).fill(null);

function seleccionar(index, respuesta, btn) {
  respuestas[index] = respuesta;

  const botones = btn.parentElement.querySelectorAll("button");
  botones.forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

document.getElementById("fin-bach").addEventListener("click", () => {
  if (respuestas.includes(null)) {
    alert("Por favor, responde todas las preguntas.");
    return;
  }

  localStorage.setItem("respuestas", JSON.stringify(respuestas));
  window.location.href = "resultado.html";
});