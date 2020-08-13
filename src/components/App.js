import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Search from './Search';
import MetArtMain from './MetArtMain';
import Footer from './Footer'


import { clone } from "lodash" 
class App extends Component {
  state = {
    searchTermMetApi: '',
    MetArtApiData: [],
    toggleMetArtLoading: false
  };

  loadingShowMetArtAPIResults = () => {
    this.setState({
      MetArtApiData: [],
      toggleMetArtLoading: true
    })
  }


  searchMetApi = async (event, value) => {

    if(value !== '') {



      event.preventDefault()
      // console.log('value', value);
      const fullListedData = []
      await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${value}`)
      .then(async (foundAPIIds) => {
        this.loadingShowMetArtAPIResults()
        const arrayToRequestOfApiIds = [...foundAPIIds.data.objectIDs]
        // await (foundAPIIds.data.objectIDs.length > 80 
        //   ? arrayToRequestOfApiIds = foundAPIIds.data.objectIDs.slice(0, 80) 
        //   : arrayToRequestOfApiIds = foundAPIIds.data.objectIDs.slice(0, foundAPIIds.data.objectIDs.length))
        // const arrayToRequestOfApiIds = foundAPIIds.data.objectIDs.map((objectId, idx) => idx < 80)
      //   // console.log('ArrayTOREquestOFApiIDS', arrayToRequestOfApiIds);
      //   cutArrayIds.map(async (objectId, idx) => {
      //     await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
      //     .then(async (individualFullObject) => {
      //       // console.log('Axios IndividualFullObject Console.log', individualFullObject)
      //       fullListedData.push(individualFullObject.data)
      //     }).catch((error) => console.log(error))
      //   })
        // console.log(arrayToRequestOfApiIds);
  
  
        // await arrayToRequestOfApiIds.forEach((arrayToRequestOfApiIds) => {
  
        //   axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayToRequestOfApiIds}`)
        //   .then(async (individualFullObject) => {
        //     // console.log('Axios IndividualFullObject Console.log', individualFullObject)
        //     await fullListedData.push(individualFullObject.data)
        //   }).catch((error) => console.log(error))
  
  
        // })
  
  
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
      console.log('HELLO AFTER AXOIS PROMISES', fullListedData);
      
      this.setState({
         searchTermMetApi: value,
         MetArtApiData: fullListedData,
         toggleMetArtLoading: false
         })
    })
    .catch((error) => console.log(error))

    } else {
      
    }
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
    console.log('in render', this.state.MetArtApiData);
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
                <a className='item' href='#ArtWidget'>
                  Art
                </a>
                <a className='item' href='#NASAWidget'>
                  NASA
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
        <div className='ui main container' style={{marginTop: '80px'}} id="ArtWidget">
          <h1 className='ui header'>The Metropolitan Museum of Art Collection API Widget</h1>

          <Search searchMetApi={this.searchMetApi}  btnType={'submit'} btnClassName={'ui red button'} btnChildren={'Search Art'}/>
          {<MetArtMain MetArtApiDataToComponent={this.state.MetArtApiData} toggleMetArtLoading={this.state.toggleMetArtLoading} />}
          
          
        </div>
        <div className='ui main container' style={{marginTop: '80px'}} id="NASAWidget">
        <h1 className='ui header'>The Metropolitan Museum of Art Collection API Widget</h1>

        <Search searchMetApi={this.searchMetApi} btnType={'submit'} btnClassName={'ui blue button'} btnChildren={'Search NASA'}/>
        {this.state.toggleMetArtLoading ? (<MetArtMain MetArtApiDataToComponent={this.state.MetArtApiData} toggleMetArtLoading={this.state.toggleMetArtLoading} />) : (<MetArtMain MetArtApiDataToComponent={this.state.MetArtApiData} />) }
        
      </div>
        <Footer />
      </Fragment>
    );
  }
}
export default App;