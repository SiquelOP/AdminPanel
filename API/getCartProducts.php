<?php
    require_once 'database.php';

    $user = $_SESSION['user'];

    $stmt = $connection -> prepare('SELECT p.id, p.name, p.img, p.price, quantity FROM cart JOIN products p ON productId = p.id WHERE userLogin = :login');
    $stmt -> execute([':login' => $user['login']]);
    $products = $stmt -> fetchAll();

    echo json_encode(['success' => true, 'products' => $products]);
?>