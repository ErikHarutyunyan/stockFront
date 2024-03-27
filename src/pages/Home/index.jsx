import { Link } from "react-router-dom";
import { coin, homeBanner, searchStock, shape1 } from "../../components/Images";
import { BannerWrapper } from "./Home.styled";

const Home = () => {
	return (
		<BannerWrapper className="banner banner--style1">
			<div className="banner__bg">
				<div className="banner__bg-element">
					<img src={homeBanner} alt="section-bg-element" />
				</div>
			</div>
			<div className="container">
				<div className="banner__wrapper">
					<div className="row gy-5 gx-4">
						<div className="col-6">
							<div
								className="banner__content aos-init aos-animate"
								data-aos="fade-right"
								data-aos-duration="1000"
							>
								<div className="banner__content-coin">
									<img src={coin} alt="coin icon" />
								</div>
								<h1 className="banner__content-heading">
									Invest your money with <span>higher return</span>
								</h1>
								<p className="banner__content-sub-heading">
									Anyone can invest money to different currency to increase
									their earnings by the help of Bitrader through online.
								</p>
								<div className="banner__btn-group btn-group">
									<Link to={"/login"} className="primary">
										Get Started
									</Link>
								</div>
							</div>
						</div>
						<div className="col-6">
							<div
								className="banner__thumb aos-init aos-animate"
								data-aos="fade-left"
								data-aos-duration="1000"
							>
								<img src={searchStock} alt="banner-thumb" className="dark" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="banner__shape">
				<span className="banner__shape-item banner__shape-item--1">
					<img src={shape1} alt="shape icon" />
				</span>
			</div>
		</BannerWrapper>
	);
};

export default Home;
