import { addItems } from "./changeCartItemsValue.js";
import { removeItems } from "./changeCartItemsValue.js";
$(document).ready(function () {
    getProducts();
});

const getProducts = () => {
    $.ajax({
        url: 'API/getCartProducts.php',
        type: 'post',
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                let i = 1;
                let products = response.products;
                setTimeout(function() {
                    products.forEach(element => {
                        let structure = $('<div>')
                        .addClass('card')
                        .append($('<div>')
                            .append($('<img>').attr('src', element['img']).addClass('shopItem'))
                            .append($('<h1>').text(element['name']))
                        )
                        .append($('<div>') 
                            .append($('<h3>').text(element['price'] + 'zł'))
                            .append($('<div>')
                                .append($('<span>').addClass('minus').append($('<img>').attr('src', 'https://img.icons8.com/ios-glyphs/30/848d97/minus.png')).click(addItems(element['id'])))
                                .append($('<span>').addClass('numberq').text(element['quantity']))
                                .append($('<span>').addClass('plus').append($('<img>').attr('src', 'https://img.icons8.com/material-outlined/24/848d97/plus--v1.png')).click(removeItems(element['id'])))
                                .addClass('quantity')
                            )
                        );
                        
                        $('.container').append(structure);
                        structure.delay(1050 * i).fadeIn('slow');
                        i++;
                    });
                }, 1250)
                // https://img.icons8.com/ios-glyphs/30/119e00/shopping-basket-remove.png 

                
            } else {
                console.log(response.error);
            }
        },
        error: function(dtf) {
            console.log(dtf);
            console.log("Błąd!");
        }
    })

}