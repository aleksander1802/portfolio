
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      counter = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

close.addEventListener('click', () => {
    menu.classList.remove('active');
}) 

counter.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


overlay.addEventListener('click', (e) => {
    if (e.target) {
        menu.classList.remove('active');
    }
});

function searchRemove(e) {
    if (e.code === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
}

document.addEventListener('keydown', searchRemove);






   