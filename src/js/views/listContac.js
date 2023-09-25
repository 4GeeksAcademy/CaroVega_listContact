import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "../component/navbar";

import { Context } from "../store/appContext";
import joanImage from "../../img/joankiller.jpg";
import { FaLocationDot, FaPhoneFlip, FaEnvelope, FaTrashCan,FaPencil } from "react-icons/fa6";

import "../../styles/listContac.css";

export const ListContac = () => {
	const { store, actions } = useContext(Context);
		return(
	<div className="text-center mt-5">
		<Navbar/>
		<ul className="list-group">
				{store.contacts.length === 0 ? (<h1>Añade contactos</h1>):
				(store.contacts.map((item, index) => {
					return(
					<li key={index}
							className="list-group-item d-flex justify-content-between">
								<div className="contacData d-flex justify-content-start">
									<div>
										<img className ="contactPhoto" src={joanImage}/>
									</div>
									<div>
										<div className="contentName d-flex justify-content-between">
											<div>
												<p className ="namecontac">{item.full_name}</p>
											</div>
											<div>
												<button className="editor"><FaPencil/></button>
												<button className="delete"><FaTrashCan/></button>
											</div>
										</div>
										<p className ="address"><FaLocationDot/>{item.address}</p>
										<p className ="phone"><FaPhoneFlip/>{item.phone}</p>
										<p className ="email"><FaEnvelope/>{item.email}</p>
									</div>
								</div>
						</li>
					);	
				}))}
			</ul>
	</div>
);

};