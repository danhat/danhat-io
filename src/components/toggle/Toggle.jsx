import React from 'react'
import './toggle.css'

const Toggle = ({handleChange, isChecked}) => {
  return (
    <div className='toggle__container'>
      <input
        type='checkbox'
        id='check'
        className='toggle'
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor='check'></label>
    </div>
  )
}

export default Toggle

