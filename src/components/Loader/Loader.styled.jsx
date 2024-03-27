import styled from "styled-components";

export const LoaderWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;

	.spinner {
		width: 50px;
		aspect-ratio: 1;
		border-radius: 50%;
		background: #00E396;
		-webkit-mask: radial-gradient(
			circle closest-side at 50% 40%,
			#0000 94%,
			#000
		);
		transform-origin: 50% 40%;
		animation: l25 1s infinite linear;
	}
	@keyframes l25 {
		100% {
			transform: rotate(1turn);
		}
	}
`;
