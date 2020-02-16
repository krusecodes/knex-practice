// echo >> ./src/practice.js
// node ./src/practice.js
require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
  })

knexInstance.from('amazong_products').select('*')
  .then(result => {
      console.log(result)
  })

require('dotenv').config()
const knexInstance = knex({
  client: 'pg',
  conenction: process.env.DB_URL
})

console.log('knex and driver installed correctly');