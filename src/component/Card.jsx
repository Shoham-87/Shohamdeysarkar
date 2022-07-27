import React from "react";

const Card=(props)=>
{
    let {ImgLink,title,url,desc,lang,slide}=props;
    return (<> 
    <article class="postcard dark blue" data-aos={`fade-${slide}`}>
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src={`${require(`../images/${ImgLink}`)}`}
                alt="Image Title"
              />
            </a>
            <div class="postcard__text">
              <h1 class="postcard__title blue txt_color">
                <a href={`${url}`} target="_blank">{title}</a>
              </h1>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                {desc}
              </div>
              <ul class="postcard__tagbox">
                {
                    lang.map((val)=>
                    {
                        return<>
                        <li class="tag__item">
                          <i class="fas fa-tag mr-2"></i>{val}
                        </li>   
                        </>;
                    })
                }
              </ul>
            </div>
          </article>     
    </>);
}
export default Card;
        // <div class="card mycard col-lg-4 ">
        //     <img src={`${require(`../images/${ImgLink}`)}`} class="card-img-top" alt="Project Image" />
        //     <div class="card-body">
        //         <h5 class="card-title">{title}</h5>
        //         <p class="card-text">{desc}</p>
        //         <a href="#" class="btn btn-primary">Visit</a>
        //     </div>
        // </div>