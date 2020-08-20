import React, { Component } from 'react';
import ButtonCustom from './ButtonCustom';
import PropTypes from 'prop-types'
class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTermMetApi: ''
    };
  }
  onChangeSearchValue = (event) => {
    let newSearchTerm = event.target.value;
    this.setState(
      {
        searchTermMetApi: newSearchTerm
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

Search.propTypes = {
  searchMetApi: PropTypes.func,
  btnType: PropTypes.string,
  btnClassName: PropTypes.string,
  btnChildren: PropTypes.string
}