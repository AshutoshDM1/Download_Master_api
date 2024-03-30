const express = require( 'express' );
const app = express();

let  port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

const jsonJohn = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};
const jsonAshu = {
  Name : 'Ashutosh tiwari',
  Age : 23,
  Skill : "coding"
};

// Route handler to send JSON data
let home = "<h1>Welcome  to DownloadMaster API </h1> <h2>Here are Two Route /api/john</h1> <h2>and/api/ashu</h1>"

app.get('/', (req, res) => {
  res.send(home);
});
app.get('/api/john', (req, res) => {
  // Send JSON response
  res.json(jsonJohn);
});
app.get('/api/ashu', (req, res) => {
  // Send JSON response
  res.json(jsonAshu);
});

