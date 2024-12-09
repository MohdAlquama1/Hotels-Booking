# Full-Stack Project

This is a full-stack application with separate **client** and **server** directories. The client is built with front-end technologies, while the server handles the back-end logic.

---

## **Project Structure**

##**Example**
....../
│
├── client/
│   ├── src/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── styles.css
|   |   └── server 
│   └── package.json

## Steps to Update and Run the Project
1. Move the server Directory

    **Cut the server folder from client/src/ and paste it directly into the orther-root/.**
    Update any relative file paths in server/index.js to ensure they point to the correct locations (e.g., database files, configurations).

2. Update Server Script in server/index.js

Make sure the index.js file in the server directory starts the server properly.


├── server/
│   ├── src/
│   │   ├── server.js
│   │   ├── routes.js
│   │   └── db.js
│   └── package.json
│
└── README.md
