const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  brand_name: String,
  cancel_qty: Number,
  cat_big: String,
  cat_first: String,
  cat_second: String,
  cat_third: String,
  category: String,
  final_price: Number,
  has_volume: Boolean,
  image: String,
  platform: String,
  product_id: String,
  product_title: String,
  room_id: String,
  source: Number,
})
module.exports = mongoose.model('Goods', schema)
