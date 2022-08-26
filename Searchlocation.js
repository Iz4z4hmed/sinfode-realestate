import React from 'react'
import { FaSearch } from 'react-icons/fa';
export default function Searchlocation() {

    return (
        <div>
<nav class="navbar bg-light" style={{ borderBottom: '1px solid lightgrey', boxShadow:'0px 0px 20px 3px rgba(0 ,0, 0 ,.1)' }}>
<div class="container-fluid" >
    <a class="navbar-brand" href="/"><img src="sikarinfologo.png" alt="" style={{
        height: '5rem',
        width: '12rem',
    }} /></a>
    <ul style={{ listStyleType: 'none' }}>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Know more
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/">About Us</a></li>
                <li><a class="dropdown-item" href="/">Our team</a></li>
                <li><a class="dropdown-item" href="/">Partner With Us </a></li>
            </ul>
        </li>
    </ul>
    <ul className='my-2' style={{ display: 'inline-flex', listStyleType: 'none', columnGap: '4rem', textAlign: 'center', float: 'left', paddingRight: '2rem' }}>
        <li>
            <input list='City-names-list' id='City-names' placeholder='Choose Property Type' className='p-1 border-0 bg-light w-100 text-center' />
            <datalist id="City-names-list">
                <option value="Modern Student Housing"></option>
                <option value="Co-living for Professionals"></option>
                <option value="Managed Apartments"></option>
            </datalist>
            <p className='' style={{ fontSize: 'smaller', color: 'grey' }}>Select your living space</p>
        </li>
        <li>
            Find in and around...
            <button type="submit" style={{ height: '2rem', width: '2rem', borderRadius: '10px' }}><FaSearch style={{ fontSize: '1.3rem' }} className='search-icon' /></button> <br />
            <input type="search" className='search-input my-1' placeholder='Enter College/office/locality/city' />
        </li>
    </ul>
    {/* <form className="d-flex" role="search"> */}
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Request to Callback</button>

    {/* </form> */}
</div>
</nav>
</div>
)
}