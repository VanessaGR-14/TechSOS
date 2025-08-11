function actualizarContenido() {
  const inicio = document.getElementById("inicio");
  const servicio = document.getElementById("servicios");
  const quienesSomos = document.getElementById("quienesSomo");
  const contacto = document.getElementById("contacto");
  const ancho = window.innerWidth;

  if (ancho <= 435) {
    inicio.innerHTML = `<i class="fa-solid fa-house fa-lg" style="color: #ffffff"></i
          >`;
    servicio.innerHTML = `<span class="material-symbols-outlined">
home_repair_service
</span>`;
    quienesSomos.innerHTML = `<i class="fa-solid fa-building fa-lg" style="color: #ffffff;"></i>`;
    contacto.innerHTML = `<i class="fa-solid fa-phone fa-lg" style="color: #ffffff;"></i>`;
  } else {
    inicio.textContent = "Inicio";
    servicio.textContent = "Servicio";
    quienesSomos.textContent = "Nosotros";
    contacto.textContent = "Contáctanos";
  }
}

// Ejecuta al cargar la página
window.addEventListener("load", actualizarContenido);

// Ejecuta cada vez que se cambia el tamaño de la ventana
window.addEventListener("resize", actualizarContenido);
