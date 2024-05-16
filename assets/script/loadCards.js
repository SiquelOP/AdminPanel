$(document).ready(function () {
    getProducts();
});

const getProducts = () => {
    $.ajax({
        url: 'API/getProducts.php',
        type: 'post',
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                let products = response.products;
                products.forEach(element => {
                    let structure = $('<div>')
                    .addClass('card')
                    .append($('<h1>')).text(element['name'])
                    .append($('<p>')).text(element['description'])
                    .append($('<h3>')).text(element['price'])
                    .append($('<button>')).text('Add to cart');
                    $('.container').append(structure);
                });

                
            } else {
                console.log('Nie udało się pozyskać produktów!');
            }
        },
        error: function(dtf) {
            console.log(dtf);
            console.log("Błąd!");
        }
    })

}