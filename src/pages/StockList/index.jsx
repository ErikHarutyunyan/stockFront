import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../../components/Loader";
import { StockListWrapper } from "./StockList.styled";

const StockList = () => {
	const navigate = useNavigate();
	const [stocks, setStocks] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch("https://scrap-stock.onrender.com/").then(
					res => res.json()
				);
				setStocks(response);
				setLoading(false);
			} catch (error) {
				setError(error);
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);

	const handleStockClick = number => {
		navigate(`/dashboard/stock/${number}`);
	};

	if (loading) return <Loader />;
	if (error) return <div className="error">Error: {error.message}</div>;
	return (
		<StockListWrapper>
			<h1 className="stock-list-title">Most Active Stocks NSE</h1>
			<div className="stock-list">
				{stocks.map(stock => (
					<div
						key={stock.number}
						className="stock-container"
						onClick={() => handleStockClick(stock.number)}
					>
						<div className="stock-name">{stock.name}</div>
						<div className="stock-value">Current Value: {stock.value}</div>
					</div>
				))}
			</div>
		</StockListWrapper>
	);
};

export default StockList;
