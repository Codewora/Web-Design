const hamburger_menu = document.getElementById('hamburger_menu');
const menu = document.getElementById('menuToggler');
const backdrop = document.getElementById('backdrop');
const layers = document.querySelectorAll('.layer');


hamburger_menu.addEventListener('click', () => {
  menu.classList.add('active');
  backdrop.classList.add('active');
});

backdrop.addEventListener('click', () => {
  menu.classList.remove('active');
  backdrop.classList.remove('active');
});

window.addEventListener('scroll', () => {

  let value = window.scrollY;
  layers.forEach((ele) => {
    let speed = ele.dataset.speed;
    ele.style.transform = `translateY(${value * speed}px)`;
  });
});

