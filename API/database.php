<?php 
    session_start();
    class Database {
        private $servername = 'localhost';
        private $username = 'root';
        private $password = '';
        private $dbname = 'projectbase';
        private $conn;
    
        // Konstruktor klasy - inicjalizacja połączenia
        public function __construct() {
            try {
                $this -> conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this -> username, $this -> password);
                $this -> conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e) {
                echo json_encode(['error' => $e -> getMessage()]);
            }
        }
    
        // Metoda zwracająca połączenie
        public function getConnection() {
            return $this -> conn;
        }
    }

    $database = new Database();
    $connection = $database -> getConnection();

?>