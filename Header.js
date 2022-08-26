import React, { useState } from 'react'
import { FaCity, FaBuilding, FaBed, FaArrowDown, FaWhatsapp, FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import Griditems from './Griditems';
// import { Link } from 'react-router-dom';


export default function Header() {
    const [show, setShow] = useState(false)
    const [hide, setHide] = useState(true)
    const [change, setChange] = useState('Register Here')

    const changeble = () => {
        setChange('Sign up');
        setHide(false);
    }

    // const change0nclick = btn.addEventListener('click',() =>{
    //     search.classNameList.toggle('active')
    //     input.focus()
    // })
    return (
        <>
            <div>
                <div className='header-bgimg'>
                    <div>
                        <nav className="navbar">
                            <div className="container-fluid">
                                <a href='/' className="navbar-brand"><img src="https://www.sikarinfotech.com/images/sikar-infotech-logo.png" alt="" /></a>
                                <form className="d-flex" role="search">
                                    <ul>
                                        <li>Expolore Residences</li>
                                        <li>Buying</li>
                                    </ul>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Login here</button>


                                    {/* <button className="btn btn-outline-dark btn-lg" type="submit"> <FaPhoneAlt /> Request a Call Back</button> */}
                                </form>
                            </div>
                        </nav>
                    </div>
                    <div id="carouselExampleIndicators" className="container  carousel slide " data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-primary" aria-current="true" aria-label="Slide 1" ></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className='bg-primary' aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className='bg-primary' aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="image2.webp" className="container d-block w-50 opacity" alt="..." />
                                <div className='s my-1 p-5 heading-div1'>
                                    <h1>
                                        Say hello to your <br />  second  Home/House <br /> in...
                                    </h1>
                                    <h2>Mumbai!</h2>
                                    <p className='paragarph'>A new city can sometimes feel too <br /> new, right?</p>
                                    <div className='my-4 heading-div2'>
                                        <h6>Find Home</h6>
                                        <h6>Contact Us</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="image3.webp" className="container  d-block w-50 opacity" alt="..." />
                                <div className=' my-1 p-5 heading-div1'>
                                    <h1>
                                        Let's find out a <span style={{ color: '#0074aa' }}>Co</span>zy<br />
                                        accomodation <br /> for you!
                                    </h1>
                                    <h2>Better</h2>
                                    <p className='paragarph'>Book your hassle-free stay with us, based <br /> on what  suits you best</p>
                                    <div className='my-4 heading-div2'>
                                        <h6>Find Home</h6>
                                        <h6>Contact Us</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="image1.webp" className="container d-block w-50  opacity" alt="..." />
                                <div className=' my-1 p-5 heading-div1'>
                                    <h1>
                                        Sikar <span style={{ color: '#0074aa' }} >Info</span>tech Do<span style={{ color: '#0074aa' }}>es</span><br /> Real Estate
                                    </h1>
                                    <h2>Better</h2>
                                    <p className='paragarph'>Lorem ipsum dolor sit amet consectetur <br /> address get lorem.</p>
                                    <div className='my-4 heading-div2'>
                                        <h6>Find Home</h6>
                                        <h6>Contact Us</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container text-center inside-row">
                            <div className="row">
                                <div className="col" >
                                    {/* <b>Choose Property type</b> */}
                                    <input list='City-names-list' id='City-names' placeholder='Choose Property Type' className='p-1 border-0 bg-light w-100 text-center' />
                                    {/* <select  id="City-names-list"> */}
                                    <datalist id="City-names-list">
                                        {/* <option value=""><strong>Choose property type</strong> </option> */}
                                        <option value="Modern Student Housing"></option>
                                        <option value="Co-living for Professionals"></option>
                                        <option value="Managed Apartments"></option>
                                    </datalist>
                                    {/* </select> */}
                                    <p className='my-1 inside-p' style={{ fontSize: 'smaller', color: 'grey' }}>Select your living space</p>
                                </div>
                                <div className="col order-5" >
                                    Find in and around...
                                    <button type="submit"><FaArrowDown className='search-icon' /></button>
                                    <input type="search" className='search-input' placeholder='Enter College/office/locality/city' />
                                    {/* <select className=' inside-p' style={{ fontSize: 'x-small', color: 'grey' }}>
                                        </select> */}
                                </div>
                            </div>
                            {/* <!--....................... google map iframe...................... --> */}
                            <iframe width="650" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='map'
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-500.04673002474011%2C16.95487694424327%2C-61.60521696321666%2C17.196751341562923&amp;layer=mapnik"
                                style={{ border: '1px solid black' }}></iframe>
                            <br /><small><a href="https://www.openstreetmap.org/#map=12/17.0759/-61.8260">View Larger Map</a></small>
                            {/* <!--....................... google map iframe...................... --> */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <hr />
                <div className="container px-4 text-center my-5 cities">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-3 "><FaCity className='icons' /> <b className='bld'> 24+</b> Citie</div>
                        </div>
                        <div className="col">
                            <div className="p-3 "><FaBuilding className='icons' /> <b className='bld'> 450+</b> Residence</div>
                        </div>
                        <div className="col">
                            <div className="p-3 "> <FaBed className='icons' /> <b className='bld'> 70,000+</b> Beds</div>
                        </div>
                    </div>
                </div>
                <div className='search'>
                    {/* <iframe src="Framepage.jsx" width="650" height="150" frameborder="1" scrolling="no" marginheight="0" marginwidth="0" title='form'>                    </iframe> */}
                    {/* <a href="https://web.whatsapp.com"> */}
                    {/* <input type="text" className="input" placeholder="search..." /> */}
                    <button className='whatsapp' onClick={() => setShow(true)} >
                        {show ? <div className='form bg-dark p-3'>
                            <img src="chat-image.png" className='my-3' alt="" style={{ height: '7rem', marginRight: '3rem' }} />
                            <img src="chat-image2.png" className='my-3' alt="" style={{ height: '7rem', float: 'left', marginLeft: '2rem' }} />

                            <select className="form-select form-select-lg form-floating mb-3 w-100 my-3 text-center " aria-label=".form-select-lg example">
                                <option selected>Where you from?</option>
                                <option value="1">Mumbai</option>
                                <option value="2">Gujarat</option>
                                <option value="3">Delhi</option>
                            </select>
                            <div className="form-floating mb-3 w-100">
                                <input type="email" className="form-control" id="floatingInput"
                                    placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating w-100" >
                                <input type="text" className="form-control" id="floatingPassword"
                                    placeholder="Password" />
                                <label for="floatingPassword">Name</label>
                            </div>
                        </div> : null}

                        <FaWhatsapp className='wtsicon' />
                    </button>
                    <button type="button" class="btn-close" data-bs-dismiss="form" aria-label="Close" onClick={() => setShow(false)}></button>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content" style={{ borderRadius: '2rem' }}>
                        <div class="modal-header" style={{ backgroundColor: '#fff', borderRadius: '2rem', border: '0' }}>
                            <h5 class="modal-title" id="exampleModalLabel">{change}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='bg-light ' style={{
                            border: '2px solid #0074aa',
                            margin: '1rem',
                            borderRadius: '.5rem',
                            backgroundImage: 'linear-gradient(to top, #fff , #0092aa)'
                        }}>
                            <div class="modal-body">
                                <form>
                                    <div style={{ display: 'inline-flex', columnGap: '1rem' }}>
                                        <div class="mb-3">
                                            <input type="text" class="form-control border-0" id="recipient-name" placeholder='First Name' />
                                        </div>
                                        <div class="mb-3">
                                            <input type="text" class="form-control border-0" id="recipient-name" placeholder='Last Name' />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <input type="tel" class="form-control border-0" id="formGroupExampleInput" placeholder="+91 Mobile no." name='+91' />
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control border-0" id="recipient-name" placeholder='Password' />
                                    </div>
                                    {hide ? <div>
                                        <h5>I am a</h5>
                                        <div style={{
                                            display: 'inline-flex',
                                            columnGap: '1rem'
                                        }}>
                                            <div class="form-check" >
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label class="form-check-label " for="flexRadioDefault1">
                                                    Student
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Working Professional
                                                </label>
                                            </div>
                                        </div>
                                        <div className='my-2'>
                                            <select class="form-select border-0 " aria-label="Default select example">
                                                <option selected>Select City</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div> : null}
                                </form>
                                {hide ? <div>
                                    <hr />
                                    <div className='text-center'>
                                        <h6>login With</h6>
                                    </div>
                                    <div className='my-3 text-center' style={{
                                        letterSpacing: '2rem',
                                        fontSize: '2rem'
                                    }}>
                                        <FaGoogle style={{ color: '#EA4335', cursor: 'pointer' }} /> <FaFacebookF style={{ color: '#4267B2', cursor: 'pointer' }} /> <FaLinkedinIn style={{ color: '#0e76a8', cursor: 'pointer' }} />
                                    </div>
                                    <p className='text-center' style={{ fontWeight: '200' }}>Don't have an account?<span onClick={changeble} style={{ cursor: 'pointer', color: '#0074aa', fontWeight: '500' }}><strong>Sign Up.</strong></span></p>
                                </div> : null}
                            </div>
                        </div>
                        <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" class="btn btn-primary btn-lg " style={{ backgroundColor: '#0074aa' }}>{change}</button>
                        </div>

                    </div>
                </div>
            </div>
            <Griditems />
        </>

    )
}