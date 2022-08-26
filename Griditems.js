import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import Middle from './Middle'
export default function Griditems() {
  return (
    <>
      <div>
        <div class=" text-center">
          <div class="row grid-row w-100 p-3 " >
            <div class="col p-3 mx-1 bgcol1 bgcols">
              <h4 >Co-living <br /> for  Professionals</h4>
              <p>Chill hostel-style  residences  that <br /> are close  to your office</p>
              <div className='griddivicons' >
                <FaArrowRight />
              </div>
            </div>
            <div class="col p-3 mx-1 bgcol2  ">
              <h4>Modern Student <br /> Housing</h4>
              <p>New-age hostels with  all the <br /> amenities & vibrant living spaces.</p>
              <div className='griddivicons' >
                <FaArrowRight />
              </div>
            </div>
            <div class="col p-3 mx-1 bgcol3 ">
              <h4>Managed <br /> Apartments</h4>
              <p> Fully-furnished spaces with all <br /> essential amenities and zero capital <br /> investment</p>
              <div className='griddivicons' >
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Middle />
    </>
  )
}