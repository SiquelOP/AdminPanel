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

    <?php
        include 'include/paralax.php';
        include 'include/registerForm.php'
    ?>
    </div>
    
</body>
</html>