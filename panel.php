<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        session_start();

        if (!isset($_SESSION['user_authorization'])) {
            header("location: login.php");
        }
        else if ($_SESSION['user_authorization'] != 2) {
            echo $_SESSION['authorization'];
            header("location: index.php");
        }   

        echo $_SESSION['user_authorization'];
    ?>
    
</body>
</html>