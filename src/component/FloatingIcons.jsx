import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const shift={
    PaddingLeft:"8px"
}
export default function FloatingIcons(){
    return(
        <>
            <div className="floatingicon" data-aos="fade-left">
            <a href="https://www.facebook.com/profile.php?id=100010307765072" id="facebook" className="icons">
                <FacebookIcon />
                <span className="pl-2">Go to Facebook</span>
            </a>
            <a href="https://www.youtube.com/channel/UC04T3mzCezfe3xZK_h7PRkA?view_as=subscriber" id="youtube" className="icons">
                <YouTubeIcon />
                <span className="pl-2">Go to Youtube</span>
            </a>

            <a href="https://www.linkedin.com/in/shoham-dey-sarkar-222a221aa/" id="linkedin" className="icons">
                <LinkedInIcon />
                <span className="pl-2">Go to LinkedIn</span>
            </a>

            <a href="https://github.com/Shoham-87" target="_blank" id="github" className="icons">
                <GitHubIcon />
                <span className="pl-2">Go to Github</span>
            </a>

        </div>
        </>
    )
}