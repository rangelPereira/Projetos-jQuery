function start() { // Inicio da função start()
	$("#inicio").hide();



//Principais variaveis

var fimdojogo = false;
var placar = 0;


setInterval(addBola, 1000);




function addBola(){
    if(fimdojogo == false){


        var x = Math.floor(Math.random()*200);
        var y = Math.floor(Math.random()*200);
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
            $(this).remove();

            placar++;
            upadatePlacar();
        })
            $('#fundoGame').append(bola);

    }

    let quantidade = $('.bola').length;
    if(quantidade > 9) {
        gameOver();
    }
    
}



function upadatePlacar(){
    $('#placar').html(placar);
}





            //Função GAME OVER
            function gameOver() {
                fimdojogo = true;

                $('.bola').remove();

                $("#fundoGame").append("<div id='fim'></div>");

                $("#fim").html("<h1> Game Over </h1> <div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
                } // Fim da Função gameOver();
    } // Fim da função start

    function reiniciaJogo() {
        $("#fim").remove();
        $('#placar').html('0');

        start();
        
} //Fim da função reiniciaJogo
