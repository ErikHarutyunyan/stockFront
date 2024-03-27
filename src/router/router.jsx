import {
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { DashboardRoutes } from "./Dashboard";
import { MainRoutes } from "./Main";
const router = createBrowserRouter(
	createRoutesFromElements([MainRoutes(), DashboardRoutes()])
);
export default router;
