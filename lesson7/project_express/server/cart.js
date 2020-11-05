// const stat = require('./statistic');;
const fs = require('fs');

const add = (cart, req) => {
  cart.contents.push(req.body);
  cart.countGoods++;
  fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
  if (!err) {
    var stats = JSON.parse(data); 
    stats.contents.push({'action':'add','title':`${req.body.product_name}`,'date':`${new Date()}`});
    fs.writeFile('./server/db/stats.json', JSON.stringify(stats, null, 4), (err) => {
  })
  }
});
  // stat(cart, 'add','./server/db/stats.json');
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;

  fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
  if (!err) {
    var stats = JSON.parse(data); 
    stats.contents.push({'action':'add','title':`${find.product_name}`,'date':`${new Date()}`});
    fs.writeFile('./server/db/stats.json', JSON.stringify(stats, null, 4), (err) => {
  })
  }
});
  // stat(cart, 'plus 1','./server/db/stats.json');
  return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  if (find.quantity > 1) {
    find.quantity -= req.body.quantity;
    // stat(cart, 'minus 1','./server/db/stats.json');
  } else {
    cart.contents.splice(cart.contents.indexOf(find), 1);
    cart.countGoods--;
    // stat(cart, 'delete','./server/db/stats.json');
  };
  fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
  if (!err) {
    var stats = JSON.parse(data); 
    stats.contents.push({'action':'delete','title':`${find.product_name}`,'date':`${new Date()}`});
    fs.writeFile('./server/db/stats.json', JSON.stringify(stats, null, 4), (err) => {
  })
  }
});
  return JSON.stringify(cart, null, 4);
};
module.exports = {
  add,
  change,
  del, 
};
