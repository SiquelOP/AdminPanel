<?php
    require_once 'getItem.php';

    $user = $_SESSION['user'];

    $stmt = $connection -> prepare('SELECT * FROM cart WHERE productId = :id AND userLogin = :login');
    $stmt -> execute([':id' => $product['id'], ':login' => $user['login']]);

    $cartProduct = $stmt -> fetch();
    $quantity = $cartProduct ? ($cartProduct['quantity'] + 1) : 1;

    if($product['stock'] >= 1) {
        if($quantity == 1) {
            $stmt = $connection -> prepare('INSERT INTO cart VALUES (null, :login, :productId, :quantity)');
            $stmt -> execute([':login' => $user['login'], ':productId' => $product['id'], ':quantity' => $quantity]);
        } else {
            $stmt = $connection -> prepare('UPDATE cart SET quantity = :quantity WHERE productId = :productId AND userLogin = :login');
            $stmt -> execute([':quantity' => $quantity, ':productId' => $product['id'], ':login' => $user['login']]);
        }
        $stmt = $connection -> prepare('UPDATE products SET stock = :quantity WHERE id = :id');
        $stmt -> execute([':quantity' => $product['stock'] - 1, ':id' => $product['id']]);
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Product is out of stock']);
    }
    

    
?>