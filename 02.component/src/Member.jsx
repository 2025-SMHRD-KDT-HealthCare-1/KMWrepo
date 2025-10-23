import React from 'react'

const Member = ({teamName,personName}) => {

    let boxStyle = {
        backgroundColor : 'whitesmoke',
        border : '1px solid black',
        padding : '30px',
        borderRadius : '10px',
        textAlign : 'center',
        marginTop : '10px',
        color : 'black',
        width : '500px'
    }
    
  return (
    <div>
       <div style={boxStyle}>
           <h1>{teamName}{" "}{personName}</h1> 
       </div>
    </div>
  )
}

export default Member