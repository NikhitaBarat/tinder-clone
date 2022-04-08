import express from "express";
import mongoose from "mongoose";
import Cards from "./dbcards.js";

// app config
const app = express()
const port = process.env.PORT || 3001

const connection_url = `mongodb+srv://admin:sNKUbHe0C2S0NAl1@cluster0.anabo.mongodb.net/tinderdb?retryWrites=true&w=majority`

// middleware
app.use(express.json())

//db config

mongoose.connect(connection_url)

//api endpoints
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/tinder/card', (req, res) => {
  res.send('Got a POST request')
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    }
    else {
      res.status(201).send(data)
    }
  })
});

app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    }
    else {
      res.status(200).send(data)
    }
  })
})

//listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})