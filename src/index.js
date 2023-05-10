

const express = require('express')
const app = express()
const port = 3001


app.use(express.json())

const playlists = [
    {
        id: 1,
        nome: "Play1",
        capa: "play2.png"
    },
    {
        id: 2,
        nome: "Play2",
        capa: "play2.png"
    }
]


app.get('/playlists', (req, res) => {
  res.json(playlists);
})

app.post('/playlists', (req, res) => {
    const playlist = req.body;
    playlists.push(playlist)
    res.json(playlist);
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})