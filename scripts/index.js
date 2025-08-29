document.getElementById('inic-inicio').addEventListener('click', function() {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('nivel-educativo').style.display = 'flex';
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('bs-nived').addEventListener('click', function() {
    document.getElementById('nivel-educativo').style.display = 'none';
    document.getElementById('test-bs').style.display = 'flex';
  });
  document.getElementById('bach-nived').addEventListener('click', function() {
    document.getElementById('nivel-educativo').style.display = 'none';
    document.getElementById('test-bach').style.display = 'flex';
  });
});