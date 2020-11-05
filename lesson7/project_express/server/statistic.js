const fs = require('fs');
// const stats = require('./server/db/stats.json');

const statist = (cart, action) => {
  fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
  if (!err) {
    var stats = JSON.parse(data); 
    stats.contents.push({'action':`${action}`,'title':`${cart.product_name}`,'date':`${new Date()}`});
    fs.writeFile('./server/db/stats.json', JSON.stringify(stats, null, 4), (err) => {
  })
  }
});
};
module.exports = statist;