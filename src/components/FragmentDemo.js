import React from 'react'

function FragmentDemo() {

  return (

    <React.Fragment> 
        <h1>Fragment Demo</h1>
        <p>This describes Fragment Demo Component</p>
    </React.Fragment>

    // this also working
    // <> 
    //     <h1>Fragment Demo</h1>
    //     <p>This describes Fragment Demo Component</p>
    // </>

    // In this way a new node <div></div> is added as extra, to avoid this use react Fragment
    // <div> 
    //     <h1>Fragment Demo</h1>
    //     <p>This describes Fragment Demo Component</p>
    // </div>
  )
}

export default FragmentDemo