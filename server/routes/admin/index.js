module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true,
  })
  app.use('/admin/api', router)
}
