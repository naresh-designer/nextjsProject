import React from 'react'

const Heading = ({className,headingData}) => {
  return (
    <div className={`primery_heading ${className}`} >{headingData.fName}</div>
  )
}

export default Heading