import '../assets/styles/openingpage.css'
import Navbar from './Navbar';


function Openingpage()
{
    return(
        <>
            <div className="container-fluid opening_page mt-2 pb-0" style={{"overflowX":"hidden"}}>

                <Navbar></Navbar>
                
                <div className="row mt-5 mb-1 pt-5 ">

                <div className="col-lg-5 offset-md-1 intro mb-2 mx-auto text-center">
                    Hi, <br /> I'm Shivansh Pradhan,
                    <div class="morph_cont">
                        <div class="morph_word">Software Engineer</div>
                        <div class="morph_word">Front End Developer</div>
                        <div class="morph_word">MERN Stack Developer</div>
                    </div>
                    <p>Software Engineering graduate with strong technical skills anchored on extensive engineering coursework and a special focus on Front-end Development and MERN.</p>
                </div>

                <div className="col-lg-5 text-center intro_img mb-5 text-center offset-md-1 mx-auto">
                    AS.
                </div>

                </div>

                 {/* wave start */}

                <div className="row">

                <div className="wave_anim" style={{"height": 250}}>
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                    <div className="wave wave4"></div>
                </div>

                </div>

                {/* wave end */}

            </div>

        </>
    )
}    

export default Openingpage;
