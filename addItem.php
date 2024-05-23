<?php
    session_start();
    if ($_SESSION['user']['authorization'] < 3) {
        header("location: index.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="assets/script/main.js" defer></script>
    <script src="assets/script/mouseParalax.js" defer></script>
    <script src="assets/script/addItem.js" defer></script>
    <link rel="stylesheet" href="assets/style/css/addItem.css">
    <link rel="stylesheet" href="assets/style/css/login.css">
</head>
<body>

    <div class="paralax">
        <img class="paralax-elem" data-speed="0.1" src="assets/img/paralax/stars.png" alt="forground trees">

        <?php include_once  'include/header.php'; ?>

        <div class="container">
            <div class="loginForm">
                <input type="text" class="" name="name" maxlength="255" placeholder="Nazwa" id="nameArea">
                <input type="text" class="" name="img" maxlength="255" placeholder="Obraz" id="imgArea">
                <input type="number" class="" name="price" placeholder="Cena" id="priceArea">
                <input type="number" class="" name="stock" placeholder="Magazyn" id="stockArea">
                <input type="text" class="" name="desc" maxlength="255" placeholder="Opis" id="descArea">

                <button class="submit">Dodaj</button>
            </div> 
        </div>
    
        <div class="blur"></div>    
        <div class="refresher"> </div>
    </div>
    
</body>
</html>