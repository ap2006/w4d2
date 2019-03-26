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

// // Insert values into the database
// knex('famous_people')
//   .insert({first_name: 'Reese', last_name: 'Witherspoon', birthdate: '1976-03-22'})
//   .returning('*')
//   .then(rows => console.log(rows))

const firstName = process.argv[2]
const lastName = process.argv[3]
const birthDate = process.argv[4]

  function addPerson(firstName, lastName, birthDate) {
    knex('famous_people')
      .insert({ first_name: firstName, last_name: lastName, birthdate: birthDate })
      .returning('*')
      .then(rows => console.log(rows))
  }

  addPerson(firstName, lastName, birthDate);
