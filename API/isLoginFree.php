<?php 
    require_once 'database.php';

    $login = $_POST['login'];

    $stmt = $connection -> prepare('SELECT login FROM users');
    $stmt -> execute();

    $logins = $stmt -> fetchAll(PDO::FETCH_COLUMN);

    
    if ( in_array($login, $logins) ) {
        echo json_encode(['success' => false]);
    }

    else {
        echo json_encode(['success' => true]);
    }

?>