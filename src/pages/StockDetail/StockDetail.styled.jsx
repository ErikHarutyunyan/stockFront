import styled from "styled-components";

export const StockDetailWrapper = styled.div`
	p {
		margin: 5px 0;
	}

	.main-container {
		padding: 20px;
		padding-top: 80px;
	}

	.stock {
		&-details {
			margin-bottom: 20px;
		}
		&-name {
			font-size: 24px;
			font-weight: bold;
			margin: 5px 0;
		}
		&-change {
			font-size: 18px;
			margin: 10px 0;
		}
		&-chart-container {
			margin-top: 20px;
		}
		&-change-positive {
			color: green;
		}
		&-change-negative {
			color: red;
		}
	}

	.details-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}

	.detail-title {
		font-weight: bold;
	}

	.chart-box {
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 5px;
		background-color: transparent;
		padding: 25px 20px;
		color: #fff;
		box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
		margin: 30px 0;
	}

	.no-graph {
		text-align: center;
		padding: 20px;
		font-style: italic;
		color: #666;
	}
	text {
		fill: #fff;
	}
`;
