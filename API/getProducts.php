<?php
    require_once 'database.php';

    $stmt = $connection -> prepare('SELECT * FROM products');
    $stmt -> execute();
    $products = $stmt -> fetchAll();

    echo json_encode(['success' => true, 'products' => $products]);
?>