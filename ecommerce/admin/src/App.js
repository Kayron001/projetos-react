import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import './app.css'
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";

function App() {
	return (
		<BrowserRouter >
			<Topbar />
			<div className="container">
				<Sidebar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/users' element={<UserList />} />
					<Route path='/user/:userId' element={<User />} />
					<Route path='/newUser' element={<NewUser />} />
					<Route path='/products' element={<ProductList />} />
					<Route path='/products/:productId' element={<Product />} />
					<Route path='/newProduct' element={<NewProduct />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
