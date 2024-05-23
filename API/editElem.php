<?php 
    require_once 'database.php';

    $id = $_POST['id'];

    $stmt = $connection -> prepare('SELECT * FROM products WHERE id = :id');
    $stmt -> execute([':id' => $id]);
    $product = $stmt -> fetch();

    $name = $_POST['name'];
    $img = $_POST['img'];
    $price = $_POST['price'];
    $stock = $_POST['stock'];
    $description = $_POST['description'];

    $stmt = $connection -> prepare('UPDATE products SET name = :name, img = :img, price = :price, stock = :stock, description = :description WHERE id = :id');
    $stmt -> execute([':name' => $name, ':img' => $img, ':price' => $price, ':stock' => $stock, ':description' => $description, ':id' => $id]);

    echo json_encode(['success' => true]);
?>