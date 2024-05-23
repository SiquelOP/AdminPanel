<?php
    require_once 'index.php'; 
    if ($_SESSION['user']['authorization'] < 3) {
        header("location: index.php");
    }
?>

