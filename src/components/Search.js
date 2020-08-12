import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


class Search extends Component {
  constructor(){
    super()
    this.state={
      searchTermMetApiSearchComponent: ''

    }
  }

  onChangeSearchValue(event) {
    // event.preventDefault()
    let newSearchTerm = event.target.value.trim()
    console.log(newSearchTerm)
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
                defaultValue={this.state.searchTermMetApiSearchComponent} 
                onChange={
                  this.onChangeSearchValue.bind(this)

                          }/>

        <Button 
                
                className='ui red button' 
                onClick={() => {
                                this.props.searchMetApi(this.state.searchTermMetApiSearchComponent)
                          }} children='Search Art' />
  
        </div>
      </form>
      </div>
    )

  }
}

export default Search
