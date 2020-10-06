$(function(){
    
    $('a.galeria').bind('click', function(){

        var img = $(this).find('img').attr('src');

        $('.divbox img').attr('src', img);

        $('.bgbox, .divbox').fadeIn('fast');
    });

    $('.bgbox, .divbox button').bind('click', function(){
        $('.bgbox, .divbox').fadeOut('fast');
    })

});