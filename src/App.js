import "./App.css";
import MainPageComponent from "./main/index"
import {Switch, Route} from 'react-router-dom';
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
	return (
		<div>
			<Switch>
				<Route exact={true} path="/">
			  		<MainPageComponent />
				</Route>
				<Route exact={true} path="/product/:id">	{/* /product 경로로 들어왔을때 <ProductPage /> 를 보여줌 */}
					<ProductPage />
				</Route>
				<Route exact={true} path="/upload">	{/* /upload 경로로 들어왔을때 <UploadPage /> 를 보여줌 */}
					<UploadPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;