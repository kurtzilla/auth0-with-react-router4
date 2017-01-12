var express = require('express');
var app = express();

app.use(express.static('build'));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build/index.html'));
// });

app.listen(process.env.PORT || 8080);