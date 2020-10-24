$(".btn-form").click(function(event){
    event.preventDefault();
    let send = true;
    let form = $('.validator');

    let inputs = $('form input');

    clearErros();

    for(let i = 0; i<inputs.length;i++){
        let input = inputs[i];
        let check = checkInput(input);

        if(check !== true){
            send = false;
            // tratar o erro
            showError(input, check);


        }
    }

    if(send){
        form.submit();
    }

});


checkInput = (input) => {
    let rules = input.getAttribute('data-rules');
    if(rules !== null){
        rules = rules.split('|');

        for(let k in rules) {
            let rDetails = rules[k].split('=');
            switch(rDetails[0]){
                case 'required':
                    if(input.value == ''){
                        return 'Campo não pode ser vazio.';
                    }
                break;
                case 'min':
                    if(input.value.length < rDetails[1]){
                        return 'Campo tem que ter pelo menos '+rDetails[1]+' caracteres';
                    } 
                break;
                case 'email':
                    if(input.value != ''){
                        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                        if(!regex.test(input.value.toLowerCase())){
                            return 'Digite um e-mail valido!';
                        }
                    } 
                break;
            }
        }
    }

    return true;
}

showError = (input, error) => {
    var element1 = $("<p class='erro'></p>").text(error);
    $(input).after(element1).css('borderColor', '#ff0000');
}

clearErros = () => {
    $(".erro").remove();
    $('input').css('borderColor', '#999');

}

