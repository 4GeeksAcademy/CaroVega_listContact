import React from "react";
import { FaLocationDot, FaPhoneFlip, FaEnvelope, FaTrashCan,FaPencil } from "react-icons/fa6";
import joanImage from "../../img/joankiller.jpg";


export const ContacTarjet = (props) => {
	function handleclickEditor(index){
		console.log("hiciste click al contacto", index);
	};
	function handleclickdelete(index){
		console.log("hiciste click para eliminar el contacto", index);
	};


	return(
							<div class="card">
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
												<button className="editor"onClick={()=> handleclickEditor(props.indexcontac)}><FaPencil/></button>
												<button className="delete" onClick={()=> handleclickdelete(props.indexcontac)}><FaTrashCan/></button>
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