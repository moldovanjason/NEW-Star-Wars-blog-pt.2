import React from "react";
import { Link } from "react-router-dom";

//create your first component
export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark">
				<ul className="logo">
					<li>
						<a href="https://www.facebook.com/StarWars/">
							<i className="f link fab fa-facebook-square" />
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/c/StarWars/featured">
							<i className="y link fab fa-youtube" />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/starwars/">
							<i className="i link fab fa-instagram" />
						</a>
					</li>
					<li>
						<a href="https://twitter.com/starwars">
							<i className="t link fab fa-twitter" />
						</a>
					</li>
					<li>
						<a href="https://www.tumblr.com/search/star+wars">
							<i className="tu link fab fa-tumblr" />
						</a>
					</li>
				</ul>
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
			<nav className="navbar-expand-lg navbar-light bg-light">
				<div className="navBar collapse navbar-collapse" id="navbarNav">
					<ul className="NavBar navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/characters">
								Characters
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="planets">
								Planets
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
