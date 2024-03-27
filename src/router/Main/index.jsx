import { Route } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
export const MainRoutes = () => {
	return (
		<Route path={"/"} element={<MainLayout />}>
			<Route index element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Route>
	);
};
