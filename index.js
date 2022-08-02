"use strict";

const btnSavedLogin = document.querySelectorAll(".btn--saved");
const btnOpenLogin = document.querySelectorAll(".btn--login");
const btnOpenSignup = document.querySelectorAll(".btn--signup");

const inputLogin = document.querySelector(".login--signup--input__login");
const inputSignup = document.querySelector(".login--signup--input__signup");
const formLogin = document.querySelector(".login--signup--form__login");
const formSignup = document.querySelector(".login--signup--form__signup");
const btnFormLogin = document.querySelector(`.btn--login--form`);
const btnFormSignup = document.querySelector(`.btn--signup--form`);

const overlay = document.querySelector(`.overlay`);
const form = document.querySelector(".form--pg");
const btnCloseModal = document.querySelector(`.btn--close-modal`);

////////////////////////////////
/////////////////////////////////
/////////////////////////////////

/////////////////////FORM ////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////FORM////////////////////////////////////////

const showLogin = function () {
  formLogin.style.display = `none`;
  inputSignup.style.display = `none`;
  form.style.display = `flex`;
  overlay.classList.remove(`hidden`);
  formSignup.style.display = `flex`;
  inputLogin.style.display = `flex`;
};
const showSignup = function () {
  formSignup.style.display = `none`;
  inputLogin.style.display = `none`;
  form.style.display = `flex`;
  overlay.classList.remove(`hidden`);
  inputSignup.style.display = `flex`;
  formLogin.style.display = `flex`;
};
const showLoginForm = function () {
  inputSignup.style.display = `none`;
  formLogin.style.display = `none`;
  showLogin();
};
const showSignupForm = function () {
  inputLogin.style.display = `none`;
  formSignup.style.display = `none`;
  showSignup();
};

//////////////////////////////////
////////////////////////////////

overlay.addEventListener(`click`, function () {
  form.style.display = `none`;
  overlay.classList.add(`hidden`);
});

btnCloseModal.addEventListener(`click`, () => {
  form.style.display = `none`;
  overlay.classList.add(`hidden`);
});

btnOpenLogin.forEach((btn) => btn.addEventListener(`click`, showLogin));

btnOpenSignup.forEach((btn) => btn.addEventListener(`click`, showSignup));

btnFormLogin.addEventListener(`click`, showLoginForm);
btnFormSignup.addEventListener(`click`, showSignupForm);
/////////////////////FORM ////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////FORM////////////////////////////////////////

/////////////////////DISPLAY ////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////DISPLAY///////////////////////////////////
const navSection = document.querySelector(`.navs__list`);

navSection.addEventListener(`click`, function (e) {
  e.preventDefault();
  if (e.target.classList.contains(`navs__link`)) {
    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const handleHover = function (e) {
  if (e.target.classList.contains("navs__link")) {
    const link = e.target;
    // console.log(link);

    const siblings = link.closest(".navs").querySelectorAll(".navs__link");
    // console.log(siblings);

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

navSection.addEventListener("mouseover", handleHover.bind(0.1));
navSection.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////////REVEAL SECTION///////////////////////////////////
const section = document.querySelectorAll(`.section`);
console.log(section);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove(`section--hidden`);
  entry.target.classList.remove(`section--left`);
  entry.target.classList.remove(`section--right`);
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

section.forEach((sec) => {
  sectionObserver.observe(sec);
  sec.classList.add(`section--hidden`);
});

const sectionLeft = document.querySelectorAll(`.section--left`);
const sectionRight = document.querySelectorAll(`.section--right`);

sectionRight.forEach((sec) => sectionObserver.observe(sec));
sectionLeft.forEach((sec) => sectionObserver.observe(sec));

//////////////////////////////////////////////////////////////
//////////////TESTIMONIAL////////////////////////////////////
//////////////////////////////////////////////////////////////

const slider = function () {};

const sliders = function () {
  const slidesTest = document.querySelectorAll(`.test`);
  const btnLeftArrow = document.querySelector(`.arrow--left`);
  const btnRightArrow = document.querySelector(`.arrow--right`);
  const dotsContainer = document.querySelector(`.dots`);
  const test = document.querySelector(`.testimonial`);

  let currentSlide = 0;
  let maxSlide = slidesTest.length;
  console.log(maxSlide);

  const goToSlide = function (slide) {
    slidesTest.forEach((s) => {
      s.style.transform = `translateX(${100 * slide}%)`;
      s.style.transition = `all 1s`;
    });
  };

  const nextSlide = function () {
    if (currentSlide === -3) {
      currentSlide = 0;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
  };
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = -4;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
  };

  /////////////
  const createDots = function () {
    slidesTestimonials.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(`beforeEnd`);
    });
  };
  btnRightArrow.addEventListener("click", nextSlide);
  btnLeftArrow.addEventListener("click", prevSlide);
};

sliders();

// sticky nav
const nav = document.querySelector(`.navs`);
const header = document.querySelector(`.main--header`);
console.log(header);
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
