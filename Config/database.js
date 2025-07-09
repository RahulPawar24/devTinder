const mongoose = require('mongoose');

const db = 'mongodb+srv://NamasteNodeJS:NodeJS@namastenodejs.qjs8b8w.mongodb.net/devTinder'

const connectDB = async () => {
    await mongoose.connect(db)
}

module.exports = connectDB