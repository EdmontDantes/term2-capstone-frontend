import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCustom from './ButtonCustom';
class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTermMetApi: ''
    };
  }
  onChangeSearchValue = (event) => {
    // event.preventDefault()
    let newSearchTerm = event.target.value;
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
            <ButtonCustom
              type={this.props.btnType}
              className={this.props.btnClassName}
              children={this.props.btnChildren}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Search;