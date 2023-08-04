const navigationButtonElement = document.querySelector('.icon1');
navigationButtonElement.addEventListener('click', () => navigation());

const navigationBackgroundElement = document.querySelector('.navigation-background');
navigationBackgroundElement.addEventListener('click', () => navigation());

const navigationElement = document.querySelector('.navigation-container');

function navigation() {
    if(navigationElement.classList.contains('not-there')) {
        navigationElement.classList.remove('not-there');
        document.body.style.overflow = 'hidden';
    }
    else {
        navigationElement.classList.add('not-there');
        document.body.style.overflow = 'auto';
    }
}

const headerElement = document.querySelector('.header');
const middleHeaderElement = document.querySelector('.middle-header');
setInterval(() => scrollChanges(), 250);

function scrollChanges() {
    const scrollElement = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollElement == 0) {
        headerElement.classList.add('transparent');
    }
    else{
        headerElement.classList.remove('transparent');
    }

    if(scrollElement < 300) {
        middleHeaderElement.classList.add('invisible');
    }
    else {
        middleHeaderElement.classList.remove('invisible');
    }
}
