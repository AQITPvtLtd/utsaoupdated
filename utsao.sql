-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2024 at 08:48 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `utsao`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact-form`
--

CREATE TABLE `contact-form` (
  `id` varchar(200) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `subject` varchar(2000) NOT NULL,
  `message` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `razorpay_order_id` varchar(1000) NOT NULL,
  `razorpay_payment_id` varchar(1000) NOT NULL,
  `razorpay_signature` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Sno` int(11) NOT NULL,
  `id` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `catalog` varchar(2000) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `price` int(12) NOT NULL,
  `image1` varchar(200) NOT NULL,
  `image2` varchar(200) NOT NULL,
  `image3` varchar(200) NOT NULL,
  `image4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Sno`, `id`, `name`, `catalog`, `description`, `price`, `image1`, `image2`, `image3`, `image4`) VALUES
(12, '37ffcb20-a898-4def-a5e6-c41b6a2a23bd', 'Christmas Gifts 3', '<p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- kulfi Almond - 100 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Strawberry Almond - 100 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift, but it is also customized to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'ChristmanGifts3.1.jpg', 'ChristmanGifts3.2.jpg', '', ''),
(3, '3f174826-6417-4c9b-8e72-4584eed778c0', 'Premium Gifts 2', '<p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- kulfi Almond - 150 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Strawberry Almond - 150 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift, but it is also customised to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'premiumGifts2.1.png', '', '', ''),
(5, '4cbb9f4f-baeb-4567-a925-916f9695c2fd', 'Christmas Gifts', '<p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Strawberry Cashew - 150 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Paan Almond - 150 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-b', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift but it is also customized to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'ChristmasGifts.jpg', '', '', ''),
(13, '62615b76-992f-4621-89ec-9605b1d6cb9c', 'Christmas Gifts 4', '<p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- kulfi Almond - 100 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Strawberry Almond - 100 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift, but it is also customized to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'ChristmanGifts4.1.jpg', '', '', ''),
(4, '77de47bd-4dc3-4843-870f-76279df68e99', 'Combo Christmas Gifts', '<p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Strawberry Cashew - 150 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Paan Almond - 150 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-b', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift, but it is also customised to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'comboChristmasGifts.jpg', '', '', ''),
(11, '961ad799-7629-4afe-9175-7fecde17d9b2', 'Christmas Gifts 2', '<p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- kulfi Almond - 100 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Strawberry Almond - 100 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift but it is also customized to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'ChristmanGifts2.1.jpg', 'ChristmanGifts2.2.jpg', '', ''),
(1, 'a1019c99-d0c6-4b5e-846a-e3e02a22634f', 'Premium Gifts', '<p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- 3 Jars of Kurkure Dry Fruits</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- 3 Scotch Glasses</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-botto', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift, but it is also customized to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'premiumGifts1.jpg', 'premiumGifts2.jpg', 'premiumGifts3.jpg', ''),
(14, 'ad25fa3b-f101-4ca8-9115-a012a4ec913b', 'Christmas Gifts 5', '<p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Rainbow Mixfruit Raisins - 100 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-top: 0px; margin-bottom: 1rem; color: rgb(125, 125, 125); font-family: Lora, serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-size: 10.5pt;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; font-family: Arial;\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; color: rgb(25, 25, 25);\"><span style=\"box-sizing: inherit; transition: all 0.3s ease 0s; background-color: rgb(255, 255, 255);\">- Khatti-Mitthi Raisins - 100 gms</span></span></span></span></p><p style=\"box-sizing: inherit; margin-t', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift, but it is also customised to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'ChristmanGifts5.1.jpg', '', '', ''),
(15, 'd154255b-19f7-4e84-870f-7e6f9ee83210', 'Dry Fruit Delight', '', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift, but it is also customized to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'festiveGift1.1.png', 'festiveGift1.2.png', 'festiveGift1.3.png', ''),
(2, 'd65eb858-5963-4b04-b39d-9994b31c7e51', 'Combo Pack', '', 'UTSAO provides corporate gifting with a personal touch. This means that not only are you getting the perfect gift, but it is also customized to your company\'s needs. So whether your giftee prefers salty or sweet, we have got them covered!', 0, 'comboPack.jpg', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` int(12) NOT NULL,
  `password` varchar(200) NOT NULL,
  `cart` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `phone`, `password`, `cart`) VALUES
('52a2e697-1cd4-43a0-bb85-8598e3cc2705', 'Admin', 'sehgalmeenu07@gmail.com', 2147483647, '$2a$10$ZJCho/2v3m.OluGrY5bIfOyLB70nE3NR2V78ILFMyWoK2dWiROawO', ''),
('a26ed4b3-1d43-414e-8670-514c75e1dbe5', 'Palak', 'palaksehgal0707@gmail.com', 2147483647, '$2a$10$H5I7Dus9VJKV915a7.DCO.K0P2QjVaXyDSfo32sQuBFlGMelaw8ou', ''),
('adef27fe-e4ce-467c-b5bd-3f5ae018a5b2', 'Palak', 'plksehgal@gmail.com', 1234321766, '$2a$10$CbVJ.HLf4SXYJMSfPheNW.Pz6bKxNodmCh.nR2bLkmgoE3xukD2Vm', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact-form`
--
ALTER TABLE `contact-form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Sno` (`Sno`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `Sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
