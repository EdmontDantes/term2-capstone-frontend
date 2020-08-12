import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Search from './Search';
import MetArtMain from './MetArtMain';
class App extends Component {
  state = {
    searchTermMetApi: '',
    MetArtApiData: []
  };
  searchMetApi = (event, value) => {
    // console.log('value', value);
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${value}`)
    .then((foundAPIIds) => {
      let arrayToRequestOfApiIds = [...foundAPIIds.data.objectIDs]
      let fullListedData = []
      // console.log(arrayToRequestOfApiIds);
      if(arrayToRequestOfApiIds.length >= 80) {
        for(let i = 0; i < 80; i++) {
              axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayToRequestOfApiIds[i]}`)
                    .then((individualFullObject) => {
                      fullListedData.unshift(individualFullObject.data)
                    }).catch((error) => console.log(error))
        }
      } else if (arrayToRequestOfApiIds.length < 80) {
        for(let i = 0; i < arrayToRequestOfApiIds.length; i++) {
          axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayToRequestOfApiIds[i]}`)
                .then((individualFullObject) => {
                  fullListedData.unshift(individualFullObject.data)
                }).catch((error) => console.log(error))
    }
      }
      console.log(fullListedData);
      this.setState(
        {
          searchTermMetApi: value,
          MetArtApiData: fullListedData
        },
        () => {
          console.log('state', this.state);
        }
      );
    })
    .catch((error) => console.log(error))
  };
  // componentDidMount() {
  //   console.log('Mount App');
  //   console.log(this.state);
  // }
  render() {
    console.log('in render', this.state.searchTermMetApi);
    return (
      <Fragment>
        <div className='ui top fixed inverted menu'>
          <div className='ui container'>
            <a className='item' href='#root'>
              Home
            </a>
            <div className='ui simple dropdown item'>
              Dropdown <i className='dropdown icon'></i>
              <div className='menu'>
                <a className='item' href='#root'>
                  Link Item
                </a>
                <a className='item' href='#root'>
                  Link Item
                </a>
                <div className='divider'></div>
                <div className='header'>Header Item</div>
                <div className='item'>
                  Sub Menu <i className='dropdown icon'></i>
                  <div className='menu'>
                    <a className='item' href='#root'>
                      Link Item
                    </a>
                    <a className='item' href='#root'>
                      Link Item
                    </a>
                  </div>
                </div>
                <a className='item' href='#root'>
                  Link Item
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='ui main container'>
          <h1 className='ui header'>Semantic UI Fixed Template</h1>
          <p>
            This is a basic fixed menu template using fixed size containers.
          </p>
          <p>
            A text container is used for the main container, which is useful for
            single column layouts
          </p>
          <Search searchMetApi={this.searchMetApi} />
          <MetArtMain />
        </div>
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
      </Fragment>
    );
  }
}
export default App;