$(function() {

    $('li').hover(function(){
        $(this).find('.dropDown').slideDown();
    }, function(){
        $(this).find('.dropDown').slideUp();
    })
})