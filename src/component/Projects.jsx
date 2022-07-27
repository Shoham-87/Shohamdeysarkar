import React from "react";
import Card from "./Card";
import "./Projects.css";
import ProjectsData from "../resources/ProjectsData";
const Projects = () => {
  return (
    <>
      <section id="projects">
        <div class="container py-4">
          <h1 class="h1 text-center" id="pageHeaderTitle">
            <span className="txt_color" data-aos="zoom-in">Projects</span>
          </h1>
	  {
		  ProjectsData.map((val)=>
		  {
			  return (
				  <Card key={val.id} ImgLink={val.ImgLink} title={val.title} url={val.url} desc={val.desc} lang={val.languages} slide={val.slide}/>
			  );
		  })
	  }
        </div>
      </section>
    </>
  );
};
export default Projects;
// <div className="container projects" >
//     <div >
//         <h1 className="text-center txt_color">Projects</h1>
//     </div>
//     <div className="row d-flex">
//         </div>
//     </div>
