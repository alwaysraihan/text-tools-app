import React from 'react'
// import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
   <>
   <h1 className='text-center mt-5 text-info web-title'>{props.title}</h1>
   </>
  )
}
