$(document).ready(function () {
    login = $('#loginArea');
    password = $('#passwordArea');

    $('.submit').click(function (e) {
        if(validation()) {
            sendForm();
        }
    });

    $(document).keydown(function(event) {
        if (event.which === 13) {
            if(validation()) {
                sendForm();
            }
        }
    });


    login.on('input', function() {
        login.removeClass('inputError');
    });

    password.on('input', function() {
        password.removeClass('inputError');
    });
});


const sendForm = () => {
    $.ajax({
        url: 'API/loginUser.php',
        type: 'post',
        dataType: 'json',
        data: {
            login: login.val(),
            passw: password.val()
        },
        success: function(response) {
            if (response.success) {
                $('.refresher').css({
                    'display': 'block',
                    'backdrop-filter': 'blur(50px)'
                })
                $('.refresher').animate({
                    'top': '0',
                }, 'fast', function() {
                    window.location.href = response.authorization == 3 ? 'panel.php' : 'index.php';
                });
                

            } else {
                console.log('Logowanie nie powiodło się!');
            }
        },
        error: function() {
            console.log("Błąd!");
        }
    })
}

const validation = () => {
    let isValid = true;

    if (login.val() === '') {
        login.addClass('inputError');

        isValid = false;
    }

    if (password.val() === '') {
        password.addClass('inputError');

        isValid = false;
    }

    return isValid;
}