import React from 'react'


const MetArtTile = (props) => {
  console.log('Hello MetArtTile')
  return (
      <div className="card">
  
      <div className="image">
        <img src={props.image} alt="..." />
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