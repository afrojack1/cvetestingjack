function iniciarPoC() {
  const container = document.createElement('div');
  container.className = 'crash';
  document.body.appendChild(container);

  for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    div.innerText = 'Prueba de vulnerabilidad en WebKit';
    container.appendChild(div);
  }
}
