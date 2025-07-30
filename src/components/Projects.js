import swal from "sweetalert"; //for alert box

import '../assets/styles/project.css'

// import p_img1 from './imgs/p1.png';
// import p_img2 from './imgs/p2.png';
// import p_img3 from './imgs/p3.png';


function Project()
{

    function message()
    {
        swal({
            title: "Hey !! ",
            text: 'You are already on this project.',
            icon: "warning",
        })
    } 

    return(
        <>
            <div className="container-fluid project_container" style={{"overflowX":"hidden"}}>

                {/* project heading */}
                <div className="row project_hding ">
                    <h4 className="mt-5" id="project"> CASE STUDIES </h4> <br />
                    <h1><b> Project Work </b></h1>
                </div>

                <div className="row py-5">

                    {/* project 1 */}
                    <div className="col-md-3 py-3 mt-3 project_card mx-auto" id="project3">
                        
                        <div className="project_img text-center ">
                            {/* <img src= {p_img3} alt="" className="project_img_size" />    */}
                        </div>

                        <div className="project_intro mt-4">
                            <h3>E-COMMERCE WEBSITE</h3> 
                            <h4>MERN Stack e-commerce Dynamic Website</h4>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>

                        <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li>Incorporated all the key features of an e-commerce website in a dynamic manner.</li>
                                    <li>Created multiple custom API using Nodejs and integrated it with a React setup.</li>
                                    <li>Followed best code practices while developing dynamic and reusable code.</li>
                                </ul>
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Technology Used</h6>
                        <h3 className='mb-2 text-light'>
                            <i class="fa-brands fa-html5 mx-2"></i>
                            <i class="fa-brands fa-css3-alt mx-2"></i>
                            <i class="fa-brands fa-js-square mx-2"></i>
                            <i class="fa-brands fa-bootstrap mx-2"></i>
                            <i class="fa-brands fa-react mx-2"></i>
                            <i class="fa-brands fa-node mx-2"></i>
                            <i class="fa-brands fa-npm mx-2"></i>
                            <i class="fa-brands fa-git-alt mx-2"></i>
                            <i class="fa-brands fa-envira mx-2"></i>
                        </h3>

                        <center><button className="btn btn_effect ms-4 p-2 my-1 project_links"  style={{"float":"left"}}>
                            <a href='https://github.com/shivansh-techie/shivansh-techie/MERN_STACK_E-COMMERCE_WEBSITE/blob/main/README.md' target="_blank">
                                Live Preview  <i class="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>
                        </button></center>

                        <center><button className="btn btn_effect me-4 p-2 my-1 project_links"  style={{"float":"right"}}>
                            <a href='https://github.com/shivansh-techie/shivansh-techie/MERN_STACK_E-COMMERCE_WEBSITE' target="_blank">
                               Source Code <i className="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>   
                         </button></center>
                            

                    </div>

                    {/* project 2 */}
                    <div className="col-md-3 p-2 mt-3 project_card mx-auto" id="project2">
                        
                        <div className="project_img text-center ">
                            {/* <img src= {p_img2} alt="" className="project_img_size" /> */}
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>PORTFOLIO WEBSITE</h2>
                            <h3>React Based Portfolio Website</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                        <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive front end, back end web page setup along with integrated database setup.</li>
                                    <li>Created all the components from scratch using react and java script.</li>
                                    <li>Hand coded custom amination using css and Jquery and making the website interactive.</li>
                                    <li>Worked on how to deploy a live website.</li>
                                </ul>
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Technology Used</h6>
                        <h3 className='mb-2 text-light'>
                            <i class="fa-brands fa-html5 mx-2"></i>
                            <i class="fa-brands fa-css3-alt mx-2"></i>
                            <i class="fa-brands fa-js-square mx-2"></i>
                            <i class="fa-brands fa-bootstrap mx-2"></i>
                            <i class="fa-brands fa-react mx-2"></i>
                            <i class="fa-brands fa-node mx-2"></i>
                            <i class="fa-brands fa-git-alt mx-2"></i>
                            <i class="fa-brands fa-npm mx-2"></i>
                            <i class="fa-brands fa-envira mx-2"></i>
                        </h3>

                        <center><button className="btn btn_effect my-1 ms-4 p-2 project_links" onClick={message} style={{"float":"left"}}>
                            Live Preview 
                        <i class="fa-solid fa-arrow-right-long ms-1"></i> 
                        </button></center>
                        
                        <center><button className="btn btn_effect me-4 p-2 my-1 project_links"  style={{"float":"right"}}>
                            <a href='https://github.com/shivansh-techie/shivansh-techie/ASINGLA_PORTFOLIO_WEBSITE' target="_blank">
                                Source Code <i className="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>     
                        </button></center>

                    </div>

                    {/* project 3  */}
                    <div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            {/* <img src= {p_img1} alt="" className="project_img_size" /> */}
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>TRAVEL BLOG</h2>
                            <h3>Front End Static Travel Blog</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Fully responsive static front end web page setup.</li>
                                    <li>Handled all composition, color, illustration, typography, and branding.</li>
                                    <li>Hand coded custom animation and form validation primarily using jquery and java script.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        <i class="fa-brands fa-github-alt mx-2"></i>
                        </h3>

                             <center><button className="btn btn_effect ms-4 my-1 p-2 project_links" style={{"float":"left"}}> 
                                <a href="https://travel-bug-blog.netlify.app/" target="_blank"> Live Preview <i class="fa-solid fa-arrow-right-long ms-1"></i>
                                </a> 
                            </button></center>

                            <center><button className="btn btn_effect my-1 me-4 p-2 project_links" style={{"float":"right"}}> 
                                <a href="https://github.com/shivansh-techie/shivansh-techie/STATIC-TRAVEL-BLOG--TRAVEL-BUG-" target="_blank"> Source Code  <i className="fa-solid fa-arrow-right-long ms-1"></i> 
                                </a> 
                            </button></center>

                    </div>

                    <h4 className='mt-4 pe-4 text-end andmore'>
                        <a href='https://github.com/shivansh-techie/shivansh-techie?tab=repositories' target='_blank'>
                             and More....
                        </a>
                    </h4>

                </div>

            </div>

        </>
    )
}

export default Project;
