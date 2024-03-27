import { createGlobalStyle } from "styled-components";
import { normalize } from "./Normalize";
export const GlobalStyle = createGlobalStyle`
  ${normalize}
	body {
		background-color:#00150F;
    color:#fff;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
	}
  #root{
    box-sizing: border-box;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  main{
    flex-grow: 1;
    min-height: 100%;
  }
  header, footer {
    flex-grow: 0;
    flex-shrink: 0;
  }
  label {
    display: flex;
    gap: 1rem;
  }
  .container {
    max-width: 900px;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 0 auto;
  }
  p.error {
    color: red;
    margin: 15px 0;
  }
  .container {
		max-width: 1170px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
  }
  .fullWidth{
    width: 100%;
    height: auto;
  }
	.primary {
    display: inline-block;
		background-color: #00d094;
		border: 1px solid #00d094;
		padding: 16px 30px;
		font-size: 16px;
		color: #0c263a;
		transition: all 0.3s ease-out;
		text-transform: capitalize;
		line-height: 1;
		border-radius: 8px;
		font-weight: 600;
    position: relative;
    overflow: hidden;
    &:hover {
      color: #0C263A;
      transform: translateY(-3px);
      &::after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
    &::after {
      background: #fff;
      content: "";
      position: absolute;
      height: 155px;
      left: -75px;
      opacity: 0.2;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
	}
  .stock-chart-container {
    margin-top: 20px;
  }
    body {
    --sb-track-color: #00150f;
    --sb-thumb-color: #33b879;
    --sb-size: 8px;
  }

  body::-webkit-scrollbar {
    width: var(--sb-size);
  }

  body::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 3px;
  }

  body::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 3px;
  }

  @supports not selector(::-webkit-scrollbar) {
    body {
        scrollbar-color: var(--sb-thumb-color)
                      var(--sb-track-color);
    }
  }
`;
