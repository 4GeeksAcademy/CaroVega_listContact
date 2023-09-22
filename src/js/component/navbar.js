import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end">
			
			<div className="me-5">
				<Link to="/addContac">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
