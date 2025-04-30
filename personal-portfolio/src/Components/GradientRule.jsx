import React from 'react'

export default function GradientRule() {
  return (
    <hr style={{ margin: '10px 0 30px 0',
        height:'3px',
        border: 'none',
          backgroundImage: 'linear-gradient(to right, darkorange, purple)', }} />
  )
}
