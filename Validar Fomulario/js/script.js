$(".btn-form").click(function(event){
    event.preventDefault();
    let send = true;
    let form = document.querySelector('.validator');

    let inputs = form.querySelectorAll('input');

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
            }
        }
    }

    return true;
}

showError = (input, error) => {
    var element1 = $("<p class='erro'></p>").text(error);
    $(input).after(element1).css('borderColor', '#ff0000');
}

