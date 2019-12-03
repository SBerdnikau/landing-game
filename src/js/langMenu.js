
document.querySelector('.menu__language').onmouseover= function(event) {
    event.preventDefault();
    if (target.className == 'header__item') {
        target.getElementsByClassName('submenu').style.display = 'block';
    }
    //var target = event.target; // где был клик?
    // if (target.className == 'language') {
    //     var s = target.getElementsByClassName('submenu');
    //     closeMenu();
    //     s[0].style.display = 'block';
    // }
};

// function closeMenu() {
//     var menu = document.querySelector('.menu__language');
//     var subm = document.getElementsByClassName('submenu');
//     for (var i=0; i<subm.length; i++) {
//         subm[i].style.display="none";
//     }
// }