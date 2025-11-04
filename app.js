const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req,res) => {
    res.send('Hello! This is a basic node server');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));