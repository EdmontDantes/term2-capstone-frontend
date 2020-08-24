import React, { Component } from 'react'
import MetArtTileLikes from './MetArtTileLikes'
import PropTypes from 'prop-types'
import { Pagination } from 'semantic-ui-react'


class MetArtMainLikes extends Component {
  state = {
    choppedDataBatch: [],
    activePage: 1,
    totalPages: 0,
    pageToDisplayTilesLimitOfLikedArt: 10
  }


  setTotal = () => {
    let numOfItemsToPageToRetrieve = Math.ceil(this.props.MetArtLikesArray.length/this.state.pageToDisplayTilesLimitOfLikedArt)
    this.setState({
      totalPages: numOfItemsToPageToRetrieve
    })
  }

  getThePagedIndividualResults = async (batch) => {
    let batchedArrayOfLikedArt = [];

    batchedArrayOfLikedArt = (this.state.activePage === 1) ? 
    (this.props.MetArtLikesArray.slice(0, this.state.pageToDisplayTilesLimitOfLikedArt + 1)) : 
    (this.props.MetArtLikesArray.slice(
                                      (batch * this.state.pageToDisplayTilesLimitOfLikedArt), 
                                      ((batch * this.state.pageToDisplayTilesLimitOfLikedArt) + 
                                      this.state.pageToDisplayTilesLimitOfLikedArt)))
    
    

    this.setState({
      choppedDataBatch: batchedArrayOfLikedArt,
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

        

          <div className="ui cards" style={{paddingBottom: '15px'}}>
        

            {this.state.choppedDataBatch.map((individualObjectArt) => {
              return(
                <MetArtTileLikes 
                            key={individualObjectArt.data.objectID} 
                            objectID={individualObjectArt.data.objectID} 
                            image={individualObjectArt.data.primaryImageSmall} 
                            title={individualObjectArt.data.title} 
                            artist={individualObjectArt.data.artistDisplayName} 
                            imageOriginal={individualObjectArt.data.primaryImage}
                            objectDate={individualObjectArt.data.objectDate}
                            artistDisplayName={individualObjectArt.data.artistDisplayName}
                            dimensions={individualObjectArt.data.dimensions}
                            medium={individualObjectArt.data.medium}
                            handleArtDisLikeSubmit={this.props.handleArtDisLikeSubmit}
                            ></MetArtTileLikes>

              )
            })}
            
          </div>
          <Pagination
              totalPages={this.state.totalPages}
              onPageChange={(e, data) => {
              
              
                this.getThePagedIndividualResults(data.activePage)
              }}
              activePage={this.state.activePage}
          />
        </div>
      )
  }
}

export default MetArtMainLikes

MetArtMainLikes.propTypes = {
  MetArtLikesArray: PropTypes.array,
  handleArtDisLikeSubmit: PropTypes.func
}