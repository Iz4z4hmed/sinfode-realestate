import React from 'react';
import Footer from './Footer';
import Searchlocation from './Searchlocation'

export default function Readmore() {
    // const[collection]= useState(true);
    return (
        <>
        <nav><Searchlocation/></nav>
            <div className='p-4 bg-light'>
                <div className='container-flex carousal-div my-5 slider '>
                    <div className='my-5 text-center'>
                        <h1 className='my-4' style={{fontWeight:'700', fontSize:'3rem'}}>The <span style={{ color: '#0074aa'}}> Spotlight</span> on Us</h1>
                        <p style={{fontSize:'1.5rem'}}>We don’t just make second homes. We make headlines as well.</p></div>
                </div>
                <div className='readmore-bgimg'>
        {/* <div>{props.Text}</div> */}
                    {/* <div className='fade'></div> */}
                    <div className='economy-times'>
                        <h4 className='my-3'>The Economic Times, Apr 01, 2022</h4>
                        <h4> <b> Managed accommodation provider Stanza living acquires Singularity Automation</b></h4>
                        <h5 className='my-4'>Managed accommodation provider Stanza Living has acquired enterprise Internet of Things (IoT) platform company Singularity Automation for an undisclosed
                            <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span> </h5>
                    </div>
                </div>

                <div className='row my-3 p-3 readmore-row1'>
                    <div className='col readmore-bgimg2 p-3'>
                        <div className='readmore-headings1'>
                            <h4 className='my-3'>The ET Brand Equity, Oct 28, 2021</h4>
                            <h4><b>Stanza Living addresses parental paranoia through new campaign</b></h4>
                            <h5 className='my-3'>Co-living operator, Stanza Living rolled out a new brand campaign, ‘Loved by you. Approved by Moms’. The campaign consists of
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span> </h5>
                        </div>
                    </div>
                    <div className='col readmore-bgimg3 p-3'>
                        <div className='readmore-headings1'>
                            <h4 className='my-3'>Hindustan Times, Oct 09, 2020</h4>
                            <h4> <b> Migrant student accommodations made simple and safe by Stanza Living!</b></h4>
                            <h5 className='my-3'> The pandemic has undoubtedly impacted the education system and numerous colleges and universities have deferred their upcomin
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span></h5>
                        </div>
                    </div>
                </div>
                <div className='row p-3 readmore-row2'>
                    <div className='col readmore-bgimg4'>
                        <div className='readmore-headings2'>
                            <h5> The Economic Times, Sep 16, 2020M</h5>
                            <h5><b> tanza Living acquires Delhi-based student housing provider YourShell</b></h5>
                            <h6>Managed accommodation provider Stanza living has acquired Delhi-based student accommodation provider YourShell at an undis
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span>
                            </h6>
                        </div>
                    </div>
                    <div className='col readmore-bgimg5'>
                        <div className="readmore-headings2">
                            <h5>YourStory, Aug 13, 2020</h5>
                            <h5><b>Build & Grow | The accommodative approach towards managed housing</b></h5>
                            <h6>From ramping up hygiene checks and helping stranded people to providing food for the needy, watch Stanza Living co-founder
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span>
                            </h6>
                        </div>
                    </div>
                    <div className="col readmore-bgimg6">
                        <div className="readmore-headings2">
                            <h5> Inc42, Jun 12, 2020</h5>
                            <h5><b> Managed Accommodation Poised To Be The Future Of Rental Living</b></h5>
                            <h6>The pandemic has impacted businesses across the board upending years of theses on which several sectors were founded.
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

 {/* ..................................... row2 ................................................... */}

            <div className='p-4 bg-light'>
                <div className='readmore-bgimg2'>
                    {/* <div className='fade'></div> */}
                    <div className='economy-times'>
                        <h4 className='my-3'>The Economic Times, Apr 01, 2022</h4>
                        <h4> <b> Managed accommodation provider Stanza living acquires Singularity Automation</b></h4>
                        <h5 className='my-4'>Managed accommodation provider Stanza Living has acquired enterprise Internet of Things (IoT) platform company Singularity Automation for an undisclosed
                            <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span> </h5>
                    </div>
                </div>

                <div className='row my-3 p-3 readmore-row1'>
                    <div className='col readmore-bgimg2-2 p-3'>
                        <div className='readmore-headings1'>
                            <h4 className='my-3'>The ET Brand Equity, Oct 28, 2021</h4>
                            <h4><b>Stanza Living addresses parental paranoia through new campaign</b></h4>
                            <h5 className='my-3'>Co-living operator, Stanza Living rolled out a new brand campaign, ‘Loved by you. Approved by Moms’. The campaign consists of
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span> </h5>
                        </div>
                    </div>
                    <div className='col readmore-bgimg3-2 p-3'>
                        <div className='readmore-headings1'>
                            <h4 className='my-3'>Hindustan Times, Oct 09, 2020</h4>
                            <h4> <b> Migrant student accommodations made simple and safe by Stanza Living!</b></h4>
                            <h5 className='my-3'> The pandemic has undoubtedly impacted the education system and numerous colleges and universities have deferred their upcomin
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span></h5>
                        </div>
                    </div>
                </div>
                <div className='row p-3 readmore-row2'>
                    <div className='col readmore-bgimg4-2'>
                        <div className='readmore-headings2'>
                            <h5> The Economic Times, Sep 16, 2020M</h5>
                            <h5><b> tanza Living acquires Delhi-based student housing provider YourShell</b></h5>
                            <h6>Managed accommodation provider Stanza living has acquired Delhi-based student accommodation provider YourShell at an undis
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span>
                            </h6>
                        </div>
                    </div>
                    <div className='col readmore-bgimg5-2'>
                        <div className="readmore-headings2">
                            <h5>YourStory, Aug 13, 2020</h5>
                            <h5><b>Build & Grow | The accommodative approach towards managed housing</b></h5>
                            <h6>From ramping up hygiene checks and helping stranded people to providing food for the needy, watch Stanza Living co-founder
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span>
                            </h6>
                        </div>
                    </div>
                    <div className="col readmore-bgimg6-2">
                        <div className="readmore-headings2">
                            <h5> Inc42, Jun 12, 2020</h5>
                            <h5><b> Managed Accommodation Poised To Be The Future Of Rental Living</b></h5>
                            <h6>The pandemic has impacted businesses across the board upending years of theses on which several sectors were founded.
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
{/* ...........................................row-3................................................. */}

<div className='p-4 bg-light'>
                <div className='readmore-bgimg-3'>
                    {/* <div className='fade'></div> */}
                    <div className='economy-times'>
                        <h4 className='my-3'>The Economic Times, Apr 01, 2022</h4>
                        <h4> <b> Managed accommodation provider Stanza living acquires Singularity Automation</b></h4>
                        <h5 className='my-4'>Managed accommodation provider Stanza Living has acquired enterprise Internet of Things (IoT) platform company Singularity Automation for an undisclosed
                            <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span> </h5>
                    </div>
                </div>

                <div className='row my-3 p-3 readmore-row1'>
                    <div className='col readmore-bgimg2-3 p-3'>
                        <div className='readmore-headings1'>
                            <h4 className='my-3'>The ET Brand Equity, Oct 28, 2021</h4>
                            <h4><b>Stanza Living addresses parental paranoia through new campaign</b></h4>
                            <h5 className='my-3'>Co-living operator, Stanza Living rolled out a new brand campaign, ‘Loved by you. Approved by Moms’. The campaign consists of
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span> </h5>
                        </div>
                    </div>
                    <div className='col readmore-bgimg3-3 p-3'>
                        <div className='readmore-headings1'>
                            <h4 className='my-3'>Hindustan Times, Oct 09, 2020</h4>
                            <h4> <b> Migrant student accommodations made simple and safe by Stanza Living!</b></h4>
                            <h5 className='my-3'> The pandemic has undoubtedly impacted the education system and numerous colleges and universities have deferred their upcomin
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span></h5>
                        </div>
                    </div>
                </div>
                <div className='row p-3 readmore-row2'>
                    <div className='col readmore-bgimg4-3'>
                        <div className='readmore-headings2'>
                            <h5> The Economic Times, Sep 16, 2020M</h5>
                            <h5><b> tanza Living acquires Delhi-based student housing provider YourShell</b></h5>
                            <h6>Managed accommodation provider Stanza living has acquired Delhi-based student accommodation provider YourShell at an undis
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span>
                            </h6>
                        </div>
                    </div>
                    <div className='col readmore-bgimg5-3'>
                        <div className="readmore-headings2">
                            <h5>YourStory, Aug 13, 2020</h5>
                            <h5><b>Build & Grow | The accommodative approach towards managed housing</b></h5>
                            <h6>From ramping up hygiene checks and helping stranded people to providing food for the needy, watch Stanza Living co-founder
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span>
                            </h6>
                        </div>
                    </div>
                    <div className="col readmore-bgimg6-3">
                        <div className="readmore-headings2">
                            <h5> Inc42, Jun 12, 2020</h5>
                            <h5><b> Managed Accommodation Poised To Be The Future Of Rental Living</b></h5>
                            <h6>The pandemic has impacted businesses across the board upending years of theses on which several sectors were founded.
                                <span style={{ color: '#0074aa' }}> <b>READ MORE</b></span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}