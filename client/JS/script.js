console.log('Hello')
//await for window load
//window.onload = () {
	//let wrap = document.getElementById('wrap')
	//console.log(wrap)
//}



window.onload =() =>{

	let ul = document.getElementsByTagName('ul')[0]
	let categories = ['Wallets', 'Bags', 'Shoes', 'Umbrella']
	categories.forEach((c) =>{
		ul.insertAdjacentHTML('beforeEnd',`,<li><a href="#">${c}</a></li>`)

	})

	}
