import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTermMetApiSearchComponent: '',
      searchTermMetApi: ''
    };
  }
  onChangeSearchValue = (event) => {
    // event.preventDefault()
    let newSearchTerm = event.target.value.trim();
    console.log(newSearchTerm);
    this.setState(
      {
        searchTermMetApi: newSearchTerm
      },
      () => {
        console.log(this.state);
      }
    );
  };
  sendSearch = (event, value) => {
    event.preventDefault();
    this.props.searchMetApi(event, value);
  };
  componentDidMount() {}
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <form
          onSubmit={(event) => {
            this.sendSearch(event, this.state.searchTermMetApi);
          }}
          className='ui form'
        >
          <div
            className='field'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <input
              type='text'
              value={this.state.searchTermMetApi}
              onChange={this.onChangeSearchValue}
            />
            <Button
              type='submit'
              className='ui red button'
              children='Search Art'
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Search;