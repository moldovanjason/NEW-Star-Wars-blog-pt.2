import React, { Component } from "react";
import { Link } from "react-router";

const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div>For more info about Star Wars go to:</div>
		<Link to="Starwars.com" />
	</footer>
);

export default Footer;
