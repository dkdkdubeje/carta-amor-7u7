const heart = document.getElementById('heart');
const envelope = document.getElementById('envelope');
const paper = document.querySelector('.paper');
const flap = document.querySelector('.flap');

let opened = false;
document.body.style.overflow = 'hidden';

window.addEventListener('click', () => {
  if (opened) return;
  opened = true;

  // ❤️ late y cae
  heart.classList.remove('beat');
  heart.classList.add('drop');

  // Abrir flap y subir papel
  setTimeout(() => {
    flap.style.transform = 'rotateX(180deg)';
    flap.style.zIndex = '3'; // mantener por encima
    paper.style.zIndex = '2';
    paper.style.transform = 'translateY(-90%)';
  }, 500);

  // Una vez abierto, manda flap atrás
  setTimeout(() => {
    flap.style.zIndex = '1';
  }, 1500);

  // Fade-out y redirección rápida
  setTimeout(() => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'carta.html';
    }, 300);
  }, 2000);
});
