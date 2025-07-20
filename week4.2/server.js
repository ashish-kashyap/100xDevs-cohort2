const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const possibleTitles = [
    "Buy Groceries",
    "Walk the Dog",
    "Finish Report",
    "Call Mom",
    "Go to Gym",
    "Read a Book",
    "Clean the House",
    "Pay Bills",
    "Schedule Appointment",
    "Learn a New Skill"
];

const possibleDescriptions = [
    "Remember to get milk, eggs, and bread.",
    "Take Buster for a long walk in the park.",
    "The quarterly financial report is due soon.",
    "Just a quick check-in call.",
    "Don't forget leg day!",
    "Pick up a new novel from the library.",
    "Dust, vacuum, and mop all rooms.",
    "Electricity and internet bills are due.",
    "Dental check-up appointment.",
    "Start learning a new programming language."
];

app.get('/todos', (req, res) => {
  const numberOfTodos = getRandomInt(1, 5);
  const todos = [];

  for(let i=0; i<numberOfTodos; i++) {
    const id = Date.now();
    const title = possibleTitles[getRandomInt(0, possibleTitles.length - 1)];
    const description = possibleDescriptions[getRandomInt(0, possibleDescriptions.length - 1)];

    todos.push({
      id: id,
      title: title,
      description: description
    });
  }
  res.json(todos);
})

// Start server
app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
    console.log(`Access todos at http://localhost:${port}/todos`);
});