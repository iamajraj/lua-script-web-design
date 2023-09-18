import './style.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

Aos.init({
  mirror: false,
  once: true,
  disable: true,
});

// stat number count
const countsEl = document.querySelectorAll('[data-count]');

countsEl.forEach((el) => {
  const numberToCount = el.getAttribute('data-count');
  const suffix = el.getAttribute('data-count-suffix');
  const ms = el.getAttribute('data-count-time');
  countToN(Number(numberToCount), el, suffix, ms);
});

function countToN(n, el, suffix, ms) {
  let clear;
  let i = 0;
  clear = setInterval(
    () => {
      if (i > n) {
        return clearInterval(clear);
      }
      el.textContent = i + suffix;
      i += 1;
    },
    ms ? Number(ms) : 50
  );
}
