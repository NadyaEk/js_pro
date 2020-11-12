const stat = require('./statistic');;
const fs = require('fs');

const add = (cart, req) => {
  cart.contents.push(req.body);
  cart.countGoods++;
  stat(req.body, 'add');
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  stat(find, 'add');
  return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  if (find.quantity > 1) {
    find.quantity -= req.body.quantity;
  } else {
    cart.contents.splice(cart.contents.indexOf(find), 1);
    cart.countGoods--;
  };
  stat(find, 'delete');
  return JSON.stringify(cart, null, 4);
};
module.exports = {
  add,
  change,
  del, 
};