import React, { Component } from 'react';
import ButtonCustom from './ButtonCustom';
import PropTypes from 'prop-types'
class SearchNumbers extends Component {
  constructor() {
    super();
    this.state = {
      searchNumbersApi: '',
      selectNumbersApi: 'trivia'
    };
  }
  onChangeSearchValue = (event) => {
    let newSearchTerm = event.target.value;
    this.setState(
      {
        searchNumbersApi: Number(newSearchTerm)
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onChangeSelectValue = (event) => {
    let newSelectTerm = event.target.value;
    this.setState(
      {
        selectNumbersApi: newSelectTerm
      },
      () => {
        console.log(this.state);
      }
    );
  };


  sendSearch = (event, value, select) => {
    event.preventDefault();
    this.props.searchNumbersApi(event, value, select);
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
            this.sendSearch(event, this.state.searchNumbersApi, this.state.selectNumbersApi);
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
              value={this.state.searchNumbersApi}
              onChange={this.onChangeSearchValue}
            />
            <select value={this.state.value} onChange={this.onChangeSelectValue}>
              <option value="trivia">trivia</option>
              <option value="year">year</option>
              <option value="date">date</option>
              <option value="math">math</option>
            </select>
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
export default SearchNumbers;

SearchNumbers.propTypes = {
  searchNumbersApi: PropTypes.func,
  btnType: PropTypes.string,
  btnClassName: PropTypes.string,
  btnChildren: PropTypes.string
}