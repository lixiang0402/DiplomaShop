const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  title: String,
  src: String,
})
module.exports = mongoose.model('CardList', schema)
