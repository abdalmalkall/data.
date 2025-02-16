const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// استخدام body-parser لتحليل بيانات الـ POST
app.use(bodyParser.json());

// نقطة نهاية GET بسيطة
app.get('/', (req, res) => {
  res.send('Welcome to the Social Network API!');
});

// تشغيل السيرفر على المنفذ 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    text: { type: String },
    image: { type: String }
});

module.exports = mongoose.model("User", UserSchema);
