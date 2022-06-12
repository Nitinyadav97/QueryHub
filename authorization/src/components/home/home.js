import React from "react";
import { useNavigate } from "react-router-dom"
 import './hstyles.css';



const Home = () => {

    const history = useNavigate()

    return (
        <div>

            
<header id="home">

<nav id="nav">
    <div className="nav-center">

        <div className="nav-header">
        <img className="logoimg" src={require('./logo.png')} alt="Logo" />
            <button className="nav-toggle">
                <i className="fas fa-bars"></i>
            </button>
        </div>

        <div className="links-container">
            <ul className="links">
                <li>
                    <a href="#home" className="scroll-link">home</a>
                </li>
                <li>
                    <a href="#about" className="scroll-link">about</a>
                </li>
                <li>
                    <a href="#contact" className="scroll-link">Contact us</a>
                </li>
                <li>
                    <button type="button" className="scroll-link btn btn-white "  onClick={() => history("/register")} style={{marginLeft:'30px'}}>
                        SIGN UP
                    </button>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div className="banner">
<div className="container">
    <h1><span >QUERY </span> HUB</h1>
    <p>
        We provide the best solution.The best word problem solver. Answers provided by experts with step-By-step solutions. <br />Register and get one year access and enjoy the ride!
    </p>
    <a href="#tours" className="scroll-link btn btn-white " onClick={() => history("/login")} >ASK QUESTIONS</a>
</div>
</div>

</header>



<section id="about" className="section">
<div className="title">
    <h2>about <span>us</span></h2>
    <div className="profileimg">
    <div className="skill-row" style={{marginBottom:'100px' }} >
    <img className="logoimg" src={require('./nishita.png')} alt="Logo" />
        <h4 >Nishita Chaturvedi</h4>
        <p>B.Tech 3rd Year @ JUET Guna ,Frontend Developer(Learning).</p>
    </div>
    <div className="skill-row">
    <img className="logoimg" style={{marginLeft:'100px'}} src={require('./nitin.jpg')} alt="Logo" />
        <h4 className="space"> Nitin Yadav </h4>
        <p className="space">B.Tech 3rd Year @ JUET Guna, Backend Web developer (Learning).</p>
    </div>
    <div className="skill-row" style={{marginBottom:'10px' , paddingBottom: '10px'}}>
    <img className="logoimg" src={require('./pratuysh.png')} alt="Logo" />
        <h4 style={{marginBottom:'10px' }}>Pratyush Shukla  </h4>
        <p style={{marginBottom:'70px' }}>B.Tech 3rd Year @ JUET Guna ,AI/ML Deep learning.</p>
    </div>
    </div>
</div>



</section>


<section id="contact" className="section">
<div className="title">
    <h2 style={{marginRight: '0%' }}>contact<span> Us</span></h2>
</div>
<div><ul className="social-icons" style={{marginTop: '80px'}}>
    <li>
        <a href="https://www.twitter.com">
            <p style={{marginRight: '20px'}}>twitter</p>
        </a>
    </li>
    <li>
        <a href="https://www.instagram.com">
            <p style={{marginRight: '20px'}}>Instagram </p>
        </a>
    </li>
    
    <li>
        <a href="https://www.linkedin.com">
            <p>Linkedin </p>
        </a>
    </li>
    
</ul></div>

</section >




<footer className="section">
<p>
    copyright &copy; Word Problem Solving Website
    <span id="date"></span>. all rights reserved
</p>
</footer>
<a className="scroll-link top-link" href="#home">
<i className="fas fa-arrow-up"></i>
</a>



        </div >
    )
}


export default Home;