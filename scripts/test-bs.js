const preguntasBS = [
  { texto: "¿Te gustaría trabajar con tecnología y desarrollar habilidades en programación?", area: "informatica" },
  { texto: "¿Te interesa la ciencia y la experimentación en laboratorios?", area: "ciencia" },
  { texto: "¿Te gustaría trabajar con números y analizar datos financieros?", area: "contabilidad" },
  { texto: "¿Te gusta la resolución de problemas y el pensamiento lógico?", area: "informatica" },
  { texto: "¿Te interesa la creación de contenido digital y la comunicación visual?", area: "informatica" },
  { texto: "¿Te gustaría trabajar en equipo y liderar proyectos?", area: "contabilidad" },
  { texto: "¿Te interesa la investigación y el análisis de datos científicos?", area: "ciencia" },
  { texto: "¿Te gustaría desarrollar habilidades en diseño gráfico y multimedia?", area: "informatica" },
  { texto: "¿Te interesa la gestión y la administración de recursos?", area: "contabilidad" },
  { texto: "¿Te gustaría trabajar en un entorno creativo y dinámico?", area: "informatica" }
];

const formularioBS = document.getElementById("form-bs");

preguntasBS.forEach((p, index) => {
  const div = document.createElement("div");
  div.classList.add("pregunta");
  div.innerHTML = `
    <p>${p.texto}</p>
    <div class="opciones">
      <button type="button" onclick="seleccionarBS(${index}, 'Sí', this)">Sí</button>
      <button type="button" onclick="seleccionarBS(${index}, 'No', this)">No</button>
    </div>
  `;
  formularioBS.appendChild(div);
});

let respuestasBS = Array(preguntasBS.length).fill(null);

window.seleccionarBS = function(index, respuesta, btn) {
  respuestasBS[index] = respuesta;
  const botones = btn.parentElement.querySelectorAll("button");
  botones.forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
};

document.getElementById("fin-bs").addEventListener("click", () => {
  if (respuestasBS.includes(null)) {
    alert("Por favor, responde todas las preguntas.");
    return;
  }
  localStorage.setItem("respuestasBS", JSON.stringify(respuestasBS));
  window.location.href = "resultado-basica-superior.html";
});