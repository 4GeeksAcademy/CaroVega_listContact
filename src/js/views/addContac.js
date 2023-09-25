import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";



import { Context } from "../store/appContext";

import "../../styles/addContac.css";

export const AddContac = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	
	function submitForm(e){
		
		e.preventDefault()
		let dataForm = new FormData(e.target)
		let data ={}
		for(const entrada of dataForm.entries()){
			console.log(entrada)
			data[entrada[0]]=entrada[1];
			
		}
		console.log(data)
		actions.addContac(data);
		navigate('/');
	}

	return (
		<div className="container">
			
			<h1  className="text-center m-2">Add a new contact</h1>
			
			<div className="my-3">
			<form onSubmit={submitForm}>	
				<label htmlFor="name" className="form-label">Full name</label>
    			<input type="text" className="form-control" id="name" aria-describedby="nameContact" name="full_name" placeholder="Full Name"></input>

				<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    			<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="email" name="email" placeholder="Enter email"/>

				<label htmlFor="Phone" className="form-label">Phone</label>
    			<input type="number" className="form-control" id="Phone" aria-describedby="nameContact" name="phone" placeholder="Enter phone"></input>

				<label htmlFor="adres" className="form-label">Address</label>
    			<input type="text" className="form-control" id="adres" aria-describedby="nameContact" name="address" placeholder="Enter address"></input>
				<div className="d-grid gap-2 col-12 mx-auto my-2">
					
						<button type="submit" className="btn btn-primary" > Save </button>
				
				</div>
			</form>
			</div>

			<Link to="/">
				<span>Or get back to contacts</span>
			</Link>
		</div>
	);
};
