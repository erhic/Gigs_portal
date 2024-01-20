import React from 'react'

export default function Workexperience({ handleChange }) {
  return (
    <div>
      <h4>Work Experience</h4>
      <div>
        <label></label>
        <input type="radio" name='test' value="" onChange={handleChange} />
        <span>More than 5 Years</span>

        {/* <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test" />
        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test" />
        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test" /> */}
      </div>

    </div>
  )
}
