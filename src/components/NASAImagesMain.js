import React, { Component } from 'react'
import NASATile from './NASATile'
import { Pagination } from 'semantic-ui-react'


class NASAImagesMain extends Component {

  state = {
    retrievedData: [],
    activePage: 1,
    totalPages: 0,
    pageToDisplayTilesLimit: 10
  }

  setTotal = () => {
    let numOfItemsToPageToRetrieve = Math.ceil(this.props.NASAImagesApiData.length/this.state.pageToDisplayTilesLimit) - 1
    this.setState({
      totalPages: numOfItemsToPageToRetrieve
    })
  }

  getThePagedIndividualResults = async (batch) => {

    const batchedArrayOfNASAImages = this.props.NASAImagesApiData.slice(
                                                                            (batch * this.state.pageToDisplayTilesLimit), 
                                                                            ((batch * this.state.pageToDisplayTilesLimit) + 
                                                                            this.state.pageToDisplayTilesLimit + 1));


    this.setState({
      retrievedData: batchedArrayOfNASAImages,
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

      <h1>Your NASA Images Results</h1>
      {(this.props.toggleNASAImagesLoading === true) ?
      (
      <div className="ui active dimmer">

        <div className="ui indeterminate text loader">Preparing Results</div>

    </div>) : (<br />)}
        <div className="ui cards" style={{paddingBottom: '15px'}}>
    {console.log(this.props.NASAImagesApiData)}
  
      {this.state.retrievedData.map((individualArrayOfMedia, idx) => {

          if(individualArrayOfMedia.links !== undefined) {
            
            return(
              <NASATile 
              key={idx} 
              image={individualArrayOfMedia.links[0].href} 
              dataInfo={individualArrayOfMedia.data}></NASATile>
            )

          }
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



export default NASAImagesMain

