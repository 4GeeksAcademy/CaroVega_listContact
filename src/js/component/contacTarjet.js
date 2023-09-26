import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {Modal} from "../component/modal"
import { FaLocationDot, FaPhoneFlip, FaEnvelope, FaTrashCan,FaPencil } from "react-icons/fa6";
import joanImage from "../../img/joankiller.jpg";


export const ContacTarjet = (props) => {
	const { store,actions } = useContext(Context);
	
	
		

	return(
							<div className="card">
								<div className="card-body contacData d-flex justify-content-start">
									<div>
										<img className ="contactPhoto" src={joanImage}/>
									</div>
									<div>
										<div className="contentName d-flex justify-content-between">
											<div>
												<p className ="namecontac">{props.namecontact}</p>
											</div>
											<div>
												<Link to={`/addContac?edit=${props.id}`}>
													<button className="editor"><FaPencil/></button>
												</Link>
												<button className="delete" onClick={()=> actions.setContactToDelete(props.id)}><FaTrashCan/></button>
												<Modal />
											</div>
										</div>
										<p className ="address"><FaLocationDot/>{props.address}</p>
										<p className ="phone"><FaPhoneFlip/>{props.phone}</p>
										<p className ="email"><FaEnvelope/>{props.email}</p>
									</div>
								</div>
							</div>
);
	}	