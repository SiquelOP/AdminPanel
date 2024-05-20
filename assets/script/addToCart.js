export const addToCart = (elem) => {
    $.ajax({
        type: "post",
        url: "API/addToCart.php",
        data: {id: elem},
        dataType: "json",
        success: function (response) {
            if( response.success ) {
                console.log('pomyślnie dodano!');
            }
        },
        error: function(asd) {
            console.log(asd);
            console.log("Błąd!");
        }
    });
}