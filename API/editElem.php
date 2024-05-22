<?php 
    require_once 'database.php';

    $id = $_POST('id');

    $stmt = $connection -> prepare('SELECT * FROM products WHERE id = :id');
    $stmt -> execute([':id' => $id]);
    $product = $stmt -> fetch();

    header('location: editItem.php');
?>