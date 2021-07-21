"use strict";
const p1RollButton = document.querySelector(".p1-rolldice");
const p2RollButton = document.querySelector(".p2-rolldice");
const newgame = document.querySelector(".newgame");
const imageSide = (x) => `.d${x}`;
let p1Current = document.querySelector(".p1-current");
let p2Current = document.querySelector(".p2-current");
let p1hold = document.querySelector(".p1-hold");
let p2hold = document.querySelector(".p2-hold");
let p1total = document.querySelector(".p1-score");
let p2total = document.querySelector(".p2-score");

const p1rolldice = function () {
  for (var i = 0; i < document.querySelectorAll(".side").length; i++) {
    document.querySelectorAll(".side")[i].style.display = "none";
  }
  const rolled = Math.trunc(Math.random() * 6 + 1);
  console.log(rolled);
  document.querySelector(".dice-rolling").style.display = "block";

  setTimeout(function () {
    document.querySelector(".dice-rolling").style.display = "none";
    document.querySelector(imageSide(rolled)).style.display = "block";
    if (rolled === 1) {
      p1Current.textContent = String(0);
      document.querySelector(".p1").style.opacity = 0.5;
      document.querySelector(".p2").style.opacity = 1;
      for (var i = 0; i < document.querySelectorAll(".p1-button").length; i++) {
        document.querySelectorAll(".p1-button")[i].style.display = "none";
      }
      for (var i = 0; i < document.querySelectorAll(".p2-button").length; i++) {
        document.querySelectorAll(".p2-button")[i].style.display = "block";
      }
    } else p1Current.textContent = String(Number(p1Current.textContent) + rolled);
  }, 2000);
};

const p2rolldice = function () {
  for (var i = 0; i < document.querySelectorAll(".side").length; i++) {
    document.querySelectorAll(".side")[i].style.display = "none";
  }
  const rolled = Math.trunc(Math.random() * 6 + 1);
  console.log(rolled);
  document.querySelector(".dice-rolling").style.display = "block";

  setTimeout(function () {
    document.querySelector(".dice-rolling").style.display = "none";
    document.querySelector(imageSide(rolled)).style.display = "block";
    if (rolled === 1) {
      document.querySelector(".p1").style.opacity = 1;
      document.querySelector(".p2").style.opacity = 0.5;
      p2Current.textContent = String(0);
      for (var i = 0; i < document.querySelectorAll(".p2-button").length; i++) {
        document.querySelectorAll(".p2-button")[i].style.display = "none";
      }
      for (var i = 0; i < document.querySelectorAll(".p1-button").length; i++) {
        document.querySelectorAll(".p1-button")[i].style.display = "block";
      }
    } else p2Current.textContent = String(Number(p2Current.textContent) + rolled);
  }, 2000);
};

const p1holdFun = function () {
  p1total.textContent = String(
    Number(p1Current.textContent) + Number(p1total.textContent)
  );
  p1Current.textContent = 0;
  for (var i = 0; i < document.querySelectorAll(".p1-button").length; i++) {
    document.querySelectorAll(".p1-button")[i].style.display = "none";
  }
  for (var i = 0; i < document.querySelectorAll(".p2-button").length; i++) {
    document.querySelectorAll(".p2-button")[i].style.display = "block";
  }
  document.querySelector(".p1").style.opacity = 0.5;
  document.querySelector(".p2").style.opacity = 1;
  if (Number(p1total.textContent) >= 100) {
    document.querySelector(".p1").style.opacity = 1;
    document.querySelector(".p2").style.opacity = 0.25;
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to right, #314755, #fff)";
    document.querySelector("body").style.pointerEvents = "none";
    document.querySelector(".p1wins").style.display = "block";
    document.querySelector(".newgame").style.pointerEvents = "auto";
  }
};

const p2holdFun = function () {
  p2total.textContent = String(
    Number(p2Current.textContent) + Number(p2total.textContent)
  );
  p2Current.textContent = 0;
  for (var i = 0; i < document.querySelectorAll(".p2-button").length; i++) {
    document.querySelectorAll(".p2-button")[i].style.display = "none";
  }
  for (var i = 0; i < document.querySelectorAll(".p1-button").length; i++) {
    document.querySelectorAll(".p1-button")[i].style.display = "block";
  }
  document.querySelector(".p1").style.opacity = 1;
  document.querySelector(".p2").style.opacity = 0.5;
  if (Number(p2total.textContent) >= 100) {
    document.querySelector(".p1").style.opacity = 0.25;
    document.querySelector(".p2").style.opacity = 1;
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to right, #fff, #26a0da)";
    document.querySelector("body").style.pointerEvents = "none";
    document.querySelector(".p2wins").style.display = "block";
    document.querySelector(".newgame").style.pointerEvents = "auto";
  }
};

const newgameFun = function () {
  for (var i = 0; i < document.querySelectorAll(".side").length; i++) {
    document.querySelectorAll(".side")[i].style.display = "none";
  }
  document.querySelector(".p1").style.opacity = 1;
  document.querySelector(".p2").style.opacity = 0.5;
  p1total.textContent = 0;
  p2total.textContent = 0;
  p1Current.textContent = 0;
  p2Current.textContent = 0;
  document.querySelector("body").style.backgroundImage =
    " linear-gradient(to right, #314755, #26a0da)";
  document.querySelector(".p1-hold").style.display = "block";
  document.querySelector(".p2-hold").style.display = "none";
  document.querySelector(".p1-rolldice").style.display = "block";
  document.querySelector(".p2-rolldice").style.display = "none";
  document.querySelector("body").style.pointerEvents = "auto";
  document.querySelector(".p1wins").style.display = "none";
  document.querySelector(".p2wins").style.display = "none";
};

p1RollButton.addEventListener("click", p1rolldice);
p2RollButton.addEventListener("click", p2rolldice);
p1hold.addEventListener("click", p1holdFun);
p2hold.addEventListener("click", p2holdFun);
newgame.addEventListener("click", newgameFun);
