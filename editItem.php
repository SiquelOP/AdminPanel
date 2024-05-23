<?php
    session_start();
    if ($_SESSION['user']['authorization'] < 3) {
        header("location: index.php");
    }
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eurozon - Edit</title>
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="assets/script/main.js" defer></script>
    <script src="assets/script/mouseParalax.js" defer></script>
    <script src="assets/script/loadEditCard.js" defer type="module"></script>
    <link rel="stylesheet" href="assets/style/css/editItem.css">
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