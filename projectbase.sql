-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2025 at 12:06 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectbase`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `authorization`
--

CREATE TABLE `authorization` (
  `id` int(1) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authorization`
--

INSERT INTO `authorization` (`id`, `name`) VALUES
(1, 'guest'),
(2, 'user'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `cart`
--

CREATE TABLE `cart` (
  `cartId` int(11) NOT NULL,
  `userLogin` varchar(255) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `stock` int(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `img`, `price`, `stock`, `description`) VALUES
(5, 'Miecz świetlny', 'https://tinyurl.com/2ajf64sr', 999999999, 5, 'Tylko teraz! Miecz świetlny twojej matki.\r\nMożesz nim robić dosłownie wszystko! '),
(6, 'Satelita', 'https://tinyurl.com/3tyy9u7j', 450, 5, 'Cygany ukradli stelite ruskom! na promocji. Kupuj póki jest!');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `login` varchar(50) NOT NULL,
  `email` varchar(25) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `authorization` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`login`, `email`, `password`, `authorization`) VALUES
('admin', 'admin@admin.com', 'admin', 3),
('user', 'user@user.pl', '$2y$10$aJKVZKTa9uPQtnq9xjVtl.qQ8BQklZaIG6WrEDFVZ.Taw5SPri9Uq', 2);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `authorization`
--
ALTER TABLE `authorization`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartId`),
  ADD KEY `userLogin` (`userLogin`),
  ADD KEY `productId` (`productId`);

--
-- Indeksy dla tabeli `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`login`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `authorization` (`authorization`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authorization`
--
ALTER TABLE `authorization`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userLogin`) REFERENCES `users` (`login`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`authorization`) REFERENCES `authorization` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
