
const el = document.getElementById('language');
const lang = document.querySelectorAll('.language__item');



if(el){
    el.addEventListener('click', function (e) {
        e.target.closest('.header__item').childNodes[3].nextElementSibling.classList.toggle('language__list--active');

    });

}


lang.addEventListener('click',function (e) {
   let lg = e.target.closest('.language__list').childNodes[2].nextSibling.textContent;
   console.log(lg);
});






