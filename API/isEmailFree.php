<?php 
    require_once 'database.php';

    $email = $_POST['email'];

    $stmt = $connection -> prepare('SELECT email FROM users');
    $stmt -> execute();

    $emails = $stmt -> fetchAll(PDO::FETCH_COLUMN);

    
    if ( in_array($email, $emails) ) {
        echo json_encode(['success' => false]);
    }

    else {
        echo json_encode(['success' => true]);
    }

?>