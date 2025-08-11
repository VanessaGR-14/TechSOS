document.addEventListener("DOMContentLoaded", () => {
  const enlace = document.getElementById("numeroWs");
  enlace.addEventListener("click", (e) => {
    if (!confirm("¿Quieres hablar con uno de nuestros técnicos?")) {
      e.preventDefault();
    }
  });
});
