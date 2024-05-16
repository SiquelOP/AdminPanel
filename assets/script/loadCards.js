$(document).ready(function () {
    
});

const getProducts = () => {
    $.ajax({
        url: 'API/getProducts.php',
        type: 'post',
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                
            } else {
                console.log('Nie udało się pozyskać produktów!');
            }
        },
        error: function() {
            console.log("Błąd!");
        }
    })

}