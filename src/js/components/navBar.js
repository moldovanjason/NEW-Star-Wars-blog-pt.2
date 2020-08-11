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
						<li className="nav-item active">
							<a
								className="nav-link"
								href="https://3000-ced674bb-8961-4625-9d33-2b5e68ae7a20.ws-us02.gitpod.io/">
								Home <span className="sr-only" />
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="https://3000-ced674bb-8961-4625-9d33-2b5e68ae7a20.ws-us02.gitpod.io/characters">
								Characters
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="#https://3000-ced674bb-8961-4625-9d33-2b5e68ae7a20.ws-us02.gitpod.io/planets">
								Planets
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
