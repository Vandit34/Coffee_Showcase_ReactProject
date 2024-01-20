import React from 'react'

const Coffee = ({ name, image, stars, price }) => {
  return (
    <div className='item mb-8 w-max'>
      <img className='w-[15em] h-[15em] rounded-[1em]' src={image} />
      <div className='info'>
        <div className='description '>
          <div className='flex justify-between mt-2'>
            <div className='name text-[#FEF7EE]'>{name}</div>
            <div className='price bg-[#BEE3CC] rounded-[0.5em] font-bold px-2 py-1'>
              <p>$5.20</p>
            </div>
          </div>
            <div className='stars&votes flex space-x'>
              <div className='stars flex mr-2 text-[#FEF7EE]'>
                <img src='src\assets\Star_fill.svg' />
                <p>4.5</p>
              </div>
              <div className='votes text-[#6F757C]'>
                <p>(77 votes)</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Coffee
