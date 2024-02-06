import React from 'react';
import {
    MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
  } from 'mdb-react-ui-kit';
  import { FaFacebookF, FaGooglePlusG, FaYoutube, FaInstagram, FaBehance } from "react-icons/fa";
  import { RiTwitterXFill } from "react-icons/ri";

  


function Footer() {
  return (
    <div>
       <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaFacebookF />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <RiTwitterXFill />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaGooglePlusG />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaYoutube />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaInstagram />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaBehance />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          kwetupay.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer