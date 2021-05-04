const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  src: String,
})
module.exports = new mongoose.model('SlideShow', schema)
