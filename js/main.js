let navAberto = false;

$(document).ready(function() {
    $('#carousel-imagens').slick({
        arrows: false,
        autoplay: true,
    })

    $('.menu-hamburguer').click(function() {
        navAberto = !navAberto;
        if(navAberto){
            $('nav').slideDown();
        } else {
            $('nav').slideUp();
        }
    });
    
    $('nav ul li a').click(function(){
        $('nav').slideUp();
        navAberto = false;
    });

    $('ul').on('click', 'li a', function(event) {
        event.preventDefault();
    
        const destino = $($(this).attr('href'));
        const alturaHeader = $('header').outerHeight();

        
        $('html, body').animate({
            scrollTop: destino.offset().top - alturaHeader
        }, 1000);
    });

    $('#telefone').mask('(00) 00000-0000' , {
        placeholder: '(XX) XXXXX-XXXX'
    })

    $('#email').mask("A", {
        placeholder: 'exemplo@exemplo.com.br',
        translation: {
          "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
      }).on('blur', function() {
        var lastChar = $(this).val().substr(-1);
        if (lastChar === '@') {
          $(this).val($(this).val() + 'exemplo.com');
        } else if (lastChar === '.') {
          $(this).val($(this).val() + 'br');
        }
      });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')
        const nomeVeiculo = ($(this).parent().find('h3').text())

        $('#veiculo-interesse').text(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})