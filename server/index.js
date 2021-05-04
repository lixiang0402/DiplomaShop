const express = require('express')
const app = express()
app.use(require('connect-busboy')())
app.use(express.json())
app.use(require('cors')())
app.use('/uploads', express.static(__dirname + '/uploads'))

// 引入数据库
require('./db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)
const multer = require('multer')
// 处理前端传来的图片
const upload = multer({ dest: __dirname + '/./uploads' })
app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file
  file.url = `http://localhost:3333/uploads/${file.filename}`
  res.send(file)
})

app.listen(3333, () => {
  console.log('监听3333端口成功')
})
