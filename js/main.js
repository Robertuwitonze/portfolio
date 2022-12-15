
$(function () {
    "use strict";
    
    var html_body = $('html, body');
    var nav_bar = $(".nav_bar");
    var back_top = $(".top i");
    
    
    // js for sticky menu
    var $dis = nav_bar.offset().top;
    
    $(window).scroll(function(){
        
        var $scroll = $(this).scrollTop();
        
        if($scroll >= $dis){
            nav_bar.addClass("fixed")
        }
        
        else{
            nav_bar.removeClass("fixed")
        }
        
        // js for back to top
        
        if($scroll >= 500 ) {
            
            back_top.fadeIn();
        }
        
        else{
            
            back_top.fadeOut();
        }
        
    })
    
    back_top.click(function(){
        
        html_body.animate({
            
            scrollTop : 0
            
        }, 1000)
    })
    
    
    // js for animation scroll
    $('.nav_bar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 5
                }, 1200);
                return false;
            }
        }
    });
    
    
    // js for preloder
    $(window).on('load', function(){
        
        $('.preloder').fadeOut();
        
    });
    
    
    
    // js for rounded progress bar
    $('.chart').easyPieChart({
        size: 100,
        scaleColor: false,
        barColor: '#ff9800',
        trackColor: '#eaeaea',
        animate:{
                duration:2000,
                enabled:true
            },
    });
    
    
    // js for venobox
    $('.venobox').venobox({
        overlayColor: 'rgba(54, 54, 54, 0.9)',
        closeColor: '#4a4a4a',
        closeBackground: '#ffffff',
        infinigall: true,
    });
    
    
    // js for mixitup 
    var containerEl = document.querySelector('.mix_fil');
    var mixer;

    if (containerEl) {
        mixer = mixitup(containerEl, {
            selectors: {
                control: '[data-filter]'
            },
            load: {
                filter: '.mix'
            }
        });
    }
    
    
    // js for counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // js for client review slider
    $('.client-slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1200,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    
  ]
    });
    
    
    // js for blog slider
    $('.blog_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    
  ]
    });
    
});
