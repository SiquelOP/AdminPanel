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
</head>
<body>
    
</body>
</html>