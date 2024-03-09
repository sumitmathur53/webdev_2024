import React, { memo } from 'react'


function Navbar({adjective, getAdjective}) {

    console.log("navbar is rendered")

  return (
    <div>
      i am a {adjective} navbar

      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
