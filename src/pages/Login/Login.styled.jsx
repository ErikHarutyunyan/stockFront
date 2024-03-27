import styled from "styled-components";

export const LoginWrapper = styled.section`
	padding-block-end: 120px;
	padding-block-start: 120px;
	background-color: #081c17;
	.primary {
		width: 100%;
	}
	.account {
		&__content {
			padding: 100px;
			padding-bottom: 80px;
			max-inline-size: 800px;
			margin-inline: auto;
			background-color: #00150f;
			border-radius: 4px;
		}
		&__header {
			margin-block-end: 50px;
			h2 {
				font-size: 48px;
				font-weight: 600;
			}
			p {
				font-size: 16px;
				opacity: 0.7;
				line-height: 23px;
				padding: 25px 0px;
			}
		}
		&__social {
			a {
				width: 100%;
				padding: 12.8px 36px;
				transition: all 0.3s ease-out;
				font-size: 16px;
				display: inline-flex;
				background-color: #1b2d29;
				color: #fff;
				padding: 16px 24px;
				border: 1px solid #dcdfe833;
				border-radius: 8px;
				display: flex;
				align-items: center;
				justify-content: center;
				column-gap: 5px;
				&:hover {
					border-color: #00d094;
				}
			}
		}
		&__divider {
			position: relative;
			padding-block-end: 35px;
			margin-block-start: 35px;

			span {
				position: absolute;
				font-size: 1.125rem;
				color: #fff;
				padding: 20px;
				left: 45%;
				background: #00150f;
			}
			&::before {
				content: "";
				position: absolute;
				height: 1px;
				width: 100%;
				left: 0;
				top: 28px;
				background-color: #dcdfe833;
			}
		}
		&__form {
			margin: 20px 0;
			margin-top: 50px;
			&-wrapper {
				margin: 30px 0;
			}
			label {
				font-size: 18px;
				color: #fff;
			}
			input {
				padding: 16px 20px;
				background-color: #1b2d29;
				border-color: #dcdfe833;
				border-radius: 8px;
				color: #fff;
				display: block;
				width: 100%;
				font-size: 1rem;
				font-weight: 400;
				line-height: 1.5;
				background-clip: padding-box;
				border: 1px solid #495057;
				transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
				margin: 18px 0;
			}
		}
		&__switch {
			margin-top: 50px;
			font-size: 16px;
			color: rgba(255, 255, 255, 0.6);
			text-align: center;
			a {
				color: #00d094;
				text-decoration: underline;
			}
		}
	}
	.form-pass {
		position: relative;
	}
	.form-pass__ctoggle,
	.form-pass__toggle {
		background: none;
		position: absolute;
		border: none;
		color: #fff;
		font-weight: 600;
		right: 12px;
		top: 58px;
		z-index: 9;
		cursor: pointer;
		svg {
			overflow: visible;
			box-sizing: content-box;
			display: inline-block;
			height: 1em;
			overflow: visible;
			vertical-align: -0.125em;
		}
	}
`;
