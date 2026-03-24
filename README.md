# 📚 React Course Listing App

A modern React application that displays a list of courses fetched from a local API. Users can explore courses, purchase them, and remove courses dynamically from the interface. This project demonstrates the use of **custom hooks**, **component-based architecture**, and **state management** in React.

## 🚀 Features

* 📡 Fetch data from a mock API using a custom hook
* 🧩 Reusable `useFetch` hook for clean data handling
* 🛒 Purchase course functionality with UI feedback
* ❌ Delete courses dynamically from the list
* ⏳ Loading and error handling states
* 🎯 Clean and modular component structure

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Language:** JavaScript (ES6+)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Backend (Mock):** JSON Server
* **Styling:** CSS

## 📂 Project Structure

React-Course-Packages/
│
├── App.jsx              # Root component
├── main.jsx             # Entry point
├── courselist.jsx       # Displays list of courses
├── project.jsx          # Course card component
├── usefetch.jsx         # Custom hook for fetching data
├── dummydata.json       # Mock API data
├── index.css            # Styles
└── README.md            # Project documentation

## ⚙️ Getting Started
### 1️⃣ Clone the Repository
git clone https://github.com/Zehara-K/React-Course-Packages.git
cd React-Course-Packages

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Run JSON Server (Mock Backend)
npx json-server --watch data/dummydata.json --port 3000 --static ./data

### 4️⃣ Start the React App
npm run dev

## 🌐 API Endpoint
http://localhost:3000/courses

## 🧠 Key Concepts Implemented
### 🔹 Custom Hook (`useFetch`)

* Encapsulates fetching logic
* Handles loading and error states
* Improves code reusability

### 🔹 Component-Based Design

* `Courselist` → Handles list rendering
* `Curse` (Course Card) → Displays individual course details

### 🔹 State Management

* Tracks purchased courses
* Dynamically updates UI on delete
