import React from "react";
import * as FileSaver from "file-saver";
import Typing from "./Typing";
import { Button } from "@mui/material";
import FloatingIcons from "./FloatingIcons";
// #08d665
export default function Header() {
  document.addEventListener('DOMContentLoaded', Typing);
  // const saveFile = () => {
  //   var file = "../resources/SHOHAMDEYSARKAR_RESUME.pdf";
  //   let fileName = 'SHOHAMDEYSARKAR_RESUME.pdf';
  //   var blob = new Blob([file], {type: "application/pdf;charset=utf-8"});
  //   FileSaver.saveAs(blob,fileName);
  // }
  // console.log(__dirname)
  // SHOHAMDEYSARKAR_RESUME.pdf
  return (
    <>
        <div className="container header header_txt " >
        <div className="row" data-aos="zoom-in">
            <h1 className="txt" >Hi👋,</h1>
            <h1 className="txt">I am <span className="h1 txt-type position-relative txt_color" data-wait="500" data-words='["Shoham Dey Sarkar","a Full Stack Web Developer","a Software Engineer","a Competitive Programmer"]'></span></h1>
        </div>
          <button type="button" className="newbtn">Resume</button>
          <img src={require("../images/img3.png")} className="img-fluid logo-img" data-aos="zoom-out-down" data-aos-delay="50" data-aos-easing="ease-in" />
        </div>
        <FloatingIcons />
    </>
  );
}
