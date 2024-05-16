<?php
        session_start();

        // Jeśli uzytkownik nie jest zalogowany, przekieruj go na landing page
        if (!isset($_SESSION['user'])) {
            header("location: landing.php");
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
    <script src="assets/script/loadCards.js" defer></script>
    <link rel="stylesheet" href="assets/style/css/index.css">
</head>
<body>
    <div class="paralax">
        <img class="paralax-elem" data-speed="0.1" src="assets/img/paralax/stars.png" alt="forground trees">

        <?php include_once  'include/header.php'; ?>

        <div class="container">

        </div>
    
        <div class="blur"></div>    
        <div class="refresher"> </div>
    </div>
</body>
</html>