const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser())

app.get('/', (req, res) => {
  res.json({

  })
});

app.listen(process.env.PORT || 3100, () => {
  console.log('API running!')
});
