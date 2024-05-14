const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

$(document).ready(function () {
    var input = $('#emailArea').on('input', function() {
        if (emailRegex.test(input.val())) {
            console.log(123);
            $('.emailIndicator').css({
                'display': 'block',
                'clip-path': 'polygon(20% 0%, 10% 10%, 30% 10%, 20% 20%, 10% 30%, 20% 40%, 30% 50%, 40% 40%, 50% 50%, 60% 40%, 70% 30%, 60% 20%)',
                'background-color': 'green',
                'animation': 'checkmark-animation 2s ease-in-out'
            })
            console.log(111123);
        }
        else {
            console.log(3323);
            $('.emailIndicator').css({
                'display': 'block',
                'clip-path': 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
                'animation': 'checkmark-animation 2s ease-in-out'
            })
        }
    });
});