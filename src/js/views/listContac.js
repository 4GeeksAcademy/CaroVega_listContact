import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "../component/navbar";
import {ContacTarjet} from "../component/contacTarjet";

import { Context } from "../store/appContext";
import joanImage from "../../img/joankiller.jpg";
import { FaLocationDot, FaPhoneFlip, FaEnvelope, FaTrashCan,FaPencil } from "react-icons/fa6";

import "../../styles/listContac.css";

export const ListContac = () => {
	const { store, actions } = useContext(Context);
		return(
	<div className="text-center mt-5">
		<Navbar/>
		{/* componente  */}
		<ul className="list-group">
		{store.contacts.length === 0 ? (<h1>Añade contactos</h1>):
			(store.contacts.map((item, index) => {
				return(
					<li key={index}
						className="list-group-item d-flex justify-content-between">
						<ContacTarjet namecontact ={item.full_name}  address={item.address} phone ={item.phone} email ={item.email} id={item.id} indexcontac={index} />
					</li>
					);	

				}))}
			</ul>
	</div>
);

};