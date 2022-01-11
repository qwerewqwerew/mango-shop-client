import React from 'react';
import './css/style.css'
import axios from 'axios';

function MainPage() {
	const [products, setProducts]=React.useState([])
	React.useEffect(function(){
		axios.get("https://2c2b035a-2dad-4b27-85f9-a984653f2e88.mock.pstmn.io/products")
		.then(function(result){
			const products=result.data.products;
			setProducts(products);
		})
		.catch(function(error){console.log('에러발생:',error)})	
	},[])
	return(
        <div>
		<div id="header">
			<div id="header-area">
				<img src="images/icons/logo.png" alt="" />
			</div>
		</div>
		<div id="body">
			<div id="banner">
				<img src="images/banners/banner1.png" alt="" />
			</div>
			<h1>Products</h1>
			<div id="product-list">
				{
					products.map(function(products,index){
						return (
							<div className='product-card'>
							<div>
								<img className='product-img' src={products.imageUrl}/>
							</div>
							<div className='product-contents'>
								<span className='product-name'>{products.name}</span>
								<span className='product-price'>{products.price}</span>
								<div className='product-seller'>
									<img className='product-avatar' src='images/icons/avatar.png'/>
									<span>{products.seller}</span>
								</div>
							</div>
						</div>
		
						)
					})
				}
			</div>{/* #produc-list */}
		</div>
		<div id="footer"></div>
      </div>
    )
}
export default MainPage;
