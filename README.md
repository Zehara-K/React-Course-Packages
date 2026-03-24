# React-Course-Packages
A simple React application that displays a list of courses, lets users purchase them, and delete courses dynamically.

✨ Features
Fetch course data from a local JSON server using a custom hook (useFetch)

Display courses with details: name, image, price, and rating

Simulate course purchase with a discount message

Delete courses dynamically from the list

Handle loading and error states gracefully

🛠️ Tech Stack
React (functional components, hooks)

PropTypes (type checking)

JSON Server (mock backend for course data)

📂 Project Structure
Code
src/
 ├── Courselist.js   # Renders course list
 ├── Curse.js        # Course card component
 ├── useFetch.js     # Custom hook for fetching data
 └── data/
      └── dummydata.json  # Sample course data
      
🚀 Getting Started
1. Clone the repository
bash
git clone https://github.com/Zehara-K/react-course-list.git
cd react-course-list
2. Install dependencies
bash
npm install
3. Start JSON Server
bash
npx json-server --watch data/dummydata.json --port 3000 --static ./data
4. Run React app
bash
npm start
5. Open in browser
Visit:

Code
http://localhost:3000

📌 Notes
Deleting a course only updates the local state; changes won’t persist unless you edit the JSON file.

