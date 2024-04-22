<?php
    require_once 'database.php';

    $login = $_POST['login'];
    $password = $_POST['passw'];
    
    // Zapytanie o użytkownika do bazy danych
    $stmt = $connection -> prepare('SELECT * FROM users WHERE login = :login');
    $stmt -> bindValue(':login', $login);
    $stmt -> execute();
    
    $user = $stmt -> fetch();
    
    // Jeśli użytkownik istnieje i hasło jest poprawne, zaloguj go.
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user;

        echo json_encode(['success' => true, 'authorization' => $user['authorization']]);
    } else {
        echo json_encode(['success' => false]);
    }
?>