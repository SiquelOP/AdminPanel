<?php
        session_start();

        // if user is not logged in, redirect to login page
        if (!isset($_SESSION['user'])) {
            header("location: landing.php");
        }
        // if user is not an admin, redirect to index page
        else if ($_SESSION['user'][2] < 3) {
            header("location: index.php");
        }   
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AdminPanel - Eurozon</title>
</head>
<body>
    
</body>
</html>