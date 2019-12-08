
// document.querySelector('.menu__list').onmouseover= function(event) {
//     event.preventDefault();
//     var target = event.target; // где был клик?
//     if (target.className == 'menu__element') {
//         var s = target.getElementsByClassName('submenu');
//         closeMenu();
//         s[0].style.display = 'block';
//     }
// };
//
// function closeMenu() {
//     var menu = document.querySelector('.menu__list');
//     var subm = document.getElementsByClassName('submenu');
//     for (var i=0; i<subm.length; i++) {
//         subm[i].style.display="none";
//     }
// }

$(document).ready(function(){

    $('#menu-wrap').prepend("<div id='menu-icon'><b>Меню</b></div>");
    $("#menu-icon").on("click", function(){
        $(".menu").slideToggle();
    });

});