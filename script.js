 $(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");

        }
        
    });



    // toggle menu/navbar script

    $('menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
    })


    // typing animation script 

    var typed = new Typed(".typing",{
        strings: ["Developer",  "Student" , "Free lancer", "logo designer", "Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2",{
        strings: ["Developer",  "Student" , "Free lancer", "logo designer", "Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // owl carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        Responsive: {

            0:{
                items:1,
                nav: false
            },

            600:{
                items:2,
                nav: false
            },

            1000:{
                items:3,
                nav: false
            }
        }

    })
 });
 