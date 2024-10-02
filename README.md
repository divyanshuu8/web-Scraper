# 🛒 PriseWise - Scraping Tool

[![Deploy Status](https://img.shields.io/badge/Deployed-Live-blue)](https://your-deployed-link-here.com)

**PriseWise** is a powerful web scraping tool designed to help users extract and track product information from Amazon, enabling them to receive alerts for price changes, stock updates, and more.

## 🚀 Tech Stack

- **Next.js**: React framework for server-side rendering and API integration.
- **Bright Data**: Proxy service for reliable web scraping.
- **Cheerio**: Fast, flexible, and lean implementation of core jQuery for server-side HTML manipulation.
- **Nodemailer**: Email sending functionality for notifications.
- **MongoDB**: NoSQL database for storing scraped product data and user preferences.
- **Headless UI**: Accessible UI components built for Tailwind CSS.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## 🔋 Features

### 👉 Header with Carousel
A visually appealing header that grabs attention, featuring a carousel showcasing key features and benefits of PriseWise.

### 👉 Product Scraping
Includes a search bar where users can input Amazon product links for scraping product details such as title, price, images, and more.

### 👉 Scraped Projects
A dynamic section that displays details of the products scraped so far, providing users with insights into the items they are tracking.

### 👉 Scraped Product Details
Displays the scraped product information in a user-friendly layout, including:
- **Product Image**: High-quality product visuals.
- **Product Title**: Clear, concise product names.
- **Pricing**: The latest price scraped from Amazon.
- **Additional Details**: Key product specs and descriptions.

### 👉 Track Option
Modal pop-up allowing users to input their email address and opt-in to track their favorite products for any updates.

### 👉 Email Notifications
Automatically sends users alerts for different scenarios such as:
- **Back in Stock**: When the product is available again.
- **Lowest Price**: Alerts when a product drops below a certain price.

### 👉 Automated Cron Jobs
Utilizes cron jobs to automate periodic scraping, ensuring that product data is always fresh and up-to-date without manual intervention.

### ...And More!
The architecture is built for reusability, ensuring that you can expand or modify the functionality of PriseWise efficiently.

---

## 📡 Deployed Version

Check out the live version of **PriseWise**: [https://your-deployed-link-here.com](https://your-deployed-link-here.com)

---

## 💻 Getting Started

1. **Clone the repo**:  
   ```bash
   git clone https://github.com/divyanshuu8/web-Scraper.git)
   npm install
   npm run dev
