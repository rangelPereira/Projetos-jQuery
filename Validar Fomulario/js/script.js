$(".btn-form").click(function(event){
    event.preventDefault();
    let send = true;
    let form = document.querySelector('.validator');


    let input = form.querySelectorAll('input');

    for(let i = 0; i<input.length;i++){
        let input = input[i];
        console.log(input);
    }

    send = false;
    if(send){
        form.submit();
    }

});

