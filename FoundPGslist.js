// import { padding } from '@mui/system'
import React from 'react'
import { FaBed, FaDoorOpen, FaMale, FaMapMarker, FaRupeeSign, FaToilet} from 'react-icons/fa'

export default function FoundPGsList() {
  return (
    <div className='p-3 '>
      <div class="row g-0 text-start ">
        <div class="col-sm-6 col-md-8 ">
          <div className='foundpg'>
          <h5>PGs Waiting to be yours in SIKAR</h5>
          <div class="row g-0 text-start my-5">
            <div class="col-sm-6 col-md-4">
              <img src="middle-image4.webp" className='foundimg1' alt="" />
            </div>
            <div class="col-6 col-md-8 px-4 my-4">
              <div>
                <h5 className='hoverheading' style={{ lineHeight: '.1rem' }}><strong>Ulshan House</strong></h5>
                <small style={{ color: 'grey' }}><b>sikar</b></small>
                <div className='w-75 my-2 ' style={{ border: '0', padding: '.5rem', borderRadius: '20px', fontWeight: '300', backgroundColor: 'lightgrey' }} >
                  <small> <FaMapMarker /> 00km Away from CLC piprali road</small>
                </div>
                <div className='my-3'>
                  <FaMale /><small style={{ color: 'grey' }}>male</small> <br />
                  <FaBed /> <small style={{ color: 'grey' }}>Double , Triple</small>
                </div>

                <small style={{fontWeight:'200'}}>Amenities</small>
                <div>
                <ul  style={{
                  listStyleType:'none',
                  display:'inline-flex',
                   columnGap:'.5rem', 
                   }}>
                  <li className='bg-light' style={{
                    padding:'.5rem' ,
                   border:'1px solid lightgrey',
                   borderRadius:'20px',
                  }}><FaToilet/> <small> Attached Washroom</small></li>
                 <li  className='bg-light' style={{
                    padding:'.5rem' ,
                   border:'1px solid lightgrey',
                   borderRadius:'20px'
                   }}><FaDoorOpen/> <small>Window</small></li>
                </ul>
                </div>
                <div style={{
                  display:'inline-flex',
                  columnGap:'1.5rem'
              }}>
                  <div>
                  <small>Start from</small> <br />
                  <h6> <FaRupeeSign/><b>Amount/mo</b></h6></div>
                 <a href="/"> <button className="btn btn-primary btn-md my-2" style={{backgroundColor:'#0074aa',fontWeight:'600'}}>Schedule A Visit</button></a>
                 <a href="/"> <button className="btn btn-primary btn-md my-2" style={{border:'1px solid #0074aa' , backgroundColor:'#fff' , color:'#000' , fontWeight:'700'}}>Unlock Discount</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ...................................col2 ................................ */}


        <div className='foundpg'>
          <h5>PGs Waiting to be yours in SIKAR</h5>
          <div class="row g-0 text-start my-5">
            <div class="col-sm-6 col-md-4">
              <img src="middle-image7.webp" className='foundimg1' alt="" />
            </div>
            <div class="col-6 col-md-8 px-4 my-4">
              <div>
                <h5 className='hoverheading' style={{ lineHeight: '.1rem' }}><strong>Ulshan House</strong></h5>
                <small style={{ color: 'grey' }}><b>sikar</b></small>
                <div className='w-75 my-2 ' style={{ border: '0', padding: '.5rem', borderRadius: '20px', fontWeight: '300', backgroundColor: 'lightgrey' }} >
                  <small> <FaMapMarker /> 00km Away from CLC piprali road</small>
                </div>
                <div className='my-3'>
                  <FaMale /><small style={{ color: 'grey' }}>male</small> <br />
                  <FaBed /> <small style={{ color: 'grey' }}>Double , Triple</small>
                </div>

                <small style={{fontWeight:'200'}}>Amenities</small>
                <div>
                <ul  style={{
                  listStyleType:'none',
                  display:'inline-flex',
                   columnGap:'.5rem', 
                   }}>
                  <li className='bg-light' style={{
                    padding:'.5rem' ,
                   border:'1px solid lightgrey',
                   borderRadius:'20px',
                  }}><FaToilet/> <small> Attached Washroom</small></li>
                 <li  className='bg-light' style={{
                    padding:'.5rem' ,
                   border:'1px solid lightgrey',
                   borderRadius:'20px'
                   }}><FaDoorOpen/> <small>Window</small></li>
                </ul>
                </div>
                <div style={{
                  display:'inline-flex',
                  columnGap:'1.5rem'
              }}>
                  <div>
                  <small>Start from</small> <br />
                  <h6> <FaRupeeSign/><b>Amount/mo</b></h6></div>
                 <a href="/"> <button className="btn btn-primary btn-md my-2" style={{backgroundColor:'#0074aa',fontWeight:'600'}}>Schedule A Visit</button></a>
                 <a href="/"> <button className="btn btn-primary btn-md my-2" style={{border:'1px solid #0074aa' , backgroundColor:'#fff' , color:'#000' , fontWeight:'700'}}>Unlock Discount</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* ...................................col3 ................................ */}

        <iv className='foundpg'>
          <h5>PGs Waiting to be yours in SIKAR</h5>
          <div class="row g-0 text-start my-5">
            <div class="col-sm-6 col-md-4">
              <img src="middle-image6.webp" className='foundimg1' alt="" />
            </div>
            <div class="col-6 col-md-8 px-4 my-4">
              <div>
                <h5 className='hoverheading' style={{ lineHeight: '.1rem' }}><strong>Ulshan House</strong></h5>
                <small style={{ color: 'grey' }}><b>sikar</b></small>
                <div className='w-75 my-2 ' style={{ border: '0', padding: '.5rem', borderRadius: '20px', fontWeight: '300', backgroundColor: 'lightgrey' }} >
                  <small> <FaMapMarker /> 00km Away from CLC piprali road</small>
                </div>
                <div className='my-3'>
                  <FaMale /><small style={{ color: 'grey' }}>male</small> <br />
                  <FaBed /> <small style={{ color: 'grey' }}>Double , Triple</small>
                </div>

                <small style={{fontWeight:'200'}}>Amenities</small>
                <div>
                <ul  style={{
                  listStyleType:'none',
                  display:'inline-flex',
                   columnGap:'.5rem', 
                   }}>
                  <li className='bg-light' style={{
                    padding:'.5rem' ,
                   border:'1px solid lightgrey',
                   borderRadius:'20px',
                  }}><FaToilet/> <small> Attached Washroom</small></li>
                 <li  className='bg-light' style={{
                    padding:'.5rem' ,
                   border:'1px solid lightgrey',
                   borderRadius:'20px'
                   }}><FaDoorOpen/> <small>Window</small></li>
                </ul>
                </div>
                <div style={{
                  display:'inline-flex',
                  columnGap:'1.5rem'
              }}>
                  <div>
                  <small>Start from</small> <br />
                  <h6> <FaRupeeSign/><b>Amount/mo</b></h6></div>
                 <a href="/"> <button className="btn btn-primary btn-md my-2" style={{backgroundColor:'#0074aa',fontWeight:'600'}}>Schedule A Visit</button></a>
                 <a href="/"> <button className="btn btn-primary btn-md my-2" style={{border:'1px solid #0074aa' , backgroundColor:'#fff' , color:'#000' , fontWeight:'700'}}>Unlock Discount</button></a>
                </div>
              </div>
            </div>
          </div>
        </iv>
{/* ................................... col4......................................... */}


<iv className='foundpg'>
          <h5>PGs Waiting to be yours in SIKAR</h5>
          <div class="row g-0 text-start my-5">
            <div class="col-sm-6 col-md-4">
              <img src="middle-image5.webp" className='foundimg1' alt="" />
            </div>
            <div class="col-6 col-md-8 px-4 my-4">
              <div>
                <h5 className='hoverheading' style={{ lineHeight: '.1rem' }}><strong>Ulshan House</strong></h5>
                <small style={{ color: 'grey' }}><b>sikar</b></small>
                <div className='w-75 my-2 ' style={{ border: '0', padding: '.5rem', borderRadius: '20px', fontWeight: '300', backgroundColor: 'lightgrey' }} >
                  <small> <FaMapMarker /> 00km Away from CLC piprali road</small>
                </div>
                <div className='my-3'>
                  <FaMale /><small style={{ color: 'grey' }}>male</small> <br />
                  <FaBed /> <small style={{ color: 'grey' }}>Double , Triple</small>
                </div>

                <small style={{fontWeight:'200'}}>Amenities</small>
                <div>
                <ul  style={{
                  listStyleType:'none',
                  display:'inline-flex',
                   columnGap:'.5rem', 
                   }}>
                  <li className='bg-light' style={{
                    padding:'.5rem' ,
                   border:'1px solid lightgrey',
                   borderRadius:'20px',
                  }}><FaToilet/> <small> Attached Washroom</small></li>
                 <li  className='bg-light' style={{
                    padding:'.5rem' ,
                   border:'1px solid lightgrey',
                   borderRadius:'20px'
                   }}><FaDoorOpen/> <small>Window</small></li>
                </ul>
                </div>
                <div style={{
                  display:'inline-flex',
                  columnGap:'1.5rem'
              }}>
                  <div>
                  <small>Start from</small> <br />
                  <h6> <FaRupeeSign/><b>Amount/mo</b></h6></div>
                 <a href="/"> <button className="btn btn-primary btn-md my-2" style={{backgroundColor:'#0074aa',fontWeight:'600'}}>Schedule A Visit</button></a>
                 <a href="/"> <button className="btn btn-primary btn-md my-2" style={{border:'1px solid #0074aa' , backgroundColor:'#fff' , color:'#000' , fontWeight:'700'}}>Unlock Discount</button></a>
                </div>
              </div>
            </div>
          </div>
        </iv>


{/* ...................................... col5......................................... */}
          </div>
        <div class="col-6 col-md-4">
          <iframe width="450" height="550" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='map'
            src="https://www.openstreetmap.org/export/embed.html?bbox=-100.04673002474011%2C16.95487694424327%2C-221.60521696321666%2C17.196751341562923&amp;layer=mapnik"
            style={{ border: '1px solid lightGrey', borderRadius: '20px' }}></iframe>
          <br /><small><a href="https://www.openstreetmap.org/#map=12/17.0759/-61.8260">View Larger Map</a></small></div>
      </div>
    </div>
  )
}