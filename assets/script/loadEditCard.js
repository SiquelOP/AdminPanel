import { editElem } from "./editItem.js";

$(document).ready(function () {
    let id = localStorage.getItem('id');

    loadCard(id);
});

const loadCard = (id) => {
    $.ajax({
        url: 'API/getProductId.php',
        type: 'post',
        dataType: 'json',
        data: {
            id: id
        },
        success: function(response) {
            if (response.success) { 
                let element = response.product;
                console.log(element);
                let structure = $('<div>')
                    .addClass('editField')
                    .append($('<div>')
                        .append($('<label>').attr({'for': 'name'}).text('Nazwa'))
                        .append($('<input>').attr({'value': element['name'], 'name': 'name'}).addClass('name'))
                    )
                    .append($('<div>')
                        .append($('<label>').attr({'for': 'img'}).text('Obraz'))
                        .append($('<input>').attr({'value': element['img'], 'name': 'img'}).addClass('img'))
                    )
                    .append($('<div>')
                        .append($('<label>').attr({'for': 'price'}).text('Cena'))
                        .append($('<input>').attr({'value': element['price'], 'name': 'price'}).addClass('price'))
                    )
                    .append($('<div>')
                        .append($('<label>').attr({'for': 'stock'}).text('Ilosc'))
                        .append($('<input>').attr({'value': element['stock'], 'name': 'stock'}).addClass('stock'))
                    )
                    .append($('<div>')
                        .append($('<label>').attr({'for': 'description'}).text('Opis'))
                        .append($('<input>').attr({'value': element['description'], 'name': 'description'}).addClass('description'))
                    )
                    .append($('<button>').text('Zatwierdz').addClass('submit').click(() => editElem(id)));
                $('.container').append(structure);
                structure.fadeIn('fast');
            } 
            
            else {

            }
        },
        error: function(abc) {
            console.log(abc);
            console.log("Błąd!");
        }
    })
}

