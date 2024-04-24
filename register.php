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
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="assets/script/register.js" defer></script>
    <script src="assets/script/mouseParalax.js" defer></script>
    <script src="assets/script/showHidePassword.js" defer></script>
    <link rel="stylesheet" href="assets/style/css/register.css">
    <title>Document</title>
</head>
<body>
    <div class="paralax">
        <img src="assets/img/paralax/stars.png" alt="forground trees">
        <img src="assets/img/paralax/moon.png" alt="forground trees">
        <img src="assets/img/paralax/mountains_behind.png" alt="forground trees">

        <?php
            include 'include/registerForm.php'
        ?>
        
        <img src="assets/img/paralax/mountains_front.png" alt="forground trees">
    </div>
</body>
</html>