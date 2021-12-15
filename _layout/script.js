$(function(){
    $('.nav-toggle').click(function(){
        // $('.nav-menu').slideToggle();
        $('.nav-menu').slideToggle();
    })
    $(window).resize(function(){
        let w = $(window).width();
        if(w > 1200){
            $('.nav-menu').show();
        }else{
            $('.nav-menu').hide();
        }
    });
    $('.nav-menu').find('a').click(function(){
        let href=$(this).attr('href');
        if(href === '#'){
            $('html,body').animate({
                scrollTop: 0
            })
            return false; 
        }
        let distance = $(href).offset().top;
        $('html,body').animate({
            scrollTop: distance
        })
        return false;
    })
    $('.gotop').click(function(){
        $('html,body').animate({
            scrollTop:0
        })
        return false;
    })
    $('.gotop').hide();
    $(window).scroll(function(){
        let h = $(window).scrollTop();
        if( h > 600){
            $('.gotop').fadeIn();
        }else{
            $('.gotop').fadeOut();
        }
    })
})