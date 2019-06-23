// Config

const express = require('express')
const path = require('path')
const app = express()

//database
//const db = require('./controllers/db.js')

// Static Files

// serve every file inside 'client' folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/products.html'))
	console.log('__dirname', __dirname)
})



// app.get('/categories', (req, res) => {
// 	db.query('SELECT * FROM categories', (err, result)=> {
// 		if (err) {
// 			console.log('err',err)
// 		}else{
// 			res.send(result.rows) //results back to client
// 			//console.log('results', results.rows) webpage
// 		}
// 	})
// })//

//API

app.get('/api/products', require('./controllers/products_get.js'))
app.get('/api/products/:id', require('./controllers/products_getx.js'))
app.get('/api/categories', require('./controllers/categories_get.js'))

// Run

app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
