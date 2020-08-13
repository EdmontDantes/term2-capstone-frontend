import React from 'react'


const NASATile = (props) => {
  return (
      <div className="card">
  
      <div className="image">
{props.children}
      </div>
      <div className="extra">
      <div className="header" style={{fontSize: '16px', color: 'black'}}> {props.artist}</div>
      <br />
        <div className="header"> {props.title}</div>
      </div>
      
      </div>
    
    

    
  )
}

export default NASATile