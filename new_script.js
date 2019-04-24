const settings = require("./settings"); // settings.json
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: settings.host,
    user: settings.user,
    password: settings.password,
    database: settings.database
  }
})

function getData (name) {

}
// console.log(result.rows);
function outputData(err, rows) {
console.log(err, rows);
}

function main(name) {
  knex.from('famous_people')
    .where({ first_name: name })
    .orWhere({ last_name: name })
    .asCallback(outputData)
    .then(() => knex.destroy());
}

main(process.argv[2]);
