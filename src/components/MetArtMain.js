import React, { Component } from 'react'
import MetArtTile from './MetArtTile'
import axios from 'axios';
import { Pagination } from 'semantic-ui-react'


class MetArtMain extends Component {
  state = {
    retrievedData: [],
    activePage: 1,
    totalPages: 0,
    pageToDisplayTilesLimit: 10
  }

  setTotal = () => {
    let numOfItemsToPageToRetrieve = Math.ceil(this.props.MetArtObjectIDsSearchedTotalArray.length/this.state.pageToDisplayTilesLimit) - 1
    this.setState({
      totalPages: numOfItemsToPageToRetrieve
    })
  }

  getThePagedIndividualResults = async (batch) => {
    const fullListedData = []
    const batchedArrayOfObjectIDs = this.props.MetArtObjectIDsSearchedTotalArray.slice(
                                                                            (batch * this.state.pageToDisplayTilesLimit), 
                                                                            ((batch * this.state.pageToDisplayTilesLimit) + 
                                                                            this.state.pageToDisplayTilesLimit + 1));
    for(let i = 0; i < batchedArrayOfObjectIDs.length; i++) {
      await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${batchedArrayOfObjectIDs[i]}`)
            .then(async (individualFullObject) => {
              // console.log('Axios IndividualFullObject Console.log', individualFullObject)
              fullListedData.push(individualFullObject.data)
            }).catch((error) => console.log(error))

    }

    this.setState({
      retrievedData: fullListedData,
      activePage: batch
    })
  }


  componentDidUpdate(prevProps, prevState) {
    if(prevProps !== this.props) {
      this.setTotal()
      this.getThePagedIndividualResults(this.state.activePage)
    }

  }

  render() {
    return (
      <div className="ui raised very padded container segment" style={{width: '100%', marginBottom: '40px'}}>

      <h1>Your The Metropolitan Museum of Art Collection API search results (Wait nano-seconds to load)</h1>

        <div className="ui cards" style={{paddingBottom: '15px'}}>
    
      
        
        {this.state.retrievedData.map((individualObjectArt) => {
          return(
            <MetArtTile 
            key={individualObjectArt.objectID} 
            image={individualObjectArt.primaryImageSmall} 
            title={individualObjectArt.title} 
            artist={individualObjectArt.artistDisplayName} 
            imageOriginal={individualObjectArt.primaryImage}
            objectDate={individualObjectArt.objectDate}
            artistDisplayName={individualObjectArt.artistDisplayName}
            dimensions={individualObjectArt.dimensions}
            medium={individualObjectArt.medium}
            fullSingleDataArtObject={individualObjectArt}
            handleArtLikeSubmit={this.props.handleArtLikeSubmit}
            alreadyLikedObjectIDsArray={this.props.alreadyLikedMetArtObjectIDs}
            objectId={individualObjectArt.objectID}
            ></MetArtTile>
            
            )
          })}
          
          
          
          </div>
          <Pagination
              totalPages={this.state.totalPages}
              onPageChange={(e, data) => {
              
                console.log(data);
              
                this.getThePagedIndividualResults(data.activePage)
              }}
              activePage={this.state.activePage}
          />

      </div>
    )
  }
}



export default MetArtMain