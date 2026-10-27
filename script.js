const html = document.querySelector("html");

const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const startBtn = document.querySelector("#start-pause");
const modeBtns = document.querySelectorAll(".app__card-button");

const title = document.querySelector(".app__title");
const img = document.querySelector(".app__image");
const timer = document.querySelector("#timer");

const tempoFoco = 1500;
const tempoCurto = 300;
const tempoLongo = 900;

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
      break;
    case "descanso-curto":
      title.innerHTML = `Que tal dar uma respirada?<br />
      <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;
    case "descanso-longo":
      title.innerHTML = `Hora de voltar à superfície.<br />
      <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      break;
    default:
      break;
  }
};

focoBtn.addEventListener("click", () => {
  mudarContexto("foco");
  focoBtn.classList.add("active");
});

curtoBtn.addEventListener("click", () => {
  mudarContexto("descanso-curto");
  curtoBtn.classList.add("active");
});

longoBtn.addEventListener("click", () => {
  mudarContexto("descanso-longo");
  longoBtn.classList.add("active");
});
