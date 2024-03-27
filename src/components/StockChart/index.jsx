import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function LineChart({ graphLink }) {
	const [graphData, setGraphData] = useState([]);
	const [options, setOptions] = useState({
		xaxis: {
			categories: [],
		},
		yaxis: {
			title: { text: "Price" },
		},
		tooltip: {
			theme: "dark",
		},
		theme: {
			mode: "dark",
			palette: "palette1",
		},
		colors: ["#00E396", "#FF0000"],
	});
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchGraphData = async () => {
			try {
				const response = await fetch(graphLink).then(res => res.json());
				const { graphData, high, mean, low } = response.data;

				if (graphData.length === 0) {
					throw new Error("No graph data available");
				}

				setGraphData(graphData);

				const categories = graphData.map(data =>
					new Date(data[0] * 1000).toLocaleDateString()
				);
				console.log("🚀 ~ fetchGraphData ~ categories:", categories);
				setOptions(prevOptions => ({
					...prevOptions,
					xaxis: {
						...categories,
					},
				}));
			} catch (error) {
				console.error("Error fetching graph data: ", error);
				setError(true);
			}
		};

		fetchGraphData();
	}, [graphLink]);

	if (error) {
		return <div>No graph found</div>;
	}

	return (
		<div style={{ width: "100%" }} className="container-fluid">
			<Chart
				type="line"
				width={"100%"}
				height={550}
				series={[{ data: graphData }]}
				options={options}
			/>
		</div>
	);
}

export default LineChart;
