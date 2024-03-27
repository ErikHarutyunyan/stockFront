import styled from "styled-components";

export const SidebarWrapper = styled.aside`
	position: fixed;
	height: 100%;
	background-color: #00150f;
	width: 5%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 10px;
	transition: all 0.4s;
	min-width: 50px;
	color: #fff;
	.leftbar {
		&__logo {
			width: 5%;
			min-width: 80px;
			position: absolute;
			top: 30px;
			fill: #00d094;
			left: 7px;
		}
		&__menu {
			list-style-type: none;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 0;
			font-weight: 800;
			li {
				cursor: pointer;
				a {
					transition: all 0.4s;
					margin-bottom: 50px;
					display: flex;
					white-space: nowrap;
					align-items: center;
					justify-content: center;
					&.active {
						svg {
							fill: rgb(0, 208, 148);
						}
					}
					svg {
						fill: #ffff;
						width: 40%;
						min-width: 23px;
						margin-bottom: -7px;
					}
				}
			}
		}
		&__log {
			fill: #ffff;
			width: 30%;
			cursor: pointer;
			position: absolute;
			transition: all 0.4s;
			bottom: 20px;
			min-width: 20px;
		}
	}
	a {
		margin-bottom: 50px;
		margin-bottom: 50px;
		display: flex;
		white-space: nowrap;
		align-items: center;
		justify-content: center;
	}
`;
