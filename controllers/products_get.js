

const db = require('./db.js')

module.exports = (req, res) =>{
	db.query('SELECT * FROM products', (err, result)=> {
		if (err) {
			console.log('err',err)
		}else{
			res.send(result.rows) //results back to client
			//console.log('results', results.rows) webpage
		}
	})
}// Run Serv
