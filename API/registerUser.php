<?php 
    require_once 'database.php';

    $login = $_POST['login'];
    $email = $_POST['email'];
    $passw = $_POST['passw'];

    $hash_passw = password_hash($passw, PASSWORD_DEFAULT);

    $stmt = $connection -> prepare("INSERT INTO users VALUES(?, ?, ?, 2)");
    $stmt -> execute([$login, $email, $hash_passw]);

    $user = array(
        'login' => $login,
        'email' => $email,
        'password' => $hash_passw,
        'authorization' => 2
    );

    $_SESSION['user'] = $user;

    echo true;
?>