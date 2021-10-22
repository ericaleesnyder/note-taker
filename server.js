// HTML routes:
//
// GET /notes --> returns notes.html
//      (refer to mini project and activity 22)
//
// GET * --> returns index.html 
//      (refer to mini project and activity 22)


// API routes:
//
// GET /api/notes --> READS db.json and RETURNS all saved notes as JSON
//      (refer to mini project and activity 22)
//
// POST /api/notes -->
//    receives notes to save on request body
//    adds note to db.json file
//    returns new note to the client 
//      (refer to fetch request, activity 18)

// GIVEN a note-taking application

// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page
//      index.html

// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
//      notes.html

// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page

// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column

// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

const { PRIORITY_BELOW_NORMAL } = require("constants");
const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.port || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));


// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// WILDCARD ROUTE - sends the user to HOME PAGE
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

// PROBLEM
// New note NEEDS an ID in order for it to render correctly in the notes view