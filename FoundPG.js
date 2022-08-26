import React from 'react'
import {  FaListAlt} from 'react-icons/fa'
import FoundPGslist from './FoundPGslist'
import Searchlocation from './Searchlocation'

export default function FoundPGs() {
  return (
    <div className='p-3'>
      <Searchlocation/>
      <div className='founddiv'>
      <div className='px-5 my-3'> 
        <p style={{fontSize:'.8rem' , letterSpacing:'.09rem', fontWeight:'300'}}>SINFODE/XYZ/ <strong>Near you</strong></p>
      </div>
        <ul className='foundul'>
        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Locality
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">About Us</a></li>
                                <li><a class="dropdown-item" href="/">Our team</a></li>
                                <li><a class="dropdown-item" href="/">Partner With Us </a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Budget
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">About Us</a></li>
                                <li><a class="dropdown-item" href="/">Our team</a></li>
                                <li><a class="dropdown-item" href="/">Partner With Us </a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Occupency
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">About Us</a></li>
                                <li><a class="dropdown-item" href="/">Our team</a></li>
                                <li><a class="dropdown-item" href="/">Partner With Us </a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gender
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">About Us</a></li>
                                <li><a class="dropdown-item" href="/">Our team</a></li>
                                <li><a class="dropdown-item" href="/">Partner With Us </a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Amenities
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">About Us</a></li>
                                <li><a class="dropdown-item" href="/">Our team</a></li>
                                <li><a class="dropdown-item" href="/">Partner With Us </a></li>
                            </ul>
                        </li>
                        <li>My Wishlist</li>
                        <li> <FaListAlt className='my-1 mx-1 '/> More Filters</li>
                        <li class="nav-item dropdown bg-light border-0">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Short By: <span style={{color:'#0074aa'}}><b> Distance</b></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">About Us</a></li>
                                <li><a class="dropdown-item" href="/">Our team</a></li>
                                <li><a class="dropdown-item" href="/">Partner With Us </a></li>
                            </ul>
                        </li>
        </ul>
      </div>

      <FoundPGslist/>
    </div>
  )
}