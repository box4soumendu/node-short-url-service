const express = require('express');

const app = express();

//Set the view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extented: false }));

const PORT = process.env.PORT || 2021;

app.listen(PORT, () => console.log(`Server is listning to port: ${PORT}`));
