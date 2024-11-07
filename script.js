const images = [
  "images/person.png",
  "images/person.png",
  "images/person.png",
  "images/person.png",
];

let currentIndex = 0;

const showContent = (index) => {
  const element = document.getElementById("slider-content");
  element.style.transform = "translateX(-100%)";

  setTimeout(() => {
    element.src = images[index];
    element.style.transition = "none";
    element.style.transform = "translateX(100%)";
    setTimeout(() => {
      element.style.transition = "transform 0.5s ease-in-out";
      element.style.transform = "translateX(0)";
    }, 50);
  }, 500);
};

const next = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showContent(currentIndex);
};

const prev = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showContent(currentIndex);
};

window.onload = () => {
  next();
};
