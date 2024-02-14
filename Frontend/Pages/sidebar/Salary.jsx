import React from 'react'
import InputField from './InputField'

export default function Salary({ handleRadioSelection }) {
  return (
    (
      <div className='  flex-row text-sm' >
        <p className='flex text-center text-sm font-semi-bold mt-3'>Salary</p>
        <InputField handleRadioSelection={handleRadioSelection} value="daily" title="Daily" name="test" />
        <InputField handleRadioSelection={handleRadioSelection} value="monthly" title="Monthly" name="test" />
        <InputField handleRadioSelection={handleRadioSelection} value="yearly" title="Yearly" name="test" />
      </div>

    )
  )
}
