import React from "react";
import { Link } from "react-router-dom";

//create your first component
export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark">
				<a className="navbar-brand" href="#">
					<ul className="logo">
						<li>
							<i className="fab fa-facebook-square" />
						</li>
						<li>
							<i className="fab fa-youtube" />
						</li>
						<li>
							<i className="fab fa-instagram" />
						</li>
						<li>
							<i className="fab fa-twitter" />
						</li>
						<li>
							<i className="fab fa-tumblr" />
						</li>
					</ul>
				</a>
				<img
					className="img"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Star_Wars_Logo_2.svg/1024px-Star_Wars_Logo_2.svg.png"
				/>
				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search Star Wars"
						aria-label="Search"
					/>
				</form>
			</nav>
		</div>
	);
};
