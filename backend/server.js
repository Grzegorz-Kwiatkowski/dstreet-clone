const express = require('express');
const cors = require('cors');
const data = require('./data.js');
const app = express();

app.use(cors());
app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/delivery', (req, res) => {
  res.send(data.delivery);
});

app.get('/api/international_shipments',(req,res)=>{
  res.send(data.international_shipments);
})
app.use(express.static('frontend/assets'));

app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});