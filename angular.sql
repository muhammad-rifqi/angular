-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 26, 2020 at 01:49 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `basicsalary` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `groups` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `username`, `firstname`, `lastname`, `email`, `birthdate`, `basicsalary`, `status`, `groups`) VALUES
(1, 'admin', 'muhammad ', 'rifqi', 'muhammad45rifki@gmail.com', '2020-04-14', '7000000', 'employee', 'IT'),
(4, 'BCL-001-0241', 'Rifqi', 'Muhammad', 'muhammad45rifki@gmail.com', '2020-12-12', '7000000', 'Merried', 'IT'),
(5, 'BCL-001-0255', 'Toomy', 'Alfarabi', 'tommy@localhost.com', '2020-12-12', '5000000', 'Merried', 'IT'),
(6, 'root', 'root admin', 'adminsitrator', 'php45mysql@gmail.com', '2020-12-12', '123810293', 'Merried', 'IT'),
(8, 'BCL-001-0241', 'Rifqi', 'Muhammad', 'muhammad45rifki@gmail.com', '2020-12-12', '9809809', 'Merried', 'IT'),
(9, 'BCL-001-0255', 'Rifqi', 'Muhammad', 'muhammad45rifki@gmail.com', '2020-12-12', '79080800', 'Merried', 'IT'),
(10, 'exhibitor', 'exhibitor', 'exhibitor', 'exhibitor@gmail.com', '2020-12-12', '3423984721093', 'Merried', 'IT'),
(11, 'BCL-001-0255', 'Rifqi', 'Muhammad', 'muhammad45rifki@gmail.com', '2020-12-12', '7097091234', 'Merried', 'IT'),
(12, 'admin', 'admin', 'adminsitrator', 'admin@localhost.com', '2020-12-12', '2342342', 'Merried', 'IT'),
(13, 'BCL-001-0255', 'Rifqi', 'Muhammad', 'muhammad45rifki@gmail.com', '2020-12-12', '3981723897', 'Merried', 'IT');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `username`, `password`, `email`, `status`) VALUES
(1, 'admin', 'admin', 'muhammad45rifki@gmail.com', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
