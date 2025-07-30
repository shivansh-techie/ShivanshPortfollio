// CONTACT ME FORM

import React, { useState } from "react";
import swal from "sweetalert"; //for alert box

import "../assets/styles/contactme.css";

function Contactme() 
{

  return (
    <>
      <div className="modal fade" id="contactModal">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="container-fluid overflow-hidden p-0">
                <div className="row p-0 ">
                  <div className="col-md-12 mdl2 px-5 pt-4 ">
                    <h2 className="position-absolute end-0 me-4">
                      <i
                        data-bs-dismiss="modal"
                        className="fa fa-close"
                      ></i>
                    </h2>
                    <br />
                    <h2 className="text-center">Reach Out !!</h2>
                    <h5 className="mb-5 text-justify">
                      <b>Full time job opportunity</b>, freelance opportunity or
                      even a coffee. <br /> However, if you have any additional requests or questions, please do not hesitate to contact me via the links below.
                    </h5>

                    {/* SOCIAL CONNECT ICONS */}
                    <center>
                      <a
                        href="https://www.linkedin.com/in/shivansh-pradhan-53017236b/"
                        target="_blank"
                      >
                        <i
                          title="Linkedin"
                          className="fa-brands fa-linkedin-in mdl_1_icon me-4 form_ip_anim3"
                        ></i>
                      </a>

                      <a
                        href="https://github.com/shivansh-techie/shivansh-techie"
                        target="_blank"
                      >
                        <i
                          title="GitHub"
                          className="fa-brands fa-github mdl_1_icon form_ip_anim3 mx-4"
                        ></i>
                      </a>

                      <a href="https://wa.me/917488188343" target="_blank">
                        <i
                          title="What's App"
                          className="fa-brands fa-whatsapp mdl_1_icon form_ip_anim3 mx-4"
                        ></i>
                      </a>

                      <a href="mailto: pradhanshivansh1203@gmail.com">
                        <i
                          title="G-Mail"
                          className="fa fa-envelope mdl_1_icon form_ip_anim3 mx-4"
                        ></i>
                      </a>

                      <a href="tel: 7488188343" target="_blank">
                        <i
                          title="Phone"
                          className="fa fa-phone mdl_1_icon form_ip_anim3 ms-4"
                        ></i>
                      </a>
                    </center>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactme;
