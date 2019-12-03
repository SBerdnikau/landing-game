const btn = document.querySelector('.menu__hamburger');

if(btn){
    btn.addEventListener('click', function (e) {
        e.target.closest('.menu').classList.toggle('menu--active');
        e.target.closest('.hamburger').classList.toggle('hamburger--active');
    });
}



