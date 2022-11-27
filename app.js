const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const content = document.querySelector('.fading-animation');
const title1 = document.querySelector('.hero__title');
const title2 = document.querySelector('.hero__sub-title');

function disableBodyScroll({ savePosition = false } = {}) {
    if (document.readyState === 'complete') {
      if (document.body.scrollHeight > window.innerHeight) {
        if (savePosition) document.body.style.marginTop = `-${window.pageYOffset}px`;
        document.body.style.position = 'fixed';
        document.body.style.overflowY = 'scroll';
      }
    } else {
      window.addEventListener('load', () => disableBodyScroll({ savePosition }));
    }
  }

  function enableBodyScroll() {
    if (document.readyState === 'complete') {
      document.body.style.position = '';
      document.body.style.overflowY = '';
  
      if (document.body.style.marginTop) {
        const scrollTop = -parseInt(document.body.style.marginTop, 10);
        document.body.style.marginTop = '';
        window.scrollTo(window.pageXOffset, scrollTop);
      }
    } else {
      window.addEventListener('load', enableBodyScroll);
    }
  }

var i = 0;

// Display Mobile Menu
const mobileMenu = () => {
    i++;
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    content.classList.toggle('active');
    title1.classList.toggle('active');
    title2.classList.toggle('active');
    if (i % 2 === 1) {
        disableBodyScroll();
    } else {
        enableBodyScroll();
        i = 0;
    }
    
}

menu.addEventListener('click', mobileMenu);
