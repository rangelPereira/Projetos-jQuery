function consutaCep(){
    var consultaCEP = document.getElementById("consultaCEP").value;
    consultaCEP = consultaCEP.replace(/[^0-9]/g,'');
    consultaCEP = consultaCEP.substr(0, 8);
    console.log(consultaCEP)

    var url = "http://viacep.com.br/ws/" + consultaCEP + "/json/";

    $.ajax({
        url: url,
        type:"GET",
        success: function(response){
            if(response.cep){
                $("#cep").html("CEP CONSULTADO: " + response.cep);
                $("#logradouro").html(response.logradouro);
                $("#bairro").html(response.bairro);
                $("#localidade").html(response.localidade);
                $("#uf").html(response.uf);
                $("#ddd").html(response.ddd);
            }else{
                alert('Digite um CEP valido');
                $("#cep").html("CEP CONSULTADO: Não existe" );
                $("#logradouro").html('Rua Exemplo');
                $("#bairro").html('Bairro Exemplo');
                $("#localidade").html('Cidade Exemplo');
                $("#uf").html('XX');
                $("#ddd").html('XX');
            }
            
        }
    })

}
