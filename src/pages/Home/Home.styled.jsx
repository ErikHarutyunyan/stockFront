import styled from "styled-components";

export const BannerWrapper = styled.section`
	padding-block-start: 148px;
	padding-block-end: 132px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	.banner {
		&__bg-element img {
			width: 100%;
			max-width: 100%;
			height: auto;
			position: absolute;
			left: 0;
			top: 0;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			opacity: 0.8;
		}
		&__wrapper {
			.row {
				display: flex;
				flex-wrap: wrap;
			}
			.col-6 {
				flex: 0 0 auto;
				width: 50%;
			}
		}
		&__content-heading {
			text-transform: capitalize;
			font-weight: 600;
			font-size: 50px;
			span {
				color: #00d094;
			}
		}
		&__content-sub-heading {
			margin-top: 30px;
			margin-block-end: 40px;
			font-size: 16px;
			opacity: 0.8;
			font-weight: 600;
			line-height: 28px;
		}
		&__content-coin img {
			width: 150px;
			margin-block-end: 20px;
			animation: rotate 3s cubic-bezier(0.41, 0.15, 0.64, 0.86) infinite
				alternate;
			@keyframes rotate {
				100% {
					transform: rotate(360deg);
				}
			}
		}
		&__thumb {
			position: absolute;
			animation: left-right 3s cubic-bezier(0.41, 0.15, 0.64, 0.86) infinite
				alternate;
			right: 280px;
			top: 205px;
			max-inline-size: 52%;
			@keyframes left-right {
				0% {
					transform: translateX(30px);
				}
				100% {
					transform: translateX(0px);
				}
			}
		}
	}
	
`;
