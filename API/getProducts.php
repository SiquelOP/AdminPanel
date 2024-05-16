<?php
    require_once 'database.php';

    $stm = $connection -> prepare('SELECT * FROM products');
    $products = $stmt -> execute() -> fetchAll(PDO::FETCH_COLUMN);

    echo json_encode(['success' => true, 'products' => $products]);
?>