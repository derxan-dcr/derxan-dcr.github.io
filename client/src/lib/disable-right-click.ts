export function disableRightClick() {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const alert = document.createElement('div');
    alert.className = 'fixed top-4 right-4 bg-black/80 text-white px-4 py-2 rounded animate-in fade-in duration-300 z-50';
    alert.textContent = '¡Contenido Protegido!';
    document.body.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 2000);
  });
}
