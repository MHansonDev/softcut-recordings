const express = require('express');
const cors = require('cors');
const genre = require("./routes/genre.js");
const mediaTypes = require("./routes/media-type.js");

const app = express();
app.use(cors())
const port = 3001;

app.use('/genre', genre);
app.use('/mediaType', mediaTypes);

app.get('/', (req, res) => {
  res.send('Media Collection is running');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
