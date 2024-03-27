import { Route } from "react-router-dom";
import DashboardLayout from "../../layout/Dashboard";
import StockDetail from "../../pages/StockDetail";
import StockList from "../../pages/StockList";
export const DashboardRoutes = () => {
	return (
		<Route path={"/dashboard"} element={<DashboardLayout />}>
			<Route index="/dashboard" element={<StockList />} />
			<Route path="stock/:number" element={<StockDetail />} />
		</Route>
	);
};
