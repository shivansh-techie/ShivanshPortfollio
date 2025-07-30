import '../assets/styles/marquee.css';

function Marquee() {
  return (
    <div className="container-fluid" style={{"overflowX":"hidden"}}>
      <div className="row mq_cont py-4">
        <div className="col-md-10 mx-auto marquee_bg">
          <marquee className="pt-4" scrollamount="15" behavior="alternate">
            {/* Text-only version (recommended) */}
            <span className="mx-5">HTML</span>
            <span className="mx-5">CSS</span>
            <span className="mx-5">Bootstrap</span>
            <span className="mx-5">JavaScript</span>
            <span className="mx-5">Express</span>
            <span className="mx-5">SQL</span>
            <span className="mx-5">React</span>
            <span className="mx-5">Git</span>
            <span className="mx-5">Node.js</span>
            <span className="mx-5">npm</span>
            <span className="mx-5">MongoDB</span>
            <span className="mx-5">Java</span>
            <span className="mx-5">Python</span>
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
