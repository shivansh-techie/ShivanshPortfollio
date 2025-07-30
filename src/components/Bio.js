import '../assets/styles/bio.css'

// import bio_img from './imgs/bio_img.png'

// import cv from './pdf_files/CV_Anirudha_Singla.pdf'

function Bio()
{
    return(
        <>
        
            <div className="container-fluid p-0 bio_text_cont" style={{"overflowX":"hidden"}} id="bio">

                <div className="row cutout_box">
                    <h1 className="cutout_text" id="bio">MY BIO</h1>
                </div>

                <div className="row p-5">

                    <div className="col-lg-6 mx-auto text-center bio1_container bio_text" id="biotext_1">
                        
                        <h1> <mark> MERN DEVLOPER</mark> , hobbyist writer, and a specialist <br /> <mark>Front End Developer</mark> </h1>

                        <div className="text-center py-0">
                            {/* <img src={ bio_img } alt="" className="bio_img_size" /> */}
                            </div>

                    </div>

                    <div className="col-lg-5 mx-auto bio_text_2 text-center" id="biotext_2">
                        
                    {/* <h4 className="tag_name mb-3"> bio</h4> */}

                        I'm a Full Stack developer based in Noida, India. With a focus on Front End Development and Java(Under training). I am well-versed in a variety of front end and analytical languages, responsive frameworks, and database management systems. My goal is simple to use my development and analytical skills to improve corporate performance as an engineer. <br /><br />

                        Although I am well-versed in a variety of programming languages, my core expertise is in HTML/CSS, Bootstrap, JavaScript, React.js, Python, Sql, and MS Excel. <br /><br /> 

                        With a heavy emphasis on "Progressive Enhancement," I strive for innovative methods to push my bounds while adhering to proper code standards. <br /><br />

                        In a quest for always keeping <b>myself updated</b>, I read books and attend seminars & meetups.

                    {/* <h4 className="tag_name mb-3"> /bio </h4> */}

                    {/* <button type="button" className="cv_button w-75 mt-4" 
                    title="SHOW CV">
                            <a href= {cv} target = "_blank">  
                                Curriculum Vitae (PDF) <i className="fa-solid fa-download ms-2"></i>
                            </a>
                    </button> */}

                    {/* <h4 className="tag_name mb-3"> /bio </h4>  */}

                    <button type="button" className="cv_button w-75 mt-4" 
                    title="SHOW CV">
                            <a href= "https://www.linkedin.com/in/shivansh-pradhan-53017236b/" target = "_blank">  
                                View Full Profile
                            </a>
                    </button>
                    
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bio;
