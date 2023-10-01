const mongoose = require('mongoose');
// local db settingss
mongoose.connect('mongodb+srv://kkachhi178:YmtR5WIcHAjCWYtW@cluster0.enakoxn.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
