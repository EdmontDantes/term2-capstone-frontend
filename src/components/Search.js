import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Search = (props) => {
  return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <form action="" className="ui form">
      <div className="field" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        <input type='text' placeholder={props.searchPlaceHolder} value={props.searchTerm} />
      <Button type='submit' className='ui red button' onClick={() => {
        props.searchMetApi()
      }} children='Search Art' />

      </div>
    </form>
    </div>
  )
}

export default Search

Search.propTypes = {
  handleSearch: PropTypes.func,
  searchTerm: PropTypes.string
}