import React from 'react';

export default function Skills(){
    return(<>
        <section id="skills">
        <h1 class="h1 text-center">
            <span className="txt_color" data-aos="zoom-in">Skills</span>
          </h1>
        <div className='container skills dark' data-aos="zoom-in">
        <button type="button" class="btn btn-primary waves-effect" id="github">Html</button>
        <button type="button" class="btn btn-primary waves-effect" id="github">CSS</button>
        <button type="button" class="btn btn-primary waves-effect" id="github">JavaScript</button>
        <button type="button" class="btn btn-primary waves-effect" id="github">React</button>
        <button type="button" class="btn btn-primary waves-effect" id="github">Node</button>
        <button type="button" class="btn btn-primary waves-effect" id="github">Express</button>
        <button type="button" class="btn btn-primary waves-effect" id="github">MongoDB</button>
        <button type="button" class="btn btn-primary waves-effect" id="github">Python</button>
        <button type="button" class="btn btn-primary waves-effect" id="github">C/C++</button>
        <button type="button" class="btn btn-primary waves-effect" id="github">Java</button>
        </div>
        </section>

    </>);
}