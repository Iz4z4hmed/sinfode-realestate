import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='bg-dark text-light footer'>
            <div className='row p-4 w-100'>
                <div className="col">
                    <img src="sikarinfologo.png" className='footer-image  my-4' alt="" />
                </div>
                <div className='col '>
                    <ul >
                        <li>About Us</li>
                        <li>Team</li>
                        <li>invester Relations</li>
                        <li>Media</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>Blogs</li>
                        <li>FAQs</li>
                        <li>Refer & Earn</li>
                        <li>House Rule</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>T&C</li>
                        <li>Privacy Policy</li>
                        <li>Careers</li>
                        <li>Contact Us </li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>COVID-19</li>
                        <li>Refuns</li>
                        <li>Partners with Us </li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div className="col pt-5">
                    <FaInstagram className='icons mx-2' />
                    <FaFacebook className='icons mx-2' />
                    <FaLinkedin className='icons mx-2' />
                </div>
                <hr />

                <footer>
                    <p>Copyright © 2022 | All Rights Reserved by Dtwelve Spaces Pvt Ltd. | Sitemap</p>
                    <p style={{ textAlign: 'end', float: 'right' }}>Images shown are for representational purposes only. Amenities depicted may or may <br /> not form a part of that individual property.</p>
                </footer>
                <div className='row '>
                    <h5 className='my-5'> Popular Searches</h5>
                    <div className="col">
                        <ul >
                            <li>PG in Banglore</li>
                            <li>PG in Koramgala</li>
                            <li>PG in Mumbai</li>
                            <li>Pg in Chennai</li>
                            <li>Pg in Guajrat</li>
                            <li>Pg in Gokul</li>
                            <li>Pg in Shirohi</li>

                        </ul>
                    </div>
                    <div className='col '>
                        <ul >
                            <li>Pg in Sikar</li>
                            <li>Pg in jaipur</li>
                            <li>Pg in Chennai</li>
                            <li>Pg in Kota</li>
                            <li>Pg in Delhi</li>
                            <li>Pg in Gurugram</li>
                            <li>Pg in Chelashi</li>
                            <li>Pg in Falsha</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>Pg in Jhunjhunu</li>
                            <li>Pg in Kalodi</li>
                            <li>Pg in Ghudda</li>
                            <li>Pg in Khhandela</li>
                            <li>Pg in Jabalpur</li>
                            <li>Pg in Nagour</li>
                            <li>Pg in Ramgarh</li>
                            <li>Pg in Chelasi</li>

                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>Pg in Badmer</li>
                            <li>Pg in Bikaner</li>
                            <li>Pg in Balara</li>
                            <li>Pg in Bhatote</li>
                            <li>Pg in Goodgi</li>
                            <li>Pg in Madhopur</li>
                            <li>Pg in Ajmer</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>Pg in </li>
                            <li>Pg in North-Campus</li>
                            <li>Pg in Gota</li>
                            <li>Pg in Vizag</li>
                            <li>Pg in Dehradun</li>
                            <li>Pg in Wagholi</li>
                            <li>Pg in Sarjapur Road</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}