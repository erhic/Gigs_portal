import React from 'react'

export default function InputField({ handleRadioSelection, title, value, name }) {
  return (
    <label htmlFor="" className='flex-row'>
      <input type="radio" name={name} title={title} value={value} onChange={handleRadioSelection} />
      <span className='px-2'>{title}</span><br />
    </label>
  )
}
