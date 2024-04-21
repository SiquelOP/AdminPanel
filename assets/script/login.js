$(document).ready(function () {
    $('.submitLogin').click(function () { 
        sendForm();
    });
});


const sendForm = () => {

    if (!validation()) {
        return;
    }

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
    
    login = $('#loginArea');
    password = $('#passwordArea');

    if (login.val() === '') {
        login.addClass('inputError');

        isValid = false;
    }

    if (password.val() === '') {
        password.addClass('inputError');

        isValid = false;
    }

    login.on('input', function() {
        login.removeClass('inputError');
    });

    password.on('input', function() {
        password.removeClass('inputError');
    });

    return isValid;
}