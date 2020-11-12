const fs = require('fs');
//const moment = require('moment');

const statist = (cart, action) => {
  fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
  if (!err) {
    var stats = JSON.parse(data); 
    stats.push({
        'action':`${action}`,
        'title':`${cart.product_name}`,
        'date':`${new Date()}`
    });
    fs.writeFile('./server/db/stats.json', JSON.stringify(stats, null, 4), (err) => {
  })
  }
});
};
module.exports = statist;