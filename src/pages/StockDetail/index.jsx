// import React, { useEffect } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconAL } from "../../components/Icons";
import Loader from "../../components/Loader";
import LineChart from "../../components/StockChart";
import { StockDetailWrapper } from "./StockDetail.styled";
const StockDetail = () => {
	const { number } = useParams();
	const [stock, setStock] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		setLoading(true);
		const fetchData = async number => {
			try {
				const response = await fetch(
					`https://scrap-stock.onrender.com/stock/${Number(number)}`
				).then(res => res.json());
				setStock(response);
				setLoading(false);
			} catch (error) {
				setError(error);
				console.error("Error fetching data: ", error);
			}
		};
		fetchData(number);
	}, [number]);
	const getChangeClass = nseChange => {
		return nseChange < 0 ? "stock-change-negative" : "stock-change-positive";
	};
	const handleBack = () => {
		navigate(-1);
	};
	if (loading) return <Loader />;
	if (error) return <div className="error">Error: {error.message}</div>;

	return (
		<StockDetailWrapper>
			<div className="back" onClick={handleBack}>
				<IconAL />
			</div>
			<div className="main-container">
				<div className="stock-details">
					<h2 className="stock-name">{stock.Name}</h2>
					<p className={`stock-change ${getChangeClass(stock["NSE_Change"])}`}>
						{stock["NSE_Change"]} ({stock["NSE_Change_Percentage"]})
					</p>
					<p>
						<strong>Sector:</strong> {stock.Sector}
					</p>
					<div className="details-grid">
						<p>Value (Lacs): {stock["Value (Lacs)"]}</p>
						<p>Open: {stock.Open}</p>
						<p>Volume: {stock.Volume}</p>
						<p>52 Week High VWAP: {stock["52 Week HVWAPgh"]}</p>
						<p>52 Week Low: {stock["52 Week Low"]}</p>
						<p>Beta: {stock.Beta}</p>
						<p>Face Value: {stock["Face Value"]}</p>
						<p>Market Cap (Rs. Cr.): {stock["Mkt Cap (Rs. Cr.)"]}</p>
						<p>Previous Close: {stock["PrevVWAPous Close"]}</p>
						<p>VWAP: {stock["VWAPVWAP"]}</p>
						<p>Low: {stock.Low}</p>
						<p>HVWAPgh: {stock.HVWAPgh}</p>
						<p>LC LVWAPmVWAPt: {stock["LC LVWAPmVWAPt"]}</p>
						<p>UC LVWAPmVWAPt: {stock["UC LVWAPmVWAPt"]}</p>
					</div>
				</div>
				<div className="stock-chart-container">
					<h2>Line Chart for {stock.Name}</h2>
					<div className="chart-box">
						<LineChart graphLink={stock.Graph_link} />
					</div>
				</div>
			</div>
		</StockDetailWrapper>
	);
};
export default StockDetail;
