-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2023 at 07:30 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_soil`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tests`
--

CREATE TABLE `tbl_tests` (
  `test_id` int(12) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `lat` float NOT NULL,
  `lang` float NOT NULL,
  `date_received` varchar(255) NOT NULL,
  `date_analyzed` varchar(255) NOT NULL,
  `rla_no` varchar(255) NOT NULL,
  `sample_code` varchar(255) NOT NULL,
  `moisture` float NOT NULL,
  `temp` float NOT NULL,
  `nitrogen` float NOT NULL,
  `phosphorus` float NOT NULL,
  `potassium` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_tests`
--

INSERT INTO `tbl_tests` (`test_id`, `owner`, `address`, `lat`, `lang`, `date_received`, `date_analyzed`, `rla_no`, `sample_code`, `moisture`, `temp`, `nitrogen`, `phosphorus`, `potassium`) VALUES
(3, 'John Smith', 'Carigara, Leyte', 12, 12, '2023-02-06', '2023-02-10', '123', '', 96, 26, 60, 90, 82);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_tests`
--
ALTER TABLE `tbl_tests`
  ADD PRIMARY KEY (`test_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_tests`
--
ALTER TABLE `tbl_tests`
  MODIFY `test_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
