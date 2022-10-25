const express = require('express');
const cors = require('cors');
const mediaTypes = require("./routes/media-type.js");
const genre = require("./routes/genre.js");
const audioInfo = require("./routes/audio-info.js")

const app = express();
app.use(cors())
const port = 3001;

app.use('/mediaType', mediaTypes);
app.use('/genre', genre);
app.use('/audio', audioInfo);

app.get('/', (req, res) => {
  console.log('Start Here');
  res.send('Media Collection is running');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
