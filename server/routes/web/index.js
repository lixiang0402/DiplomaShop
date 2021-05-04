module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true,
  })
  // 引入商品模型
  const Goods = require('../../models/Goods')
  const SlideShow = require('../../models/SlideShow')
  const CardList = require('../../models/CardList')
  // 使用中间件
  app.use('/web/api', router)

  // 主页获取商品列表
  router.post('/lists', async (req, res) => {
    // console.log(req.body.data)
    let { page, size } = req.body.data
    const items = await Goods.find()
      .skip((page - 1) * size)
      .limit(size)
    res.send(items)
  })

  // 模糊查询 查找商品
  router.get('/list/:word?', async (req, res) => {
    let word = req.query.word
    const items = await Goods.where({
      product_title: { $regex: word, $options: 'i' },
    })
    res.send(items)
  })

  // 获取轮播图
  router.get('/slideshow', async (req, res) => {
    const items = await SlideShow.find()
    res.send(items)
  })
  // 获取卡片列表
  router.get('/cardlist', async (req, res) => {
    const items = await CardList.find()
    res.send(items)
  })
}
