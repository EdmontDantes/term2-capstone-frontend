import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SearchMETArt from './SearchMETArt';
import MetArtMain from './MetArtMain';
import SearchNASAImages from './SearchNASAImages'
import NASAImagesMain from './NASAImagesMain'
import Footer from './Footer'


import { clone } from "lodash" 
class App extends Component {
  state = {
    searchTermMetApi: '',
    MetArtApiData: [],
    toggleMetArtLoading: false,
    searchTermNASAImagesApi: '',
    NASAImagesApiData: [],
    toggleNASAImagesLoading: false
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


  loadingShowNASAImagesResults = () => {
    this.setState({
      toggleNASAImagesLoading: true
    })
  }

  searchNASAImagesApi = async (event, value) => {
    if(value !== '') {
      event.preventDefault()
      // console.log('value', value);
      // const fullListedDataNASA = []
      await axios.get(`https://images-api.nasa.gov/search?q=${value}`)
      .then(async (foundData) => {
        this.loadingShowNASAImagesResults()
        const fullListedDataNASA = [...foundData.data.collection.items.slice(0,40)]
        // for(let i = 0; i < arrayFoundData.length; i++) {

        //           await axios.get(`${arrayFoundData[i].href}`)
        //               .then(async (collectedDataToModOriginal) => {
        //                 // console.log('CollectedDataJSON', collectedDataToModOriginal);
        //                 // arrayFoundData[i].href = []
        //                 const individualPieceToBeModded = fullListedDataNASA.push(collectedDataToModOriginal.data)
        //                 return individualPieceToBeModded
        //               })
        //               .then(async (fullDataToMake) => {
        //                 fullListedDataNASA.push(fullDataToMake)
        //               })
        //               .catch((error) => console.log(error))
        //             }
      //   if(arrayFoundData.length >= 80) {
      //     for(let i = 0; i < 80; i++) {
      //           await axios.get(`${arrayFoundData[i].href}`)
      //                 .then(async (collectedDataToModOriginal) => {
      //                   console.log('CollectedDataJSON', collectedDataToModOriginal);
      //                   arrayFoundData[i].href = []
      //                   const individualPieceToBeModded = fullListedData.push(collectedDataToModOriginal.data)
      //                   return individualPieceToBeModded
      //                 })
      //                 .then(async (fullDataToMake) => {
      //                   fullListedData.push(fullDataToMake)
      //                 })
      //                 .catch((error) => console.log(error))
      //     }
      //   } else if (arrayFoundData.length < 80) {
      //     for(let i = 0; i < arrayFoundData.length; i++) {
      //       await axios.get(`${arrayFoundData[i].href}`)
      //       .then(async (collectedDataToModOriginal) => {
      //         console.log('CollectedDataJSON', collectedDataToModOriginal);
      //         arrayFoundData[i].href = []
      //         const individualPieceToBeModded = fullListedData.push(collectedDataToModOriginal.data)
      //         return individualPieceToBeModded
      //       })
      //       .then(async (fullDataToMake) => {
      //         fullListedData.push(fullDataToMake)
      //       })
      //       .catch((error) => console.log(error))
      // }
        // }
      console.log('HELLO AFTER AXOIS PROMISES FOR NASA', fullListedDataNASA);
      
      this.setState({
        searchTermNASAImagesApi: value,
        NASAImagesApiData: fullListedDataNASA,
        toggleNASAImagesLoading: false
        })
    })
    .catch((error) => console.log(error))

    }
  // console.log("After axios await promises", fullListedData);
  
  }

  render() {
    console.log('in render', this.state.NASAImagesApiData);
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
        <div className='ui container' style={{marginTop: '80px', width: '95%'}} id="ArtWidget">
          <h1 className='ui header'>The Metropolitan Museum of Art Collection API Widget</h1>

          <SearchMETArt searchMetApi={this.searchMetApi}  btnType={'submit'} btnClassName={'ui red button'} btnChildren={'Search Art'}/>
          {<MetArtMain MetArtApiDataToComponent={this.state.MetArtApiData} toggleMetArtLoading={this.state.toggleMetArtLoading} />}
          
          
        </div>
        <div className='ui container' style={{marginTop: '80px', width: '95%'}} id="NASAWidget">
        <h1 className='ui header'>The Metropolitan Museum of Art Collection API Widget</h1>

        <SearchNASAImages searchNASAImagesApi={this.searchNASAImagesApi} btnType={'submit'} btnClassName={'ui blue button'} btnChildren={'Search NASA'}/>
        {<NASAImagesMain NASAImagesApiData={this.state.NASAImagesApiData} toggleNASAImagesLoading={this.state.toggleNASAImagesLoading} />}
    
        
      </div>
        <Footer />
      </Fragment>
    );
  }
}
export default App;