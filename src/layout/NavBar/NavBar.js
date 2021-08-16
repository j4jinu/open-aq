import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-3 navbarBG'>
			<div className='container-fluid'>
				<Link to={"/"} className='navbar-brand'>
					OpenAQ - Pollution Data
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
