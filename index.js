const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
const parser = require('body-parser')
const knex = require('./knex');

app.use(cors())
app.use(parser.json())

app.get('/', (req, res) => {
    knex('list')
    .then((items) => {
      res.send(items);
    })
    .catch((err) => {
      next(err);
    });
})

app.post('/', (req, res, next) => {
  console.log(req.body)
  knex('list').insert(req.body) 
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    next(err);
  });
})

app.delete('/:id', (req, res, next) => {
  knex('list').where({id: req.params.id}).del()
  .then(data => {
      res.status(200).send({
      message: 'Method deleted',
      data: data
    })
  })
    .catch((err)=> {
      next(err)
    })
})

app.put('/:id', (req, res, next) => {
  knex('list').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(200);
  })
  .catch((err) => {
    next(err);
  });
})



app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))