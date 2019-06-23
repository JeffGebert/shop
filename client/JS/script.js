console.log('Hello')
//await for window load
//window.onload = ()=> {
	//let wrap = document.getElementById('wrap')
	//console.log("jeff")
	//console.log(wrap)

//}

//window.onload =() =>{

	//let ul = document.getElementsByTagName('ul')[0]
	//let categories = ['Wallets', 'Bags', 'Shoes', 'Umbrella']
	//categories.forEach((c) =>{
		//ul.insertAdjacentHTML('beforeEnd',`,<li><a href="#">${c}</a></li>`)

	//})

	//}
axios.get('http://localhost:3000/api/productsx').then((res) => {
	console.log('res', res.data)
		.catch((error) => {
			console.log('err',err)
		})
	document.addEventListener('click', (e)=>{
		if(e.target.classList.contains('category')){
			axios.get(`http://localhost:3000/api/products/${e.target.id}`.then((res) => {
				console.log('res', res.data)
				let products = res.data
				let products_ui = document.getElementById('products')

				//clear the products

				products_ui.inner_html=''

				if (res.data.length) {
					products.forEach((p) => {
						products_ui.insertAdjacentHTML('beforeEnd', `<div class="product">
									<div class="product-image" style="background-image: url('../img/${p.image}')">
									<i class="far fa-star"></i>
									</div>
									<div class="product-extras">
									<div class="description">
										<h4>${s.name}</h4>
										<small>${s.price}</small>
										</div>
										<div class="price">
										<span>$189.99</span>
										<a href="#" class="button">shop now</a>
										</div>
										</div>
									</div>)
									`)


					})
				}else{
					products_ui.innerHTML = 'No products found.'
				}
			}).catch((err) => {
				console.log('err', err)
			})
		)}
	})








axios.get('http://localhost:3000/api/products').then((res) => {
	console.log('res',res)
	let products = res.data
	window.onload=() =>{
		let il = document.getElementById('products')
		let products = res.data

		//let each product in the dom
		products.forEach((s)=>{
			il.insertAdjacentHTML('beforeEnd', `<div class="product">
						<div class="product-image" style="background-image: url('../img/${p.image}')">
						<i class="far fa-star"></i>
						</div>
						<div class="product-extras">
						<div class="description">
							<h4>${s.name}</h4>
							<small>${s.price}</small>
							</div>
							<div class="price">
							<span>$189.99</span>
							<a href="#" class="button">shop now</a>
							</div>
							</div>
						</div>`)

		})

			.catch((err) => {
				console.log('err', err)
			})
	}
})


//access for categories_get


axios.get('http://localhost:3000/api/categories').then((res) => {
	console.log(res)
	let categories = res.data
	console.log(categories)
	 let il = document.getElementById('categorylist')
	categories.forEach((s)=>{
		il.insertAdjacentHTML('beforeEnd', `
					<li><a href="" class="category" id="${c.id}">${s.name}</a></li>`
		)
	}
	)

})


//jeff=[1,2,3,4,5]
//console.log(jeff)
//setTimeout(() => {
	//jeff.forEach((s)=>{
		//console.log(jeff[s])
	//})
//}, 5000)


const get_data =() => {

	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve ['tony', 'arielle', 'edgar', 'jaschi']
		}, 4000)
	})
}

get_data().then((names) => {
	console.log('names', names)
}).catch()


let names = get_data()
console.log('names', name)

	//console.log(il)
	//console.log("jeff")
	//i=0
	//while (i<8){
		//il.insertAdjacentHTML('beforeEnd', `<div class="product">
				//<div class="product-image">
					//<i class="far fa-star"></i>
			//	</div>
				//<div class="product-extras">
					//<div class="description">
						//<h4>Nike</h4>
						//<small>Air Max 270</small>
					//</div>
					//<div class="price">
					//	<span>$189.99</span>
						//<a href="#" class="button">shop now</a>
					//</div>
			//	</div>
			//</div>`)
			//i++


//}
//}
