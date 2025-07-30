import { useState } from "react";
import '../assets/styles/abtme.css'


function Abtme() 
{
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
      <>

    <div className="container-fluid abtme_bg pb-5" style={{"overflowX":"hidden"}}>

{/* ------------------------ heading start -------------------- */}
        <div class="row">
            <div class="col-md-5 mx-auto text-center abt_me_heading" id="abt_me">
                ABOUT ME
            </div>
        </div>
{/* ------------------------ heading end -------------------- */}

{/* ------------------- abt me complete sections start -------------------- */}

        <div className="container-fluid overflow-x-hidden">

            {/* about me on click tabs */}
            <div className="row">
                <div className="col-md-6 mx-auto d-flex flex-wrap mt-2 mb-4 justify-content-center bio_tabs">

                    <div className={toggleState === 1 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(1)}>
                        MY SKILLS   
                    </div>

                    <div className={toggleState === 3 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(3)}>
                        EDUCATION   
                    </div>

                    <div className={toggleState === 4 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(4)}>
                        EXPERIENCE   
                    </div>

                    <div className={toggleState === 2 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(2)}>
                        ADDITIONAL SKILLS   
                    </div>

                </div>
            </div>
            {/* about me on click tabs end */}

            {/* about me tabs content start */}
            <div className="row">
                
                {/* skills start */}
                <div className={toggleState === 1 ? "content_abtme  active-content_abtme" : "content_abtme"}>
                    
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 mx-auto abt_cont pb-4">
                                <div className="row d-flex flex-wrap">
                                    
                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom": "10px solid #CBB26A"}}>
                                        <h5 style={{"color": " #CBB26A"}}><b>MARKUP / STYLING LANGUAGE</b></h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-brands fa-html5" style={{"color": "rgba(255,103,57,.9)"}}></i> <h6>HTML</h6> </div> 
                                        <div className="text-center"> <i className="fa-brands fa-css3-alt" style={{"color": "#5DADE2"}}></i> <h6>CSS</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom": "10px solid #CBB26A"}}>
                                        <h5 style={{"color": "#CBB26A"}}> <b>CSS FRAMEWORK</b></h5>			
                                        <div className="text-center"> <i className="fa-brands fa-bootstrap" style={{"color": "#AF7AC5"}}></i> <h6>BOOTSTRAP</h6> </div> 
                                    </div>

                                        <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom": "10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}>FRONT-END LANGUAGE</h5>			
                                        <div className="text-center"> <i className="fa-brands fa-js-square" style={{"color": "yellow"}}></i> <h6>JAVA SCRIPT</h6> </div> 
                                    </div>
                                </div>

                                <div className="row d-flex flex-wrap">

                                    <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color": "#CBB26A"}}>JAVASCRIPT FRAMEWORK</h5>			
                                        <div className="text-center"> <i className="fa-brands fa-react" style={{"color": "#61dafb"}}></i> <h6>REACT JS</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color": "#CBB26A"}}>PACKAGE MANAGER</h5>			
                                        <div className="text-center"> <i className="fa-brands fa-npm" style={{"color": "#cb0000"}}></i> <h6>NPM</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}>DATABASE MANAGEMENT</h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-solid fa-database" style={{"color": "#3E6E93"}}></i> <h6>SQL</h6> </div> 
                                        <div className="text-center"> <i className="fa-brands fa-envira" style={{"color": "#82E0AA"}}></i> <h6>MONGO DB <br></br> (NO SQL)</h6> </div> 
                                    </div>
                                </div>

                                <div className="row d-flex flex-wrap">		
                                    <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}>VERSION CONTROL</h5>			
                                        <div className="text-center"> <i className="fa-brands fa-git-alt" style={{"color": "#f14e32"}}></i> <h6>GIT</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color": "#CBB26A"}}>PROGRAMMING LANGUAGE</h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-brands fa-java" style={{"color": "#f89820"}}></i> <h6>JAVA</h6> </div> 
                                        <div className="text-center"> <i className="fa-brands fa-python" style={{"color": "#4B8BBE"}}></i> <h6>PYTHON</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                    <h5 style={{"color": "#CBB26A"}}>MS OFFICE</h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-solid fa-file-excel" style={{"color": " lightgreen "}}></i> <h6>EXCEL<br></br> (&VBA)</h6> </div> 
                                        <div className="text-center"> <i className="fa-solid fa-file-powerpoint" style={{"color": "#00a1f1"}}></i> <h6>POWERPOINT</h6> </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                
                </div>
                {/* skills end */}

                {/* extra skills start */}
                <div className={toggleState === 2 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                        <div className="row text-center">
                            <div className="col-md-6 mx-auto abt_cont extra_skill_text">
                                                
                                <h2 style={{"color": "#CBB26A", "lineHeight":1.5}}>SOFT SKILLS</h2>
                                
                                <h4 className='text-start text-white'>
                                    <ul>
                                        <li>Communication & Interpersonal  skills
                                            <h6 className='ms-5 mt-2'>Have the ability to successfully express the desired message while keeping the listener engaged.</h6>
                                        </li>

                                        <li>Public speaking skills
                                            <h6 className='ms-5 mt-2'> Have substantial public speaking experience in the form of event hosting and presenting presentations in front of big groups. Participated in several debate and MUN competitions, which aided in the development of these talents. </h6>
                                        </li>

                                        <li>Leadership & Management skills
                                            <h6 className='ms-5 mt-2'> Skilled in organising others to achieve a common objective and motivating the team to achieve the desired result. Can organise and communicate properly in order to help a team or project. </h6>
                                        </li>

                                        <li>Quick & Visual Learner
                                            <h6 className='ms-5 mt-2'>I am a strong visual learner who is driven to tackle challenges and find an efficient solution rapidly.</h6>
                                        </li>

                                        <li> Effective Problem Solver
                                            <h6 className='ms-5 mt-2'> I have the capability to solve problems and determining the cause of the problem. Identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.</h6>
                                        </li>
                                    </ul>
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
                {/* extra skills end */}

                {/* education start */}
                <div className={toggleState === 3 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                        <div className="row text-center justify-content-center">

                            <div className="col-lg-4 text-start abt_cont edu_cont p-3 mt-2 me-2">
                                            
                                            <i className="fa-solid fa-user-graduate mt-2 mb-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                            <h5>2021-2025</h5>
                                            <h5>UNDER-GRADUATION (B.Tech)</h5>
                                            <h4 className='text-white'>Computer Science & Engineering (CSE)</h4>
                                            <h6>GPA - 7.7 / 10</h6>
                                            <h5>Shambhunath Institute of Engineering & Technology, Uttar-Pradesh</h5>

                                            <h5 className='text-start text-light mt-2'>
                                                <ul style={{"lineHeight":1.5}}>
                                                    <li>Graduated in Computer Science & Engineering.</li>
                                                    <li>As part of the coursework, I studied MERN and other coding languages thoroughly. </li>
                                                    <li>Engaged in various technical and non-technical societies and hosted and led multiple events for the same, demonstrating exceptional leadership and team abilities. </li>
                                                </ul>
                                            </h5>
                            </div>

                            <div className="col-lg-4 text-start abt_cont edu_cont p-3 mt-2 ms-2">   

                                            <i className="fa-solid fa-building-columns my-3" style={{"color":"#CBB26A", "fontSize":50}}></i>	
                                            <h5>2021</h5>
                                            <h3>Class - 12 </h3>
                                            <h6>Percentage - 68%</h6>
                                            <h5>BIHAR BOARD OF OPEN SCHOOLING, PATNA, BIHAR</h5>
                                            
                                            <h6 className='text-start text-white'>
                                                <ul style={{"lineHeight":1.5}}>
                                                    <li>Had exemplary academic track record with multiple academic excellence award. </li>
                                                    <li>Represented school on multiple platforms including on national level.</li>
                                                </ul>
                                            </h6>
                                            
                                            <i className="fa-solid fa-book mb-2" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                            <h5>2018</h5>
                                            <h3>Class - 10</h3>
                                            <h6>Percentage - 68.5%</h6>
                                            <h5>DON BOSCO ACADEMY, PATNA, BIHAR</h5>

                            </div>



                        </div>
                    </div>

                </div>
                {/* education end */}

                {/* experience start */}
                <div className={toggleState === 4 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                    <div className="row text-center">
                        <div className="col-md-7 mx-auto abt_cont edu_cont">
                                        
                                        <i className="fa-solid fa-laptop-code my-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                        <h5>June 2024 - September 2024 (3 mo)</h5>
                                        <h5>INDUSTRIAL TRAINING (Apprenticeship)</h5>
                                        <h3 className="my-2">FULL STACK DEVELOPMENT</h3>
                                        <h5>VSIT , LUCKNOW, UTTAR-PRADESH</h5>

                                        <h5 className='text-start text-light' style={{"lineHeight":1.5}}>
                                            <ul>
                                                <li> Extensive knowledge and expertise in web design and development using latest technologies.</li>
                                                <li> Learned how to leverage open source platforms to handle problems and errors in code in an efficient and timely manner. </li>
                                                <li> Gained hands-on experience working in a real-world IT setting alongside seasoned and experienced developers and professionals. </li>
                                                <li> On projects, I worked in a team with other developers as well as on my own. </li>
                                                <li> All of the mentors provided incredibly great feedback and reviews.</li>
                                                <li> As part of my training, I created a fully functional dynamic e-commerce webapp, three additional significant projects, and several other tasks. </li>
                                            </ul>
                                        </h5>

                        </div>
                    </div>
                    </div>

                </div>    
                {/* experience end */}

            </div>
            {/* about me tabs content end */}

        </div>

{/* ------------------- abt me complete sections end -------------------- */}

    </div>
    
    </>
  )
}

export default Abtme;
