<?php 
    require_once 'database.php';

    $login = $_POST['login'];

    $stmt = $connection -> prepare('SELECT login FROM users');
    $stmt -> execute();

    $logins = $stmt -> fetchAll(PDO::FETCH_COLUMN);

    
    if ( in_array($login, $logins) ) {
        echo false;
    }

    else {
        echo true;
    }

?>