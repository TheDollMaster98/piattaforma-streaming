import React from "react";
import { Container } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import '../style/selectUtente.scss'
import { Outlet, Link } from "react-router-dom";

const SelectUtente = () => {
    return (
        <>
            <div className="contenitoreGrande text-center" >
                <div className="profili">
                    <h1>Chi vuole Guardare GreenStream?</h1>
                    <ul className="menu ">
                        <li >
                            <Link to="/mainPage"><img  src={require("../images/avatar1.png")}></img></Link>
                        </li>
                        <li>
                        <Link to="/mainPage"><img  src={require("../images/avatar2.png")}></img></Link>
                        </li>
                        <li>
                        <Link to="/mainPage"><img  src={require("../images/avatar3.png")}></img></Link>
                        </li>
                        <li>
                        <Link to="/mainPage"><img  src={require("../images/avatar4.png")}></img></Link>
                        </li>
                        
                    </ul>
                </div>

            </div>


        </>

    )
}
export default SelectUtente