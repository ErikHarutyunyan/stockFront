import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DashboardLayout = () => {
	return (
		<>
			<main style={{ display: "flex", height: "100%", background: "#011b1c" }}>
				<Sidebar />
				<div className="content" style={{ width: "70%", margin: "0 auto" }}>
					<Outlet />
				</div>
			</main>
		</>
	);
};

export default DashboardLayout;
