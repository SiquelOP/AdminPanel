<?php
    require_once 'database.php';

    $user = $_SESSION['user'];
    $productId = $_POST['id'];

    $stmt = $connection -> prepare('SELECT * FROM cart JOIN products p ON productId = p.id WHERE userLogin = :login AND productId = :id');
    $stmt -> execute([':login' => $user['login'], ':id' => $productId]);
    $product = $stmt -> fetchAll();

    $product = $product != null ? $product[0] : null;

    if( $product != null) {
        if( $product['quantity'] - 1 <= 0 ) {
            $stmt = $connection -> prepare('DELETE FROM cart WHERE userLogin = :login AND productId = :id');
            $stmt -> execute([':login' => $user['login'], ':id' => $productId]);
    
            $stmt = $connection -> prepare('UPDATE products SET stock = :stock WHERE id = :id');
            $stmt -> execute([':stock' => $product['stock'] + 1, ':id' => $productId]);
    
            echo json_encode(['success' => false, 'out' => true, 'message' => 'Usunięto z koszyka!']);
        }
        else {
            $stmt = $connection -> prepare('UPDATE cart SET quantity = :quantity WHERE userLogin = :login AND productId = :id');
            $stmt -> execute([':quantity' => $product['quantity'] - 1, ':login' => $user['login'], ':id' => $productId]);
    
            $stmt = $connection -> prepare('UPDATE products SET stock = :stock WHERE id = :id');
            $stmt -> execute([':stock' => $product['stock'] + 1, ':id' => $productId]);
    
            echo json_encode(['success' => true, 'quantity' => $product['quantity'] - 1]);
        }
    }
    else {
        echo json_encode(['success' => false]);
    }

?>