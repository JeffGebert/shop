
//javascript class
//require package

const {Client} = require('pg')

//create connection
const db = new Client({
	connectionString:'postgres://postgres:Oscar@localhost:5432/Shop'
})
//const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
//connect to database

db.connect((err) =>{
	if (err) {
		console.log('Error connecting to PostgreSQL database')
	} else {
		console.log('Connected to PostgreSQL database')
	}

})


module.exports = db
