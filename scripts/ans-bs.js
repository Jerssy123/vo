const preguntasBS = [
  { area: "informatica" },
  { area: "informatica" },
  { area: "contabilidad" },
  { area: "informatica" },
  { area: "ciencia" },
  { area: "contabilidad" },
  { area: "contabilidad" },
  { area: "contabilidad" },
  { area: "informatica" },
  { area: "ciencia" }
];

const respuestasBS = JSON.parse(localStorage.getItem("respuestasBS") || "[]");
const conteo = { informatica: 0, contabilidad: 0, ciencia: 0 };

respuestasBS.forEach((r, i) => {
  if (r === "Sí") {
    conteo[preguntasBS[i].area]++;
  }
});

let especialidad = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b);

const info = {
  informatica: {
    nombre: "INFORMÁTICA 💻",
    descripcion: "¡Te encanta la tecnología! En Informática aprenderás sobre computadoras, programación y cómo crear soluciones digitales. Es ideal para quienes disfrutan resolver problemas y crear cosas nuevas usando la tecnología."
  },
  contabilidad: {
    nombre: "CONTABILIDAD 📊",
    descripcion: "¡Eres organizado y detallista! En Contabilidad aprenderás a manejar cuentas, organizar recursos y ayudar a que las empresas funcionen mejor. Es perfecta para quienes disfrutan los números y el orden."
  },
  ciencia: {
    nombre: "CIENCIAS 🔬",
    descripcion: "¡Tienes curiosidad por descubrir el mundo! En Ciencias podrás investigar, experimentar y aprender cómo funcionan las cosas a tu alrededor. Es ideal para quienes aman explorar y hacer preguntas."
  }
};

document.getElementById("resultado-bs").innerText = info[especialidad].nombre;
document.getElementById("descripcion-bs").innerText = info[especialidad].descripcion;

// Botón para ir al apartado de carreras según la especialidad
document.getElementById("btn-carreras-bs").onclick = function() {
  // Redirige a la página de carreras y pasa la especialidad por la URL
  window.location.href = `universidades.html?area=${especialidad}`;
};