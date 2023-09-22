import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/addContac.css";

export const AddContac = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Add a new contact</h1>
			<div className="my-3">
				<label for="name" class="form-label">Full name</label>
    			<input type="text" class="form-control" id="name" aria-describedby="nameContact"></input>

				<label for="exampleInputEmail1" class="form-label">Email</label>
    			<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

				<label for="Phone" class="form-label">Phone</label>
    			<input type="number" class="form-control" id="Phone" aria-describedby="nameContact"></input>

				<label for="adres" class="form-label">Address</label>
    			<input type="text" class="form-control" id="adres" aria-describedby="nameContact"></input>
			</div>

			<div>
				<button type="button" class="btn btn-primary">Save</button>
			</div>
			<Link to="/">
				<span>Or get back to contacts</span>
			</Link>
		</div>
	);
};
