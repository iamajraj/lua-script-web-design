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
});
