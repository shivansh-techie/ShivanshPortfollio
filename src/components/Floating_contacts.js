import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import '../assets/styles/floating_contact.css';
import '../utils/floating_contact_anim.js';

function Float_contact()
{

    function contact_alert2() {
        
    }

    return(
        <>
            <div className="float_con_2 p-0 text-end" id="float_contact" style={{"overflowX":"hidden"}}>
                <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal">
                    {/* <img src={ float_cont_img } alt="" className="float_cont_img_size"  data-tip="Get in Touch !!" type="button" onClick={contact_alert2} /> */}
                    <Tooltip place="top" type="light" effect="float"/>
                </a>    
            </div>
        </>
    )
}

export default Float_contact;
