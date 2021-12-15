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
})