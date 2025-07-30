import '../assets/styles/counter.css'

// import counter_img from './imgs/float_img1.png'

function Counter()
{
    return(
        <>
            <div className="container-fluid py-3 counter_container" style={{"overflowX":"hidden"}}>

                <div className="row">

                    {/* <div className='counter_img_cont mx-auto' id='counter_img_div'>
                        <img src={counter_img} alt='counter_image' className='counter_img_size' />
                    </div> */}

                    <div className='col-md-8 mx-auto d-flex flex-wrap' style={{"overflowY":"hidden"}}>

                        <div className='counter mx-auto mt-3 counter_text text-center' id='counter1'>
                           
                            <p> <i className="fa-solid fa-clock" style={{"fontSize":45}}></i> </p>
                            <h3 className="count counter_text">6,00+</h3> 
                            <p> Working Hours </p>
                        
                        </div>

                        <div className='counter mx-auto mt-3 counter_text text-center' id='counter2'>

                            <p> <i className="fa-solid fa-code" style={{"fontSize":45}}></i> </p> 
                            <h3 className="count counter_text">15,000+</h3>
                            <p> Lines Of Code </p>

                        </div>

                        <div className='counter mx-auto mt-3 counter_text text-center' id='counter3'>

                            <p> <i className="fa-solid fa-mug-saucer" style={{"fontSize":45}}></i> </p>
                            <h3 className="count counter_text">500+</h3>
                            <p> Cups of Coffee </p>

                        </div>

                        <div className='counter mx-auto mt-3 counter_text text-center' id='counter4'>

                            <p> <i className="fa-solid fa-cloud-moon" style={{"fontSize":45}}></i> </p>
                            <h3 className="count counter_text">100+</h3>
                            <p>  Sleepless Nights </p>

                        </div>

                    </div>                    

                </div>

            </div>
   
        </>
    )
}

export default Counter;
