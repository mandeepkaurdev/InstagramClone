const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
mongoose.set('useCreateIndex', true);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://user:password3@ds135532.mlab.com:35532/heroku_wlbjj639', { useNewUrlParser: true });

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});
