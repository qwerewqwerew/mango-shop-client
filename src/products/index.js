import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function ProductPage() {
	//const params=useParams();
	//console.log(params);
	const {id} = useParams();
    const [product, setProduct]=useState(null);
	useEffect(function () {
		axios
			.get(`https://2c2b035a-2dad-4b27-85f9-a984653f2e88.mock.pstmn.io/products/${id}`)
			.then(function (result) {
                setProduct(result.data)
				console.log(result);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
    console.log(product);
	return <h1>상품 상세 페이지 {id} 상품</h1>;
}

export default ProductPage;
