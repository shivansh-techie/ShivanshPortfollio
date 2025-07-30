import swal from "sweetalert"; //for alert box

import '../assets/styles/common_css.css'
import '../assets/styles/button.css'

import '../utils/fullpage_anim.js'

import Progressbar from './Progressbar';
import Floating_social from './Floating_social';
import Openingpage from './Openingpage';
import Counter from './Counter';
import Bio from './Bio';
import Abtme from './Abtme';
import Marquee from './Marquee';
import Contactme from './Contactme';
import Totop from './Totop';
import Project from './Projects';
import Footer from './Footer';
import Float_contact from './Floating_contacts';

function App()
{

    window.onload = function(){
        swal({
            title: "HELLO !! (^‿^)✌",
            text: "This website has been Designed & Developed independently by SHIVANSH PRADHAN. \n \n  THANK YOU!! (^‿^)",
            icon: "success",})
    }

    return(
        <>
            <Openingpage />
            <Counter />
            <Bio />
            <Abtme />
            <Marquee />
            <Project />
            <Footer />

{/* -------------------------------------------------------------- */}

            <Progressbar />
            <Floating_social />
            <Totop />
            <Float_contact />
            <Contactme />


        </>
    )
}

export default App;
