const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".controls .fa-arrow-left");
const rightArrow = document.querySelector(".controls .fa-arrow-right");
const dotsWrapper = document.querySelector(".dots");
const dots = document.querySelectorAll(".dots span");

let slideIndex = 0;

const setIndex = () => {
  document.querySelector(".dots .active").classList.remove("active");
  slider.style.transform = `translateX(${slideIndex * -20}%)`;
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;

    setIndex();

    dot.classList.add("active");
  });
});

leftArrow.addEventListener("click", () => {
  if (slideIndex > 0) {
    slideIndex = slideIndex - 1;
  } else {
    slideIndex = 0;
  }

  setIndex();

  dotsWrapper.children[slideIndex].classList.add("active");
});

//
rightArrow.addEventListener("click", () => {
  //
  if (slideIndex < slides.length - 1) {
    slideIndex = slideIndex + 1;
  } else {
    slideIndex = slides.length - 1;
  }

  setIndex();

  dotsWrapper.children[slideIndex].classList.add("active");

  //
});
