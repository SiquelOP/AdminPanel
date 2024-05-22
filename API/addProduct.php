<?php 
    require_once 'database.php';

    $name = $_POST['name'];
    $img = $_POST['img'];
    $price = $_POST['price'];
    $stock = $_POST['stock'];
    $desc = $_POST['desc'];

    $stmt = $connection -> prepare('INSERT INTO products VALUES (null, ?, ?, ?, ?, ?)');
    $stmt -> execute([$name, $img, $price, $stock, $desc]);

    echo json_encode(['success' => true, 'message' => 'Nowy produklt dodano pomyślnie do bazy danych!']);
?>