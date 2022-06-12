import React from "react";
import { useNavigate } from "react-router-dom";

import "./Student.css";

const Student = () => {

    const history = useNavigate()
    return (
        <div>

            <div>
                <nav className="navbar navbar-dark  navbar-expand-lg" style={{ backgroundColor: 'hsl(205, 61%, 22%)' }}>
                    <div className="shcontainer">
                        <div>
                            <a className="navbar-brand" href="#">
                            <img className="userimg" src={require('./user_real.png')} alt="student image" />

                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mx-auto " style={{ width: '300px' }}>
                                <div>
                                    <li className="nav-item me-auto">
                                        <a className="nav-link " href="http://localhost:3000/#home">Home</a>
                                    </li>
                                </div>
                                <div>
                                    <li className="nav-item me-auto">
                                        <a className="nav-link" href="http://localhost:3000/#about">About us</a>
                                    </li>
                                </div>
                                <div>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://localhost:3000/register">Join Us</a>
                                    </li>
                                </div>
                            </ul>

                        </div>

                        <div>
                            <span >
                                <form className="container-fluid justify-content-start" />
                                <button className="btn btn-outline-primary " type="button" onClick={() => history("/login")}>Sign out</button>
                            </span>
                        </div>
                    </div>

                </nav>
            </div>

            <div className="mcontainer">
                

                <div>
                    <div className="d-flex align-items-start" style={{ margintop: '100px' }}>
                        <p >
                            <h2> Get Your Answer from the bot.</h2>

                        </p>

                    </div>

                    <div style={{ margin: '50px 250px auto' }} >
                        {/* <button type="button" className="btn btn-outline-secondary btn-lg" >click me!</button> */}
                        <a  className="btn btn-outline-secondary btn-lg" href="http://ec2-44-205-207-61.compute-1.amazonaws.com:5000/">click me!</a>
                    </div>

                    <div className="d-flex align-items-start" style={{ margintop: '20px' }}>
                        <p>
                            <h2> Get Your Answer from the teacher.</h2>
                        </p>
                    </div>

                    <div style={{ margin: '50px 250px auto' }}>
                        <button type="button" className="btn btn-outline-secondary btn-lg" onClick={() => history("/ques")}>click me!</button>
                    </div>
                </div>

                <div className="backimage">
                    <img src={require('./bg.png')} alt="student image" />
                </div>


            </div>



        </div>
    )
}

export default Student;