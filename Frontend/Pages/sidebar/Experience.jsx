import React from 'react'
import InputField from './InputField'

export default function Experience({ handleRadioSelection }) {
  return (
    <div className='  flex-row text-sm'>
      <p className='flex text-center text-sm font-semi-bold'>Experience</p>
      <InputField handleRadioSelection={handleRadioSelection} value="<1" title="0 -1" name="test" />
      <InputField handleRadioSelection={handleRadioSelection} value="2" title="2" name="test" />
      <InputField handleRadioSelection={handleRadioSelection} value="3>" title="3+" name="test" />
    </div>

  )
}
