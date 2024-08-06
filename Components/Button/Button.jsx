import React from 'react'

const Button = ({className,children}) => {
  return (
    <div className={ `button ${className}` } >
        {children}
    </div>
  )
}

export default Button