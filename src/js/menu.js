
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


window.onload = function () {
    var subMenu,
        subMenuStyle,
        menuStyle,
        opener,
        el = document.getElementsByClassName('menu-item'),
        winWidth = document.documentElement.clientWidth;
    for(var i=0; i<el.length; i++){
        if(el[i].children.length > 1) {
            opener = document.createElement('span');
            opener.innerHTML = "&#9658;";
            el[i].insertBefore(opener, el[i].children[1]);
            if(winWidth>=768){
                el[i].addEventListener("mouseenter",showSub,false);
                el[i].addEventListener("mouseleave",hideSub,false);
            } else {
                el[i].children[1].addEventListener("click",subOpen,false);
            }
        }
    }
    function showSub() {
        subMenu = this.children[2];
        subMenu.style.height = "auto";
        subMenu.style.overflow = "visible";
        subMenu.style.opacity = "1";
    }
    function hideSub() {
        subMenu = this.children[2];
        subMenu.style.height = "0px";
        subMenu.style.overflow = "hidden";
        subMenu.style.opacity = "0";
    }
    function subOpen() {
        subMenu = this.nextElementSibling;
        subMenuStyle = getComputedStyle(subMenu);
        if(subMenuStyle.height == "0px"){
            subMenu.style.height = "auto";
            subMenu.style.overflow = "visible";
            subMenu.style.opacity = "1";
        } else {
            subMenu.style.height = "0px";
            subMenu.style.overflow = "hidden";
            subMenu.style.opacity = "0";
        }
    }
    menuStyle = getComputedStyle(menu);
    openMenu.onclick = function () {
        if(menuStyle.display == "none"){
            menu.classList.add("active");
            this.innerHTML = "Закрыть меню";
        } else {
            menu.classList.remove("active");
            this.innerHTML = "Открыть меню";
        }
    }
}
