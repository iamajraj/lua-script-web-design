import './style.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

// window.addEventListener('load', () => {
//   document.querySelector('html').style.scrollBehavior = 'smooth';
// });

const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

Aos.init({
  mirror: false,
  once: true,
});

// navbar scrolling
document.addEventListener('scroll', (ev) => {
  const isScrolling = Math.abs(document.body.getBoundingClientRect().top) > 80;
  if (isScrolling) {
    navbar.classList.add('scrolling');
  } else {
    navbar.classList.remove('scrolling');
  }
});

// stat number counting when on screen
const statRoot = document.querySelector('#stat-root');
const countsEl = document.querySelectorAll('[data-count]');

let isPlayedCountAnimation = false;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isPlayedCountAnimation) {
        startCounting();
        isPlayedCountAnimation = true;
      }
    });
  },
  {
    rootMargin: '0px 0px -45% 0px',
  }
);
observer.observe(statRoot);
function startCounting() {
  countsEl.forEach((el) => {
    const numberToCount = el.getAttribute('data-count');
    const suffix = el.getAttribute('data-count-suffix');
    const ms = el.getAttribute('data-count-time');
    countToN(Number(numberToCount), el, suffix, ms);
  });
}
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

// SERVICE TABS
const tabsData = [
  {
    title: 'Real-time Monitoring',
    cardDescription:
      'quas possimus doloremque dolor tenetur debitis. Labore, eligendi!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ratione sit accusantium quas possimus doloremque dolor tenetur debitis. Labore, eligendi!',
  },
  {
    title: 'Optimized Performance',
    cardDescription: 'elit. Sed ratione sit accusantium quas',
    description:
      'consectetur adipisicing elit. Sed ratione sit accusantium quas possimus doloremque dolor tenetur debitis. Labore, eligendi!',
  },
  {
    title: 'Robust Protection',
    cardDescription:
      'autem quaerat aliquid mollitia voluptatem laborum ratione quis eveniet',
    description:
      'Eaque quas excepturi architecto sapiente aperiam, exercitationem cupiditate distinctio autem quaerat aliquid mollitia voluptatem laborum ratione quis eveniet beatae natus eum recusandae?',
  },
];

const featureTabs = document.querySelectorAll('.feature-tab');
const tabContentTitle = document.querySelector('.tab-content-title');
const tabContentDesc = document.querySelector('.tab-content-description');
const tabContentCardDesc = document.querySelector(
  '.tab-content-card-description'
);
const tabIconRoot = document.querySelector('.tab-icon-root');
const tabMainBtn = document.querySelector('.tab-main-btn');

// active tab classes which to add border and it has been converted to array based on the space
const activeTabClasses =
  "md:after:content-[''] md:after:absolute md:after:-top-2 md:after:-right-7 md:after:w-[2px] md:after:h-[170%] md:after:bg-brand border-b-[1px] md:border-b-0 border-b-brand w-max md:w-auto pb-4 md:pb-0".split(
    ' '
  );

featureTabs.forEach((tab, idx) => {
  tab.addEventListener('click', (e) => {
    featureTabs.forEach((t) => {
      t.classList.remove(...activeTabClasses);
    });
    e.target.classList.add(...activeTabClasses);
    changeTabContent(idx);
  });
});

function changeTabContent(idx) {
  const data = tabsData[idx];
  if (!data) return;
  tabContentTitle.textContent = data.title;
  tabContentDesc.textContent = data.description;
  tabContentCardDesc.textContent = data.cardDescription;

  // this is to to avoid the flash effect in the icon root container
  tabIconRoot.style.setProperty('--initial-opacity', 1);

  // add fade-up animation to the provided elements
  addFadeUpAnimation(
    tabContentTitle,
    tabContentDesc,
    tabContentCardDesc,
    tabIconRoot,
    tabMainBtn
  );
}

function addFadeUpAnimation(...elements) {
  elements.forEach((el) => {
    el.classList.remove('fade-up');
    void el.offsetWidth;
    el.classList.add('fade-up');
  });
}
