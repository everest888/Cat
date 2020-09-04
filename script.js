$(document).ready(function () {


    $('.hide').click( function () {

        $(this).css({'background': 'url(images/Photo-2.png)'});
        $(this).find(".circle,.circlechicken").css({'background': '#1698d9'});
        $(this).parent().find('.purchase').slideToggle(800);
        
        

            $(this).click(function () {
            $(this).css({'background': 'url(images/Photo.png)'});
            $(this).find(".circle,.circlechicken").css({'background': '#d91667'});
            $(this).parent().find('.purchase').css({'display': 'none'});
            $(this).parent().find('.purchase').stop();
            });
         
        
    });
   

});