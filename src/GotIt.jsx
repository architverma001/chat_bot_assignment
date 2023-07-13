import React from 'react'

const GotIt = (handleclick) => {
  return (
  
    <div className='text-center d-flex2 '>
       
        <div className='btn ' 
            onClick={() => handleclick.actionProvider.handleGot()}
        >
            Got it
        </div>
    </div>
  )
}

export default GotIt