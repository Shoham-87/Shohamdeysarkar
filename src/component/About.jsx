import React from "react";
import './About.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function About(){
    return (<>
        <div className="container dark" id="about" data-aos="zoom-in-down" data-aos-duration="1500" data-aos-offset="100">
            <div className="row dark">
                <div className="col-lg-4 ">
                    <img src={`${require('../images/about.JPG')}`} className="img_about"/>
                </div>
                <div className="col-lg-8 text-white">
                    <h1 className="ml-5">About <span className="txt_color">Myself</span></h1>
                    <ul className="about_info">
                        <li><p>Hi, I am <span className="txt_color">Shoham Dey Sarkar</span> from Kolkata , West Bengal.</p></li>
                        <li><p>I am Currently Persuing <span className="txt_color">B.Tech</span> in <span className="txt_color">Computer Science and Engineering</span></p></li>
                        <li><p>I am Keenly Interested in <span className="txt_color">Competitive Coding under C++ </span></p></li>
                        <li><p>My Interest Includes building new <span className="txt_color">Web based Technologies</span> and also in fields such as <span className="txt_color">Machine Learning</span></p></li>
                        <div class="about_icons">
                        <a href="https://www.facebook.com/profile.php?id=100010307765072" target="_blank" className="btn btn-primary" id="github"  role="button">
                        <FacebookIcon /> Facebook</a>
                        <a href="https://www.linkedin.com/in/shoham-dey-sarkar-222a221aa/" target="_blank" className="btn btn-primary" id="github"  role="button">
                        <LinkedInIcon /> Linked IN</a>
                        <a href="https://github.com/Shoham-87" className="btn btn-primary" target="_blank" id="github"  role="button">
                        <GitHubIcon /> Github</a>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </>);
}