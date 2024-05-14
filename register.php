<?php
    session_start();
    // Jeśli użytkownik jest już zalogowany, przekieruj go na stronę główną.
    if (isset($_SESSION['user'])) {
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
    <script src="assets/script/register.js" defer></script>
    <script src="assets/script/mouseParalax.js" defer></script>
    <script src="assets/script/showHidePassword.js" defer></script>
    <link rel="stylesheet" href="assets/style/css/register.css">
</head>
<body>
<div class="paralax">
        <img class="paralax-elem" data-speed="0.1" src="assets/img/paralax/stars.png" alt="forground trees">
        <img class="paralax-elem" data-speed="0.075" src="assets/img/paralax/moon.png" alt="forground trees">
        <img class="paralax-elem" data-speed="0.05" src="assets/img/paralax/mountains_behind.png" alt="forground trees">

        <?php
            include 'include/registerForm.php'
        ?>
        
        <img class="paralax-elem" data-speed="0.01" src="assets/img/paralax/mountains_front.png" alt="forground trees">
    </div>

    <div class="blur"></div>
    <div class="refresher"> </div>
</body>
</html>