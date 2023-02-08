-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2023 at 05:46 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tbl_tests`
--

INSERT INTO `tbl_tests` (`test_id`, `owner`, `address`, `lat`, `lang`, `date_received`, `date_analyzed`, `rla_no`, `sample_code`, `moisture`, `temp`, `nitrogen`, `phosphorus`, `potassium`) VALUES
(3, 'John Smith', 'Carigara, Leyte', 12, 12, '2023-02-06', '2023-02-10', '123', '', 96, 26, 60, 90, 82),
(4, 'John Smith', 'Carigara', 123, 56.1, '2023-02-06', '2023-02-06', 'asdf123', '', 82, 29, 69, 53, 39),
(5, 'juvelyn', 'balud capoocan leyte', 125, 12, '2023-02-06', '2023-02-06', '123456', '', 75, 26, 64, 61, 56),
(6, 'lyn', 'balud capoocan leyte', 125, 123, '2023-02-06', '2023-02-06', '123456', '', 71, 28, 56, 58, 49),
(7, 'JUVELYN JUSAYAN', 'balud capoocan leyte', 125, 123, '2023-02-08', '2023-02-08', '123456', '', 75, 28, 53, 55, 55),
(8, 'JIN', 'BARUGO', 145, 123, '2023-02-08', '2023-02-08', '1277', '', 78, 26, 44, 39, 37),
(9, 'juvelyn', 'balud capoocan leyte', 125, 123, '2023-02-08', '2023-02-08', '123456', '', 77, 23, 65, 89, 62),
(10, 'juvelyn', 'balud capoocan leyte', 125, 123, '2023-02-08', '2023-02-08', '123456', '', 79, 31, 36, 49, 75),
(11, 'JIIIIIIIIIIIIIIIIN', 'MINUSWANG', 16, 15, '2023-02-08', '2023-02-08', '2233344', '', 86, 29, 36, 65, 44);

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
  MODIFY `test_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
