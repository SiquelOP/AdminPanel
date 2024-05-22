export const changeQuantity = (parent, elem, id, action) => {
    $.ajax({
        type: "post",
        url: action == 1 ? "API/increaseQuantity.php" : "API/decreaseQuantity.php",
        data: {id: id},
        dataType: "json",
        success: function (response) {
            if( response.success ) {
                elem.text(response.quantity);
            }
            else {
                console.log(response.message);
                if( response.out ) parent.fadeOut('fast');
            }
        },
        error: function(asd) {
            console.log(asd);
            console.log("Błąd!");
        }
    });
}