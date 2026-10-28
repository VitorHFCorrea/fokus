const html = document.querySelector("html");
const title = document.querySelector(".app__title");
const img = document.querySelector(".app__image");
const timer = document.querySelector("#timer");
const music = new Audio("/sons/luna-rise-part-one.mp3");
music.loop = true;
const pauseSound = new Audio("/sons/pause.mp3");
const startSound = new Audio("/sons/play.wav");
const alertSound = new Audio("/sons/beep.mp3");

const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const modeBtns = document.querySelectorAll(".app__card-button");
const musicBtn = document.querySelector("#alternar-musica");
const startPauseBtn = document.querySelector("#start-pause");
const startPauseBtnText = document.querySelector("#start-pause span");
const startPauseBtnIcon = document.querySelector("#start-pause img");

let tempoDecorrido = 1500;
let intervalo = null;

const mudarContexto = (contexto) => {
  modeBtns.forEach((button) => {
    button.classList.remove("active");
  });

  html.setAttribute("data-contexto", contexto);
  img.setAttribute("src", `/imagens/${contexto}.png`);

  switch (contexto) {
    case "foco":
      title.innerHTML = `Otimize sua produtividade,<br />
      <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      focoBtn.classList.add("active");
      tempoDecorrido = 1500;
      break;
    case "descanso-curto":
      title.innerHTML = `Que tal dar uma respirada?<br />
      <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      curtoBtn.classList.add("active");
      tempoDecorrido = 300;
      break;
    case "descanso-longo":
      title.innerHTML = `Hora de voltar à superfície.<br />
      <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      longoBtn.classList.add("active");
      tempoDecorrido = 900;
      break;
  }

  mostrarTempo();
};

focoBtn.addEventListener("click", () => mudarContexto("foco"));

curtoBtn.addEventListener("click", () => mudarContexto("descanso-curto"));

longoBtn.addEventListener("click", () => mudarContexto("descanso-longo"));

musicBtn.addEventListener("change", () => (music.paused ? music.play() : music.pause()));

const decrementarTempo = () => {
  if (tempoDecorrido <= 0) {
    pararContagem();
    alertSound.play();
    alert("Tempo finalizado!");
    return;
  }
  tempoDecorrido--;
  mostrarTempo();
};

const iniciarPausarContagem = () => {
  if (intervalo) {
    pararContagem();
    pauseSound.play();
    return;
  }
  startPauseBtnIcon.setAttribute("src", "/imagens/pause.png");
  startPauseBtnText.textContent = "Pausar";
  startSound.play();
  intervalo = setInterval(decrementarTempo, 1000);
};

startPauseBtn.addEventListener("click", iniciarPausarContagem);

const pararContagem = () => {
  startPauseBtnIcon.setAttribute("src", "/imagens/play_arrow.png");
  startPauseBtnText.textContent = "Começar";
  clearInterval(intervalo);
  intervalo = null;
};

const mostrarTempo = () => {
  const tempo = new Date(tempoDecorrido * 1000);
  const tempoFormatado = tempo.toLocaleString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
  });
  timer.innerHTML = `${tempoFormatado}`;
};

mostrarTempo();
