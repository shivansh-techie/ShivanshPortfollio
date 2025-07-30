import '../assets/styles/footer.css'

// import footer_logo from './imgs/f_logo.png'


function Footer()
{
    return(
        <>
            <div className="container-fluid footer_bg" style={{"overflowX":"hidden"}}>
                
                <div className="row pt-4 mb-4">
                    <div className="col-md-2 mx-auto justify-content-center text-center">
                        {/* <img src={ footer_logo } alt="" className="footer_logo_size" id="footer_img" /> */}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-5 footer_text d-flex flex-wrap justify-content-around mx-auto text-center" id="footer_text">
                        <div className='mx-auto'> <i class="fa-solid fa-envelope"></i> pradhanshivansh1203@gmail.com</div>
                        <div className='mx-auto'> <i className="fa-solid fa-phone me-1"></i> (+91) 7488188343</div>
                    </div>
                </div>

                <div className="row pb-4">
                    <div className="col-md-3 d-flex justify-content-around footer_social mx-auto ">
                        
                        <div> <a href="https://github.com/shivansh-techie/shivansh-techie" target="_blank"><i title="GitHub" className="fa-brands fa-github"></i></a> </div>
                        
                        <div> <a href="https://www.linkedin.com/in/shivansh-pradhan-53017236b/" target="_blank"><i title="Linkedin" className="fa-brands fa-linkedin"></i></a> </div>
                        
                        <div> <a href="mailto: pradhanshivansh1203@gmail.com"><i title="G-Mail" className="fa-solid fa-envelope-open"></i></a> </div>
                        
                        <div> <a href="tel: 7488188343" target="_blank"><i title="Call" className="fa-solid fa-phone"></i></a> </div>
                        
                        <div> <a href="https://wa.me/917488188343" target="_blank"><i title="What's App" className="fa-brands fa-whatsapp"></i></a> </div>
                    
                    </div>
                </div>
            </div>

            <div className="contaier-fluid footer2_bg py-1" style={{"overflowX":"hidden"}}>
                <div className="row text-center"><h6 style={{"color": "#7b7f92"}}> Designed & Developed by Shivansh Pradhan <i className="fa-regular fa-hand-peace"></i>. </h6></div>
            </div>

            <div className="contaier-fluid footer2_bg py-1" style={{"overflowX":"hidden"}}>
            <div className="row text-center"><h6 style={{"color": "#7b7f92"}}> <i class="fa-regular fa-copyright"></i> Copyright 2025, ALL RIGHTS RESERVED. </h6></div>
            </div>

        </>
    )
}

export default Footer;
