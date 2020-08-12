import React from 'react'


const MetArtTile = (props) => {
  return (
    
      <div className="card">
        <div className="image">
          <img src={props.image || '/image.png'} alt="..." />
        </div>
        <div className="extra">
          {props.name || 'Name'}
          <div className="header">Some Name</div>
        </div>
      </div>
    

    
  )
}

export default MetArtTile