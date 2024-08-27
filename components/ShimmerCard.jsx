import React from 'react'

export default function ShimmerCard() {
  return (
    Array.apply(null,Array(6)).map(()=>{
        return <div className='shimmer-card country-card'></div>
    })
  )
}
