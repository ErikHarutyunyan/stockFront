import styled from "styled-components";

export const HeaderWrapper = styled.header`
	width: 100%;
	z-index: 99;
	padding: 10px 0;
	.logo {
		max-width: 120px;
	}
	.header {
		&-wrapper {
			padding-block: 26px;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}
	.menu-area {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		ul {
			display: flex;
			column-gap: 10px;
		}
		a {
			padding: 15px 22px;
			text-transform: capitalize;
			font-family: "Open Sans", sans-serif;
			color: #fff;
			font-weight: 500;
			font-size: 17px;
		}
	}
	.logo {
		a {
			display: inline-block;
		}
	}
`;
