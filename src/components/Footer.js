import React from 'react'


const Footer = () => {
  return(
    <div className='ui inverted vertical footer segment'>
    <div className='ui center aligned container'>
      <div className='ui inverted section divider'></div>
      <div className='ui horizontal inverted small divided link list'>
        <a
          className='item'
          href='https://github.com/EdmontDantes/term2-capstone-backend'
        >
          Backend github
        </a>
        <a
          className='item'
          href='https://github.com/EdmontDantes/term2-capstone-frontend'
        >
          Frontend github
        </a>
        <a className='item' href='https://github.com/EdmontDantes'>
          Bogdan Kowaltchook
        </a>
      </div>
    </div>
  </div>
  )
}

export default Footer