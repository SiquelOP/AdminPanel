<?php 
    require_once 'getItem.php';

    $user = $_SESSION['user'];

    $stmt = $connection -> prepare('SELECT * FROM cart WHERE userLogin = :login');
    $stmt -> execute([':login' => $user['login']]);
    $items = $stmt -> fetch();
    
    if ($items['quantity'] > 0) {
        $stmt = $connection -> prepare('UPDATE products SET stock = :quantity WHERE id = :id');
        $stmt -> execute([':quantity' => $product['stock'] + 1, ':id' => $product['id']]);
    
        $stmt = $connection -> prepare('UPDATE cart SET quantity = :quantity WHERE productId = :id AND userLogin = :login');
        $stmt -> execute([':quantity' => $items['quantity'] - 1, ':id' => $product['id'], ':login' => $user['login']]);

        $stmt = $connection -> prepare('DELETE FROM cart WHERE quantity = 0');
        $stmt -> execute();
            
        echo json_encode(['success' => true]);
    } else{
        echo json_encode(['success' => false, 'message' => 'Product is not in your cart.']);
    }
?>