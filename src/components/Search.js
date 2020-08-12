import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


class Search extends Component {
  constructor(){
    super()
    this.state={
      searchTermMetApi: ''

    }
  }

  onChangeSearchValue(event) {
    let newSearchTerm = event.target.value
    this.setState({
      searchTermMetApi: newSearchTerm
    }, () => {
      console.log(this.state);
    })
  } 

  componentDidMount() {

  }

  render() {

    return(
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <form action="" className="ui form">
        <div className="field" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <input 
                type='text' 
                value={this.state.searchTermMetApi} 
                onChange={
                                this.onChangeSearchValue
                          }/>

        <Button 
                type='submit' 
                className='ui red button' 
                onClick={() => {
                                this.props.searchMetApi()
                          }} children='Search Art' />
  
        </div>
      </form>
      </div>
    )

  }
}

export default Search
