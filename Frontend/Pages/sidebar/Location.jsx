import React from 'react'
import InputField from './InputField'
export default function Location({ handleRadioSelection }) {
  return (
    <div className='mt-3 text-sm'>
      <p>Work Mode</p>
      <InputField handleRadioSelection={handleRadioSelection} title='Hybrid' value='hybrid' name='test' />
      <InputField handleRadioSelection={handleRadioSelection} title='Onsite' value='onsite' name='test' />
      <InputField handleRadioSelection={handleRadioSelection} title='Remote' value='remote' name='test' />
    </div>
  )
}
