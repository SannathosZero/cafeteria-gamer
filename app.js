// app.js mejorado

// Funcionalidad de clic para desplegar el submenú con transiciones suaves
const categorias = document.querySelectorAll('.categoria-title');

categorias.forEach(categoria => {
  categoria.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace recargue la página
    
    const submenu = this.nextElementSibling;
    const isVisible = submenu.classList.contains('visible');
    
    document.querySelectorAll('.submenu').forEach(sub => {
      sub.classList.remove('visible');
    });
    
    if (!isVisible) {
      submenu.classList.add('visible');
    }
  });
});
