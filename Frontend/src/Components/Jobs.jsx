import React from 'react'

export default function Jobs({ results }) {
  return (
    <div className='flex justify-center' >
      <div className='flex  flex-wrap m-auto'>{results}</div>
    </div>

  )
}
