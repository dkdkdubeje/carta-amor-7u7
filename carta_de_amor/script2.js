const playBtn = document.getElementById('playMusicBtn');
const mySong = document.getElementById('mySong');

// Estado para evitar varios clics bloqueando Safari
let audioInitialized = false;

playBtn.addEventListener('click', () => {
  if (!audioInitialized) {
    // Intenta tocar el audio una vez para desbloquear iOS
    mySong.play().catch(() => {
      console.log("Necesita interacción real en iOS");
    });
    audioInitialized = true;
  }

  if (mySong.paused) {
    mySong.currentTime = 148; // empieza en 1:30
    mySong.play();
    playBtn.textContent = "⏸ Pausa";
  } else {
    mySong.pause();
    playBtn.textContent = "🎵 Reprodúceme ❤️";
  }
});



const startDate = new Date('2023-08-16T00:00:00');

function diffStats(from,to){
  const ms=to-from;
  const days=Math.floor(ms/(1000*60*60*24));
  const hours=Math.floor(ms/(1000*60*60));
  const minutes=Math.floor(ms/(1000*60));
  let months=(to.getFullYear()-from.getFullYear())*12+(to.getMonth()-from.getMonth());
  if(to.getDate()<from.getDate()) months-=1;
  return {months:Math.max(0,months), days:Math.max(0,days), hours:Math.max(0,hours), minutes:Math.max(0,minutes)};
}

function renderStats(){
  const now=new Date();
  const {months,days,hours,minutes}=diffStats(startDate,now);
  document.getElementById('months').textContent = months.toLocaleString('es-MX');
  document.getElementById('days').textContent = days.toLocaleString('es-MX');
  document.getElementById('hours').textContent = hours.toLocaleString('es-MX');
  document.getElementById('minutes').textContent = minutes.toLocaleString('es-MX');
}
renderStats();
setInterval(renderStats,60000);

function spawnHeart(){
  const h=document.createElement('div');
  h.className='hearts';
  h.textContent=['💗','💖','💘','💝','💞','💕','❤️'][Math.floor(Math.random()*7)];
  h.style.left=Math.random()*100+'vw';
  h.style.bottom='-10vh';
  h.style.fontSize=(18+Math.random()*24)+'px';
  h.style.animation=`floatUp ${4+Math.random()*4}s linear forwards`;
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),8000);
}

document.getElementById('btnPlay').addEventListener('click', ()=>{
  for(let i=0;i<150;i++) setTimeout(spawnHeart,i*120);
});
// BOTÓN SORPRESA: corazones y fuegos artificiales
function initCarta(){
  const btn = document.getElementById('btnPlay');
  btn.addEventListener('click', ()=> {
    for(let i=0;i<150;i++) setTimeout(spawnHeart, i*120);
  });
}

initCarta(); // inicializamos al cargar la carta




