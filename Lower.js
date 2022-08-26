// import { render } from '@testing-library/react';
import React  from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
// import Framepage from './Framepage';
// import { Axios } from 'axios';
// import Tooltip from '@material-ui/core/Tooltip';
// import Button from '@material-ui/core/Button';

export default function Lower() {
    
    // const [api, setApi] = useState(true);
    // const estateapi = () => {
    //     fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed").then((response) => response.json()).then((data) => {
    //         setApi(data.excerpt);
    //         console.log(data);
    //     }
    //     );
    // };

    return (
        <>
            <div className='container-flex p-5 bg-light'>
                <div className='row cols-sm-12 lower-row'>
                    <div className='col p-3 my-5'>
                        <h1> Always have us <br /> <span style={{ color: '#0074aa' }}>at your fingertips</span></h1>
                        {/* <details>
                            <summary>Click on button</summary>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sit rerum maiores blanditiis? Repudiandae fugiat soluta debitis dolorem.
                                Ut enim et error ducimus quibusdam sequi corrupti
                                facilis necessitatibus nobis accusantium? Adipisci!</p>
                        </details> */}
                        <iframe src="/framepage" width={800} height={300} scrolling='auto'  marginheight="0" marginwidth="0" title='iframe' className=' my-5 ' style={{border:'0', textDecoration:'none'}}> </iframe>
                  </div>
                    <div className='col p-3'>
                        <img src="lower-image1.webp" className='lower-image1' alt="" />
                    </div>
                       
                    <div className='container-flex carousal-div my-5 slider '>
                        <div className='my-5 text-center'>
                            <h1>The <span style={{ color: '#0074aa' }}> spotlight</span> on Us</h1>
                            <p>We don’t just make second homes. We make headlines as well.</p></div>
                        <div className='slide-track'>
                            <div className="bgimg">
                                <img src="carousal-image1.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image2.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image3.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image4.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image5.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image6.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image7.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image8.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image5.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image3.webp" alt="" />
                            </div>
                            <div className="bgimg">
                                <img src="carousal-image7.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Link to='/readmore'>
                    <button className="btn btn-primary btn-lg">Read more</button>
                    </Link>
                </div>
            </div>
            
            <Footer />
        </>
    )
}