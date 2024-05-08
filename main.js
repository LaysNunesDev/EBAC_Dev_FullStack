$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })
    $('#CPF').mask('000.000.000-00',{
        placeholder: '00.000.000-00'
    })
    $('#CEP').mask('000.00-000',{
        placeholder: '000.00-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            CPF: {
                required: true, 
            },
            CEP: {
                required: true, 
            },
            endereço: {
                required: true, 
            },
        },
        messages: {
        nome:'<span style="color: #950101;">Por favor, informe o nome.</span>',
        telefone: '<span style="color: #950101;">Por favor, informe o telefone.</span>',
        email: '<span style="color: #950101;">Por favor, informe o e-mail.</span>',
        CPF: '<span style="color: #950101;">Por favor, informe o CPF.</span>',
        CEP: '<span style="color: #950101;">Por favor, informe o CEP.</span>',
        endereço: '<span style="color: #950101;">Por favor, informe o endereço.</span>'
        },

        submitHandler: function(form){
            console.log(form)
            form.reset();
            alert("Enviado com sucesso!");
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log()
        }
    })