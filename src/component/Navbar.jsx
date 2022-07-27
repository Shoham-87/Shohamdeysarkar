import React,{useState} from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } }




export default function Navbar(){
  const [bgColor, setbgColor] = useState({backgroundColor:"transparent"});
  // window.addEventListener('scroll',()=>
  // {
  //   if(window.pageYOffset>5)
  //    setbgColor({backgroundColor:"#000"});
  //    else
  //    setbgColor({backgroundColor:"transparent"});
  // });
    return (
    <>
      <div className="container-fluid position-fixed navi" style={{backgroundColor:"#000"}}>
        <nav className="navbar navbar-expand-md header-nav ">
        <h1 className="navbar-brand myname ml-5" title="Creator Name">Shoham</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navitog mr-5" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 justify-content-between">
            <li className="nav-item navhover">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item navhover">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item navhover">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
          </ul>
        </div>
    </nav>
      </div>
    </>);
}