const images = [
  "images/person.png",
  "images/person.png",
  "images/person.png",
  "images/person.png",
];
const texts = [
  "Wish I'd gotten solar panels sooner. My wife won't stop talking about how much we're saving. We’re saving $300 a month on electric bills.",
  "Wish I'd gotten solar panels sooner. My wife won't stop talking about how much we're saving. We’re saving $300 a month on electric bills.",
  "Wish I'd gotten solar panels sooner. My wife won't stop talking about how much we're saving. We’re saving $300 a month on electric bills.",
  "Wish I'd gotten solar panels sooner. My wife won't stop talking about how much we're saving. We’re saving $300 a month on electric bills.",
];
let currentIndex = 0;

const showContent = (index) => {
  const element = document.getElementById("slider-content");
  const textElement = document.getElementById("slider-text");
  element.style.transform = "translateX(-100%)";
  textElement.style.transform = "translateX(-100%)";

  setTimeout(() => {
    element.src = images[index];
    textElement.textContent = texts[index];

    element.style.transition = "none";
    textElement.style.transition = "none";

    textElement.style.transform = "translateX(100%)";
    element.style.transform = "translateX(100%)";
    setTimeout(() => {
      element.style.transition = "transform 0.5s ease-in-out";
      textElement.style.transition = "transform 0.5s ease-in-out";

      element.style.transform = "translateX(0)";
      textElement.style.transform = "translateX(0)";
    }, 50);
  }, 500);
};

const showPrev = (index) => {
  const element = document.getElementById("slider-content");
  const textElement = document.getElementById("slider-text");
  element.style.transform = "translateX(100%)";
  textElement.style.transform = "translateX(100%)";

  setTimeout(() => {
    element.src = images[index];
    textElement.textContent = texts[index];

    element.style.transition = "none";
    textElement.style.transition = "none";

    textElement.style.transform = "translateX(-100%)";
    element.style.transform = "translateX(-100%)";
    setTimeout(() => {
      element.style.transition = "transform 0.5s ease-in-out";
      textElement.style.transition = "transform 0.5s ease-in-out";

      element.style.transform = "translateX(0)";
      textElement.style.transform = "translateX(0)";
    }, 50);
  }, 500);
};

const next = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showContent(currentIndex);
};

const prev = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showPrev(currentIndex);
};

window.onload = () => {
  next();
};
