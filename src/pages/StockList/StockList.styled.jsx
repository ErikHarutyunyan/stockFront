import styled from "styled-components";

export const StockListWrapper = styled.div`
	.stock-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
		padding: 20px;
	}

	.stock-container {
		box-sizing: content-box;
		border: 1px solid #00d094;
		padding: 100px 20px;
    width: 200px;
		text-align: center;
		cursor: pointer;
		transition: box-shadow 0.3s;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.stock-container:hover {
		box-shadow: 0px 0px 10px 0px #00d094;
	}

	.stock-name {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.stock-value {
		font-size: 18px;
		color: #7ccf71;
		font-weight: 500;
		margin-top: auto;
	}
	.stock-list-title {
		font-size: 36px;
		color: #fff;
		text-align: center;
		margin-top: 20px;
		margin-bottom: 30px;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.2);
		background-color: rgba(255, 255, 255, 0.8);
		padding: 10px 0;
		border-radius: 5px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		background: linear-gradient(
			91deg,
			rgba(2, 29, 21, 0) 0%,
			rgba(32, 56, 51, 0.5) 100%
		);
	}

	.stock-list-title:hover {
		transform: scale(1.05);
		box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
	}
`;
