function addBola(){
    var x = Math.floor(Math.random()*800);
    var y = Math.floor(Math.random()*500);
    var cor = Math.floor(Math.random()*4);

    var bola = $('<div class="bola"></div>');
    bola.css('left', x+'px');
    bola.css('top', y+'px');


    switch(cor) {
        case 0:
            bola.css('background-color', 'blue');
            break;
        case 1:
            bola.css('background-color', 'red');
            break;
        case 2:
            bola.css('background-color', 'yellow');
            break;
        case 3:
            bola.css('background-color', 'black');
            break;
    }

    bola.bind('click', function(){
        $(this).fadeOut('fast');

        placar++;
        upadatePlacar();
    })
    
    $(document.body).append(bola);
}



function upadatePlacar(){
    $('#placar').html(placar);
}

var placar = 0;

$(function(){
    
    $('#comecar').bind('click', function(){
            setInterval(addBola, 1000);
    });
});