import React from 'react'


const MetArtTile = (props) => {
  return (
      <div className="ui centered card">
  
      <div className="image">
        <img src={props.image} alt="..." style={{cursor: 'pointer'}} />
      </div>
      <div className="extra">
      <div className="header" style={{fontSize: '16px', color: 'black'}}> {props.artist}</div>
      <br />
        <div className="header"> {props.title}</div>
      </div>
      
      </div>
    
    

    
  )
}

export default MetArtTile