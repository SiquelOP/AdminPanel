$(document).ready(function () {

    $('.submit').click(function () {
        sendForm();
    });

    $(document).keydown(function(event) {
        if (event.which === 13) {
            sendForm();
        }
    });
});

const sendForm = () => {
    $.ajax({
        url: 'API/addProduct.php',
        type: 'post',
        dataType: 'json',
        data: {
            name: $('#nameArea').val(),
            img: $('#imgArea').val(),
            price: $('#priceArea').val(),
            stock: $('#stockArea').val(),
            desc: $('#descArea').val()
        },
        success: function(response) {
            if (response.success) {  
                window.location.href = 'panel.php'
            } else {

            }
        },
        error: function(abc) {
            console.log(abc);
            console.log("Błąd!");
        }
    })
}