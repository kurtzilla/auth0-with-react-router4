const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('build'));
app.get('*', (req, res) => {
  const appPath = path.join(__dirname, 'build/index.html');
  console.log('SERVING FROM', appPath)
  res.sendFile(appPath);
});

app.listen(process.env.PORT || 3050, () => console.log('Listening on port ' + process.env.PORT));