export const editElem = (elem) => {

    $.ajax({
        type: "post",
        url: "API/editElem.php",
        data: {id: elem},
        dataType: "json",
        success: function (response) {
            
        },
        error: function(asd) {
            console.log(asd);
            console.log("Błąd!");
        }
    });
}