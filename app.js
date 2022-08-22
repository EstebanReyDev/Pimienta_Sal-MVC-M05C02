const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

app.use(express.static("public"));
app.set('view engine', 'ejs');

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter)