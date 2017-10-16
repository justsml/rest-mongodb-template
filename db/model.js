const connString = 'localhost/mydb'
const db = require('monk')(connString)
const items = db.get('items')

module.exports = {
  items
};
