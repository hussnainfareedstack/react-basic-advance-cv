import React from 'react'
import Column from './Column'

function Table() {
  
    const item = [
        {
            id: 1,
            title:"Hussnain"
        },
        {
            id: 2,
            title:"Fareed"
        }
    ]

    return (

    <React.Fragment>
        {
            item.map( x =>
                <React.Fragment key={x.id}>
                    <h1> {x.id}</h1>
                    <p> {x.title}</p>
                </React.Fragment>
            )
        }
    </React.Fragment>


    // <table>
    //     <tbody>
    //         <tr>
    //             <Column/>
    //         </tr>
    //     </tbody>
    // </table>
  )
}

export default Table