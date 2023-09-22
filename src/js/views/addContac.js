import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/addContac.css";

export const AddContac = () => {
	const { store, actions } = useContext(Context);

	function submitForm(e){
		e.preventDefault()
		let dataForm = new FormData(e.target)
		let data ={}
		for(const entrada of dataForm.entries()){
			console.log(entrada)
			data[entrada[0]]=entrada[1]
			console.log(data)
		}
	}

	return (
		<div className="container">
			
			<h1  class="text-center m-2">Add a new contact</h1>
			
			<div className="my-3">
			<form onSubmit={submitForm}>	
				<label for="name" class="form-label">Full name</label>
    			<input type="text" class="form-control" id="name" aria-describedby="nameContact" name="name"></input>

				<label for="exampleInputEmail1" class="form-label">Email</label>
    			<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>

				<label for="Phone" class="form-label">Phone</label>
    			<input type="number" class="form-control" id="Phone" aria-describedby="nameContact" name="phone"></input>

				<label for="adres" class="form-label">Address</label>
    			<input type="text" class="form-control" id="adres" aria-describedby="nameContact" name="address"></input>
				<button type="submit" class="btn btn-primary" > agregar </button>
			</form>
			</div>

			<div className="d-grid gap-2 col-12 mx-auto my-2">
				<button type="button" class="btn btn-primary" onClick={()=>actions.saveDataContac()}>Save</button>
			</div>
			<Link to="/">
				<span>Or get back to contacts</span>
			</Link>
		</div>
	);
};
