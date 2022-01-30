import React from "react";
import "./css/style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function MainPage() {
	const [products, setProducts] = React.useState([]);
	React.useEffect(function () {
		axios
			.get("http://localhost:8080/products/")
			.then(function (result) {
				const products = result.data.products;
				setProducts(products);
			})
			.catch(function (error) {
				console.log("에러발생:", error);
			});
	}, []);
	return (
		<div>
			<div id="banner">
				<img src="images/banners/banner1.png" alt="" />
			</div>
			<h1>Products</h1>
			<div id="product-list">
				{products.map(function (product, index) {
					return (
						<div className="product-card">
							<Link className="product-link" to={`/products/${product.id}`}>
								<div>
									<img className="product-img" src={product.imageUrl} />
								</div>
								<div className="product-contents">
									<span className="product-name">{product.name}</span>
									<span className="product-price">{product.price}</span>
									<div class="product-footer">
										<div className="product-seller">
											<img className="product-avatar" src="images/icons/avatar.png" />
											<span>{product.seller}</span>
										</div>
										<span className="product-date">
											{dayjs(product.createdAt).fromNow()}	
										</span>
									</div>
								</div>
								{/* .product-contents */}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default MainPage;
