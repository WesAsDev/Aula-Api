const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/:cidade', async (req, res) => {
  const cidade = req.params.cidade

  const resposta = await axios.get(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${cidade}&lang=pt&units=metric`,
    {
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'f664ef1fd3mshaecdf3948b8d1eep185ee7jsnb539abe3e0d1'
      }
    }
  )

  const data = resposta.data

  console.log(data)

  res.send(data)
})

app.listen(3300, console.log('servidor rodando em: http://localhost:3300'))
