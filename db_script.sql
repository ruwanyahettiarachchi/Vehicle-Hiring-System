-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2024 at 08:22 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ass_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `catering`
--

CREATE TABLE `catering` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `extra` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `catering`
--

INSERT INTO `catering` (`id`, `type`, `extra`, `quantity`, `date`, `created_at`, `updated_at`) VALUES
(1, 'Wedding', 'Flowers', '100', '2024-04-10', '2024-04-03 17:33:40', '2024-04-03 17:33:40'),
(2, 'Corporate Event', 'Balloons', '50', '2024-05-15', '2024-04-03 17:33:40', '2024-04-03 17:33:40'),
(3, 'Birthday Party', 'Cake', '20', '2024-06-20', '2024-04-03 17:33:40', '2024-04-03 17:33:40'),
(4, 'Wedding', 'Flowerss', '100', '2024-04-09', '2024-04-03 12:12:48', '2024-04-03 12:12:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catering`
--
ALTER TABLE `catering`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catering`
--
ALTER TABLE `catering`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
