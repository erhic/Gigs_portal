import React from 'react'
import InputField from './InputField'

export default function JobType({ handleRadioSelection }) {
  return (
    <div className='  flex-row text-sm mb-3'>
      <InputField handleRadioSelection={handleRadioSelection} value="" title="All" name="test" />
      <p className='flex text-center text-sm font-semi-bold '>Job Type</p>
      <InputField handleRadioSelection={handleRadioSelection} value="parttime" title="Part time" name="test" />
      <InputField handleRadioSelection={handleRadioSelection} value="fulltime" title="Full time" name="test" />
      <InputField handleRadioSelection={handleRadioSelection} value="internship" title="Internship" name="test" />
    </div>
  )
}
