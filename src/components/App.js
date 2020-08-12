import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Search from './Search';
import MetArtMain from './MetArtMain';

import { clone } from "lodash" 
class App extends Component {
  state = {
    searchTermMetApi: '',
    MetArtApiData: [],
    toggleMetArtLoading: false
  };

  loadingShowMetArtAPIResults = () => {
    this.setState({
      toggleMetArtLoading: true
    })
  }


  searchMetApi = async (event, value) => {
    event.preventDefault()
    this.loadingShowMetArtAPIResults()
    // console.log('value', value);
    const fullListedData = []
    await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${value}`)
    .then(async (foundAPIIds) => {
      const arrayToRequestOfApiIds = [...foundAPIIds.data.objectIDs]
      // console.log(arrayToRequestOfApiIds);
      if(foundAPIIds.data.objectIDs.length >= 80) {
        for(let i = 0; i < 80; i++) {
              await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayToRequestOfApiIds[i]}`)
                    .then((individualFullObject) => {
                      // console.log('Axios IndividualFullObject Console.log', individualFullObject)
                      fullListedData.push(individualFullObject.data)
                    }).catch((error) => console.log(error))
        }
      } else if (foundAPIIds.data.objectIDs.length < 80) {
        for(let i = 0; i < arrayToRequestOfApiIds.length; i++) {
          await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayToRequestOfApiIds[i]}`)
                .then((individualFullObject) => {
                  // console.log('Axios IndividualFullObject Console.log', individualFullObject)
                  fullListedData.push(individualFullObject.data)
                }).catch((error) => console.log(error))
    }
      }
      this.setState({
        searchTermMetApi: value,
        MetArtApiData: fullListedData,
        toggleMetArtLoading: false
        })
      // console.log('HELLO AFTER AXOIS PROMISES', fullListedData);
    })
    .catch((error) => console.log(error))
    // console.log("After axios await promises", fullListedData);
  };
  // componentDidMount() {
  //   console.log('Mount App');
  //   console.log(this.state);
  // }
  // componentDidUpdate() {
  //   if(this.state.MetArtApiData.length) {
  //     this.setState({
  //       toggle: true
  //     })
  //   }
  // }

  render() {
    // console.log('in render', this.state.MetArtApiData);
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
          {this.state.toggleMetArtLoading ? (<MetArtMain MetArtApiDataToComponent={this.state.MetArtApiData} toggleMetArtLoading={this.state.toggleMetArtLoading} />) : (<MetArtMain MetArtApiDataToComponent={this.state.MetArtApiData} />) }
          
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