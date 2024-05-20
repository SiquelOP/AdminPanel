export const addItems = (elem) => {
    $.ajax({
        url: 'API/addStockAndQuantity.php',
        type: 'post',
        data: {id: elem},
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                
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


export const removeItems = (elem) => {
    $.ajax({
        url: 'API/removeStockAndQuantity.php',
        type: 'post',
        data: {id: elem},
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                
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