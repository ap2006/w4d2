const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
async function getData () {
  try {
    // Code that could error out.
    await client.connect();
    const result = await client.query(`SELECT * FROM famous_people WHERE first_name = $1::text OR last_name = $1::text`, [process.argv[2]])
    client.end();
    return result.rows
  } catch(err) {
    console.error('Error: ', err)
  }

  // console.log(result.rows);
}
function outputData(rows) {
  rows.forEach(function(row, index) {
    const firstName = row.first_name
    const lastName = row.last_name
    const birthDate = row.birthdate
    // console.log( results.rows );
    console.log(index+1 + ' ' + firstName + ' ' + lastName + ', ' + 'born' + ' ' + birthDate );
  })
}
async function main() {
  const data = await getData();
  outputData(data);
}

main();
