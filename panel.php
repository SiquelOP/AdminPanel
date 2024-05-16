<?php
        session_start();

        // if user is not logged in, redirect to login page
        if (!isset($_SESSION['user'])) {
            header("location: landing.php");
        }
        // if user is not an admin, redirect to index page
        else if ($_SESSION['user']['authorization'] < 3) {
            header("location: index.php");
        }   
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AdminPanel - Eurozon</title>
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="assets/script/main.js" defer></script>
    <link rel="stylesheet" href="assets/style/css/panel.css">
</head>
<body>
    
    <div class="blur"></div>
    <div class="refresher"> </div>
</body>
</html>