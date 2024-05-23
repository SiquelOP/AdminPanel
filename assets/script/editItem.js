export const editElem = (id) => {
    $.ajax({
        type: "post",
        url: "API/editElem.php",
        data: {
            id: id,
            name: $('.name').val(),
            img: $('.img').val(),
            price: $('.price').val(),
            stock: $('.stock').val(),
            description: $('.description').val()
        },
        dataType: "json",
        success: function (response) {
            if(response.success) {
                window.location.href = 'panel.php';
            }
        },
        error: function(asd) {
            console.log(asd);
            console.log("Błąd!");
        }
    });
}