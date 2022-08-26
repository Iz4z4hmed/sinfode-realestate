import React from 'react'
import Lower from './Lower'

export default function Middle() {
    return (
        <div className='bg-light'>
            <div className='container middle-heading '>
                <h1>Not Just Four Walls And a roof </h1>
                <p>Come over and experience how a place to stay can be so much more</p>
            </div>

            <div class="container text-center middle-row">
                <div class="row  gx-5">
                    <div class="col-6 ">
                        <div class="row gx-5 ">
                            <div class="col-sm-6"><img src="middle-image2.webp" className='middle-image1' alt="" /></div>
                            <div class="col-sm-6"><img src="middle-image1.webp" className='middle-image1' alt="" /></div>
                            <div className='row'>
                                <div class="col-lg-12 my-4 mx-2 "><img src="middle-image3.webp" className='middle-image3' alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 text-start">
                        <div class="p-3 my-5 ">
                            <h2>Start living your best life
                                from <span style={{ color: '#0074aa' }}> day one </span></h2>
                            <p className='my-3'>
                                Bring a box full of hopes, dreams, ambitions… and of course,
                                your personal belongings. Everything else - furniture,
                                appliances, food - has already been taken care of.
                            </p>
                        </div>
                    </div>
                </div>

                {/* .............................middle row2.................................... */}

                <div class="container text-center middle-row2">
                    <div class="row gx-5">
                        <div class="col text-start">
                            <div class="p-3 my-5 ">
                                <h2>Step into a room that has
                                    <span style={{ color: '#0074aa' }}> room for everything </span></h2>
                                <p className='my-3'>
                                    Your clothes and bag will not be fighting for space
                                    on the same chair. At Stanza Living, there’s ample
                                    room for all your possessions. Even a framed photo
                                    of your family, for the rare occasions you miss home.
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <img src="middle-image4.webp" className='middle-image4' alt="" />
                            <div className='row'>
                                <div className='col-sm middle-image5-col'>
                                    <img src="middle-image5.webp" className='middle-image5' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* .............................middle row3.................................... */}


                <div class="container text-center middle-row3">
                    <div class="row gx-5">
                        <div class="col">
                            <img src="middle-image6.webp" className='middle-image6' alt="" />
                            <div className='row'>
                                <div className='col middle-image7-col'>
                                    <img src="middle-image7.webp" className='middle-image7' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col text-start">
                            <div class="p-3 my-5 ">
                                <h2>Take your daily list of chores. And
                                    <span style={{ color: '#0074aa' }}> tear it up</span></h2>
                                <p className='my-3'>
                                    You have better things to do than wash your clothes,
                                    clean up your room and cook your meals.
                                    So our team of pros will do them all for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ........................middle row4............................... */}

                <div class="container text-center middle-row4 my-5">
                    <div class="row gx-5">
                        <div class="col text-start">
                            <div class=" my-5 ">
                                <h2> Chill in a <span style={{ color: '#0074aa' }}>common area  </span>that’s anything but common</h2>
                                <p className='my-3'>
                                    Nope, we don’t try to pass off a few plastic chairs
                                    and a TV as a common area. We’ve replaced them with
                                    sofas, bean bags and large-screen TVs. And we’ve also
                                    added gaming zones, fitness centres and chillout
                                    corners as a bonus.
                                </p>
                            </div>
                        </div>
                        <div class="col ">
                            <div class="container text-center">
                                <div class="row row-cols-2">
                                    <div class="col"><img src="middle-image8.webp" className='middle-image8' alt="" /></div>
                                    <div class="col"><img src="middle-image9.webp" className='middle-image9' alt="" /></div>
                                </div>
                                <div class="row row-cols-2 my-4">
                                    <div class="col"><img src="middle-image9.webp" className='middle-image9' alt="" /></div>
                                    <div class="col"><img src="middle-image8.webp" className='middle-image8' alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ...............................middle-row5........................ */}

                <div class="container text-center middle-row5 my-5 ">
                    <div class="row gx-5">
                        <div class="col  ">
                            <div class="container text-center">
                                <div class="row row-cols-2">
                                    <div class="col"><img src="middle-image12.webp" className='middle-image12' alt="" /></div>
                                    <div class="col"><img src="middle-image13.webp" className='middle-image13' alt="" /></div>
                                </div>
                                <div class="row row-cols-2 my-4">
                                    <div class="col"><img src="middle-image13.webp" className='middle-image13' alt="" /></div>
                                    <div class="col"><img src="middle-image12.webp" className='middle-image12' alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div class="col text-start">
                            <div class=" my-5 ">
                                <h2> Don't come expacting <br /><span style={{ color: '#0074aa' }}>"Hostel-PG food"</span></h2>
                                <p className='my-3'>
                                    Nope, we don’t try to pass off a few plastic chairs
                                    and a TV as a common area. We’ve replaced them with
                                    sofas, bean bags and large-screen TVs. And we’ve also
                                    added gaming zones, fitness centres and chillout
                                    corners as a bonus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Lower />
        </div>
    )
}