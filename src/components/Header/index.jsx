import { Link } from "react-router-dom";
import { Logo } from "../Icons";
import { HeaderWrapper } from "./Header.styled";

const Header = () => {
	return (
		<HeaderWrapper>
			<div className="container">
				<div className="header-wrapper">
					<div className="logo">
						<Link to={"/"}>
							<Logo />
						</Link>
					</div>
					<div className="menu-area">
						{/* <ul className="menu menu--style1">
							<li>
								<NavLink>Contact Us</NavLink>
							</li>
						</ul> */}
					</div>
					<div className="header-action">
						<div className="menu-area">
							<div className="header-btn">
								<Link to="/register" className="primary">
									<span>Join Now</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</HeaderWrapper>
	);
};

export default Header;
