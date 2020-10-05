$(function(){
    $('input').bind('focus', function(){

        var pos = $(this).offset();
        var width = $(this).width();

        $('.horaescolha').css('left', pos.left + width + 25);
        $('.horaescolha').css('top', pos.top);
        $('.horaescolha').show();

        horaescolhaCampo = $(this);
    });

    $('input').bind('blur', function(){
        setTimeout(() => {
            $('.horaescolha').hide();
        }, 200);
    });

    $('.horaescolha button').bind('click', function(){

        var hora = $(this).html();
        horaescolhaCampo.val(hora);
    });

})