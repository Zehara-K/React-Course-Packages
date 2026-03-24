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
 ├── Courselist.js   
 ├── Curse.js        
 ├── useFetch.js     
 └── data/
      └── dummydata.json 
      
📌 Notes
Deleting a course only updates the local state; changes won’t persist unless you edit the JSON file.

