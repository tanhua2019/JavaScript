const express = require('express')
const mongoose = require('mongoose')

//链接mongo
mongoose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: Number, require: true }
}))

User.create({
  user : 'ccc',
  age: 99
}, (err, doc) => {
  if (err) console.log(err);
  console.log(doc);
})

// User.remove({age: 99}, (err, data) => {
//   console.log(data);  
// })

// User.update({user: 'ccc'}, {'$set': {age: 88}}, (err, data) => {
//   console.log(data);
// })


const app = express()

app.get('/data', (req, res) => {
  // res.send('dddddddd')
  User.find({}, (err,doc) => {
    return res.json(doc)
  })
})

app.listen(9992, () => {
  console.log('running');
})