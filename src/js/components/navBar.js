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
							<a href="https://www.facebook.com/StarWars/">
								<i className="link fab fa-facebook-square" />
							</a>
						</li>
						<li>
							<a href="https://www.youtube.com/c/StarWars/featured">
								<i className="link fab fa-youtube" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/starwars/">
								<i className="link fab fa-instagram" />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/starwars">
								<i className="link fab fa-twitter" />
							</a>
						</li>
						<li>
							<a href="https://www.tumblr.com/search/star+wars">
								<i className="link fab fa-tumblr" />
							</a>
						</li>
					</ul>
				</a>
				<img
					className="img"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Star_Wars_Logo_2.svg/1024px-Star_Wars_Logo_2.svg.png"
				/>
				<form className="search form-inline my-2 my-lg-0">
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
