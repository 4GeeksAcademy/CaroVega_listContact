import React from "react";
import { Navbar } from "../component/navbar";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/listContac.css";

export const ListContac = () => (
	<div className="text-center mt-5">
		<Navbar/>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
