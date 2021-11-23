const express = require('express');
// Initialize Express as an instance named "app".
const app = express();

// Separate these out in case we wanna use Docker or something to wrap the app.
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Best settings for setting up Express as an API server to receive and process JSON & form data.
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/', (request, response) => {

  response.send("Yoko is great!");
});

app.listen(PORT, HOST, () => {
  // Weird in-line conditional string interpolation to handle "0.0.0.0" -> "localhost" conversion
  console.log(`Server is running`);
});