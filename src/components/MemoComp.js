import React from 'react'

function MemoComp({name}) {

    console.log("Memo Functional Component")

  return (
    <>
        {name}
    </>
  )
}

export default React.memo(MemoComp)