$(document).ready(function () {
    login = $('#loginArea');
    password = $('#passwordArea');

    $('.submitLogin').click(function (e) {
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
        data: {
            login: login.val(),
            passw: password.val()
        },
        success: function(response) {
            response = JSON.parse(response);

            if (response.success) {
                console.log('Dane użytkownika pobrano pomyślnie');
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