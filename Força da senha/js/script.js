$(function(){

    $('#senha').bind('keyup', function(){

        var txt = $(this).val();
        var forca = 0;
        var pass = '';


        if(txt.length > 8){
            forca += 25;
        }

        var reg = new RegExp(/[a-z]/i);
        if(reg.test(txt)){
            forca += 25;
        }

        var reg = new RegExp(/[0-9]/i);
        if(reg.test(txt)){
            forca += 25;
        }

        var reg = new RegExp(/[^a-z0-9]/i);
        if(reg.test(txt)){
            forca += 25;
        }


        switch(forca) {
            case 25:
                $(".testando").css('background-color', '#ff3030');
                pass = 'Fraca';
                break;
            case 50:
                $(".testando").css('background-color', '#ffff4f');
                pass = 'Media';

                break;
            case 75:
                $(".testando").css('background-color', '#25d025');
                pass = 'Forte';

                break;
            case 100:
                $(".testando").css('background-color', '#027502');
                pass = 'Muito Forte';
                break;
        }


        $(".testando").css('width', (forca + "%"));

        $('#foca').html('Força da senha: ' + forca + '% ' + pass );

    })

})