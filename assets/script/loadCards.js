import { addToCart } from "./addToCart.js";
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
                let i = 1;
                let products = response.products;
                setTimeout(function() {
                    products.forEach(element => {
                        let edit = $('<img>').attr('src', 'https://img.icons8.com/ios/50/119e00/edit--v1.png').addClass('edit').click( function() {
                            localStorage.setItem('id', element['id']);
                            window.location.href = 'editItem.php';
                        });

                        let structure = $('<div>')
                        .addClass('card')
                        .append($('<img>').attr('src', element['img']).addClass('shopItem'))
                        .append($('<h1>').text(element['name']))
                        .append($('<p>').text(element['description']))
                        .append($('<h3>').text(element['price'] + 'zł'))
                        .append($('<img>').attr('src', 'https://img.icons8.com/ios-glyphs/30/119e00/add-basket.png').addClass('svgImg').click(function() {addToCart(element['id'])}));
                        if ( window.location.pathname.split('/').pop() == 'panel.php') structure.append(edit);
                        $('.container').append(structure);
                        structure.delay(50 * i).fadeIn('slow');
                        i++;
                    });
                },1000)
                // https://img.icons8.com/ios-glyphs/30/119e00/shopping-basket-remove.png 

                
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