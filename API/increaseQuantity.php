<?php
    require_once 'database.php';

    $user = $_SESSION['user'];
    $productId = $_POST['id'];

    $stmt = $connection -> prepare('SELECT * FROM cart JOIN products p ON productId = p.id WHERE userLogin = :login AND productId = :id');
    $stmt -> execute([':login' => $user['login'], ':id' => $productId]);
    $product = $stmt -> fetchAll();
    $product = $product[0];

    if( $product['stock'] <= 0 ) {
        echo json_encode(['success' => false, 'message' => 'Brak w magazynie!']);
    }
    else {
        $stmt = $connection -> prepare('UPDATE cart SET quantity = :quantity WHERE userLogin = :login AND productId = :id');
        $stmt -> execute([':quantity' => $product['quantity'] + 1, ':login' => $user['login'], ':id' => $productId]);

        $stmt = $connection -> prepare('UPDATE products SET stock = :stock WHERE id = :id');
        $stmt -> execute([':stock' => $product['stock'] - 1, ':id' => $productId]);

        echo json_encode(['success' => true, 'quantity' => $product['quantity'] + 1]);
    }
?>