$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15, //мажду слайдами
        nav:true,
        dots:false,
        responsive:{
            375:{
                items:3
            },
            425:{
                items:3
            },
            667:{
              items:5
            },
            768:{
                items:5
            },
            1024:{
                items:12
            }
        }
    })
});

