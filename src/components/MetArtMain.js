import React, { useState, useEffect } from 'react'
import MetArtTile from './MetArtTile'
import axios from 'axios';
import { Icon, Pagination, Segment } from 'semantic-ui-react'

const MetArtMain = (props) => {
  const pageToDisplayTilesLimit = 10
  const savedArrayProps = props.MetArtApiDataToComponent
  const MetArtObjectIDsSearchedTotalArray = [...props.MetArtObjectIDsSearchedTotalArray]
  const [retrievedData, setRetrievedData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    let numOfItemsToPageToRetrieve = Math.ceil(MetArtObjectIDsSearchedTotalArray.length/pageToDisplayTilesLimit)
    let numOfItemsToPageToRetrieveRemainder = MetArtObjectIDsSearchedTotalArray.length % pageToDisplayTilesLimit
    async function getThePagedIndividualResults (batch) {
      const fullListedData = []
      const batchedArrayOfObjectIDs = MetArtObjectIDsSearchedTotalArray.slice(
                                                                              (batch * pageToDisplayTilesLimit), 
                                                                              ((batch * pageToDisplayTilesLimit) + 
                                                                              pageToDisplayTilesLimit + 1));
      batchedArrayOfObjectIDs.forEach(async (objectIDtoGetDataAndPush) => {
        await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectIDtoGetDataAndPush}`)
              .then(async (individualFullObject) => {
                // console.log('Axios IndividualFullObject Console.log', individualFullObject)
                await fullListedData.push(individualFullObject.data)
              }).catch((error) => console.log(error))
      })
      setRetrievedData(fullListedData)
      }
    
    let pageIndex = activePage - 1;
    getThePagedIndividualResults(pageIndex)
  }, [activePage])
    return (
      <div className="ui raised very padded container segment" style={{width: '100%', marginBottom: '40px'}}>

      <h1>Your The Metropolitan Museum of Art Collection API search results</h1>
      {(props.toggleMetArtLoading === true && props.toggleMetArtLoading.length !==0) ?
      (
      <div className="ui active dimmer">

        <div className="ui indeterminate text loader">Preparing Results</div>

    </div>) : (<br />)}
        <div className="ui cards" style={{paddingBottom: '15px'}}>
    
        
        {savedArrayProps.map((individualObjectArt) => {
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
            handleArtLikeSubmit={props.handleArtLikeSubmit}
            ></MetArtTile>
            
            )
          })}
          
      <Pagination
          totalPages={Math.ceil(savedArrayProps.length/pageToDisplayTilesLimit)}
      >
      
      </Pagination>
        
        </div>

      </div>
      )
  

}


export default MetArtMain