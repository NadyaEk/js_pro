const fs = require('fs');
// const stats = require('./server/db/stats.json');

const statist = (req, res, cart, action, stats) => {
  fs.readFile(stats, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      const newStat = (JSON.parse(data), req);
      newStat.action = action;
      newStat.title = cart.contents.product_name;
      newStat.date = newDate();
      fs.writeFile(stats.push([...newStat]), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  });
};
module.exports = statist;