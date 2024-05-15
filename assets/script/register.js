const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-])[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?/~\\\-]{5,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let email;
let login;
let passw;

let emailOkay = false;
let loginOkay = false;
let passwOaky = false;

$(document).ready(function () {
    email = $('#emailArea').on('input', function() {
        if (emailRegex.test(email.val())) {
            sendEmailForm();
        }
        else {
            $('.emailIndicator').css({
                'display': 'block',
                'clip-path': 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
                'background-color': 'red',
                'transition-duration': '.3s',
                'animation': 'checkmark-animation 2s ease-in-out'
            });
            emailOkay = false;
            $('.submit').fadeOut('fast');
        }
    });

    login = $('#loginArea').on('input', function() {
        if (login.val().length >= 5) { 
            sendLoginForm();
        }
        else {
            $('.loginIndicator').css({
                'display': 'block',
                'clip-path': 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
                'background-color': 'red',
                'transition-duration': '.3s',
                'animation': 'checkmark-animation 2s ease-in-out'
            })
            loginOkay = false;
            $('.submit').fadeOut('fast');
        }
    });

    passw = $('#passwordArea').on('input', function() {
        if (passwordRegex.test(passw.val())) {
            $('.passwordIndicator').css({
                'display': 'block',
                'clip-path': 'polygon(15% 41%, 15% 41%, 15% 41%, 15% 41%, 15% 41%, 15% 41%, 0 59%, 35% 90%, 35% 90%, 100% 21%, 90% 0, 35% 59%)',
                'background-color': 'green',
                'transition-duration': '.3s',
                'animation': 'checkmark-animation 2s ease-in-out'
            })
            passwOaky = true;

            setTimeout(function () {
                if (passwordRegex.test(passw.val()) && loginOkay && passwOaky && emailOkay) {
                    $('.submit').fadeIn('slow');
                    // $('.submit').focus();
                }
                else {
                    $('.submit').fadeOut('fast');
                }
            }, 1000);
        }
        else {
            $('.passwordIndicator').css({
                'display': 'block',
                'clip-path': 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
                'background-color': 'red',
                'transition-duration': '.3s',
                'animation': 'checkmark-animation 2s ease-in-out'
            })
            passwOaky = false;
        }
    })

    $('.submit').click(function (e) {
        sendForm();
    });

    $(document).keydown(function(event) {
        if (event.which === 13) {
            sendForm();
        }
    });
});


const sendEmailForm = () => {
    $.ajax({
        url: 'API/isEmailFree.php',
        type: 'post',
        data: {
            email: email.val(),
        },
        success: function(response) {
            if (response) { 
                $('.emailIndicator').css({
                    'display': 'block',
                    'clip-path': 'polygon(15% 41%, 15% 41%, 15% 41%, 15% 41%, 15% 41%, 15% 41%, 0 59%, 35% 90%, 35% 90%, 100% 21%, 90% 0, 35% 59%)',
                    'background-color': 'green',
                    'transition-duration': '.3s',
                    'animation': 'checkmark-animation 2s ease-in-out'
                })

                setTimeout(function () {
                    if (loginOkay && passwOaky && emailOkay) {
                        $('.submit').fadeIn('slow');
                        // $('.submit').focus();
                    }
                    else {
                        $('.submit').fadeOut('fast');
                    }
                }, 1000);
    
                setTimeout(function () {
                    if (emailRegex.test(email.val())) {
                        $('.loginHolder').fadeIn('slow');
                        // $('#loginArea').focus();
                    }
                }, 1000);

                emailOkay = true;
            } else {
                $('.emailIndicator').css({
                    'display': 'block',
                    'clip-path': 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
                    'background-color': 'red',
                    'transition-duration': '.3s',
                    'animation': 'checkmark-animation 2s ease-in-out'
                });
                emailOkay = false
            }
        },
        error: function() {
            console.log("Błąd!");
            emailOkay = false;
        }
    })
}

const sendLoginForm = () => {
    $.ajax({
        url: 'API/isloginFree.php',
        type: 'post',
        data: {
            login: login.val(),
        },
        success: function(response) {
            if (response) { 
                $('.loginIndicator').css({
                    'display': 'block',
                    'clip-path': 'polygon(15% 41%, 15% 41%, 15% 41%, 15% 41%, 15% 41%, 15% 41%, 0 59%, 35% 90%, 35% 90%, 100% 21%, 90% 0, 35% 59%)',
                    'background-color': 'green',
                    'transition-duration': '.3s',
                    'animation': 'checkmark-animation 2s ease-in-out'
                })

                setTimeout(function () {
                    if (loginOkay && passwOaky && emailOkay) {
                        $('.submit').fadeIn('slow');
                        // $('.submit').focus();
                    }
                    else {
                        $('.submit').fadeOut('fast');
                    }
                }, 1000);
    
                setTimeout(function () {
                    if (login.val().length >= 5) {
                        $('.passwordHolder').fadeIn('slow');
                        $('.passwordVisibility').fadeIn('slow');
                        // $('#passwordArea').focus();
                    }
                }, 1000);

                loginOkay = true;
            }
            else {
                $('.loginIndicator').css({
                    'display': 'block',
                    'clip-path': 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
                    'background-color': 'red',
                    'transition-duration': '.3s',
                    'animation': 'checkmark-animation 2s ease-in-out'
                })
                loginOkay = false;
            }
        },
        error: function() {
            loginOkay = false;
            console.log("Błąd!");
        }
    })
};

const sendForm = () => {
    $.ajax({
        url: 'API/registerUser.php',
        type: 'post',
        data: {
            login: login.val(),
            passw: passw.val(),
            email: email.val()
        },
        success: function(response) {
            if (response) {
                $('.refresher').css({
                    'display': 'block',
                })
                $('.refresher').animate({
                    'top': '0',
                }, 'fast', function() {
                    window.location.href = 'index.php';
                });
                

            } else {
                console.log('Rejestracja nie powiodła się!');

            }
        },
        error: function() {
            console.log("Błąd!");
        }
    })
}