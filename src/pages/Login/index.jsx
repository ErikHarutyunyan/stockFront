import { Link } from "react-router-dom";
import { IconGoogle } from "../../components/Icons";
import { JoinWrapper } from "../Register/Register.styled";

const Login = () => {
	return (
		<JoinWrapper className="account">
			<div className="container">
				<div className="row">
					<div>
						<div className="account__content">
							<div className="account__header">
								<h2>Welcome back!</h2>
								<p>
									Hey there! Ready to log in? Just enter your username and
									password below and you&apos;ll be back in action in no time.
									Let&apos;s go!
								</p>
							</div>

							<div className="account__social">
								<a href="#" className="account__social-btn">
									<span>
										<IconGoogle />
									</span>
									Continue with google
								</a>
							</div>

							<div className="account__divider">
								<span>or</span>
							</div>

							<form action="#" className="account__form">
								<div>
									<div className="account__form-wrapper">
										<div>
											<label htmlFor="account-email" className="form-label">
												Email
											</label>
											<input
												type="email"
												className="form-control"
												id="account-email"
												placeholder="Enter your email"
												required=""
											/>
										</div>
									</div>
									<div className="account__form-wrapper">
										<div className="form-pass">
											<label htmlFor="account-pass" className="form-label">
												Password
											</label>
											<input
												type="password"
												className="form-control showhide-pass"
												id="account-pass"
												placeholder="Password"
												required=""
											/>

											<button type="button" className="form-pass__toggle">
												<svg
													id="eyeIcon1"
													className="svg-inline--fa fa-eye"
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="eye"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
													data-fa-i2svg=""
												>
													<path
														fill="currentColor"
														d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
													></path>
												</svg>
											</button>
										</div>
									</div>
								</div>
								<div className="account__check">
									<div className="account__check-remember">
										<input
											type="checkbox"
											className="form-check-input"
											value=""
											id="terms-check"
										/>
										<label htmlFor="terms-check" className="form-check-label">
											Remember me
										</label>
									</div>
									<div className="account__check-forgot">
										<Link to={"/forgot"}>Forgot Password?</Link>
									</div>
								</div>
								<Link to={"/dashboard"} className="primary">
									Sign in
								</Link>
							</form>

							<div className="account__switch">
								<p>
									Don’t have an account? <Link to="/register">Sign up</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</JoinWrapper>
	);
};

export default Login;
