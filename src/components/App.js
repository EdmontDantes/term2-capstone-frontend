import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SearchMETArt from './SearchMETArt';
import MetArtMain from './MetArtMain';
import SearchNASAImages from './SearchNASAImages'
import NASAImagesMain from './NASAImagesMain'
import Footer from './Footer'
import HeaderCustom from './Header'
import MetArtMainLikes from './MetArtMainLikes'
import MetArtMainFullScreenSlideShow from './MetArtMainFullScreenSlideShow'
import { 
        Accordion, 
        Icon
        } from 'semantic-ui-react'

class App extends Component {
  state = {
    searchTermMetApi: '',
    MetArtObjectIDsSearchedTotalArray: [],
    MetArtLikes: [],
    MetArtLikesSlideShowImages: [],
    searchTermNASAImagesApi: '',
    NASAImagesApiData: [],
    toggleNASAImagesLoading: false,
    activeIndex: 0,
    activeArtIndex: 0,
    alreadyLikedMetArtObjectIDs: []
  };


  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  handleClickArtAccordion = (e, titleProps) => {
    const { index } = titleProps
    const { activeArtIndex } = this.state
    const newIndex = activeArtIndex === index ? -1 : index

    this.setState({ activeArtIndex: newIndex })
  }


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
        if(foundAPIIds.data.objectIDs) {



        this.loadingShowMetArtAPIResults()
        this.setState({
          searchTermMetApi: value,
          MetArtObjectIDsSearchedTotalArray: foundAPIIds.data.objectIDs
          })
        }
    })
    .catch((error) => console.log(error))

    }

  };


  loadingShowNASAImagesResults = () => {
    this.setState({
      toggleNASAImagesLoading: true
    })
  }

  searchNASAImagesApi = async (event, value) => {
    if(value !== '') {
      event.preventDefault()
      await axios.get(`https://images-api.nasa.gov/search?q=${value}`)
      .then(async (foundData) => {
        this.loadingShowNASAImagesResults()
        const fullListedDataNASA = [...foundData.data.collection.items.slice(0,40)]
      console.log('HELLO AFTER AXOIS PROMISES FOR NASA', fullListedDataNASA);
      
      this.setState({
        searchTermNASAImagesApi: value,
        NASAImagesApiData: fullListedDataNASA,
        toggleNASAImagesLoading: false
        })
    })
    .catch((error) => console.log(error))

    }
  
  }


  helperGetAllMetArtLikes = async () => {

    try {
      console.log("Axios with proxy setup in react package.json works as expected");
      axios.get('http://localhost:8505/api/content/art-likes').then(async (gottenBEDataArtLikesFullList) => {

        console.log('successful get all art-likes');
        let onlyImagesObjectsForDisplayOnFLSLideShow = []
        let alreadyLikedMetArt = []
        await gottenBEDataArtLikesFullList.data.AllFoundLikes.forEach((individualFullObject) => {
          onlyImagesObjectsForDisplayOnFLSLideShow.push({
            original: `${individualFullObject.data.primaryImage}`,
            thumbnail:`${individualFullObject.data.primaryImageSmall}`
          })
          alreadyLikedMetArt.push(individualFullObject.data.objectID)
        })
        console.log('App OnlyImagesObjectsForDisplayOnFLSlideSow for helperGetAllMetArtLikes', onlyImagesObjectsForDisplayOnFLSLideShow)
        this.setState({
          MetArtLikes: gottenBEDataArtLikesFullList.data.AllFoundLikes,
          MetArtLikesSlideShowImages: onlyImagesObjectsForDisplayOnFLSLideShow,
          alreadyLikedMetArtObjectIDs: alreadyLikedMetArt

        })
      }).catch((error) => console.log(error));

    } catch (error) {
      console.log(error);
    }
  }
    

  handleArtLikeSubmit = async (event, ArtObject) => {
    event.preventDefault()
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    };
    try {

      await axios.put('http://localhost:8505/api/content/art-likes', ArtObject, axiosConfig)
            .then(this.helperGetAllMetArtLikes()
            )
            .catch((error) => console.log(error))
    
    } catch (error) {
      console.log(error);
    }
  }

  handleArtDisLikeSubmit = async (event, objectID) => {
    event.preventDefault()
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    };

    try {
      await axios.delete(`http://localhost:8505/api/content/art-likes/${objectID}`, axiosConfig)
            .then(this.helperGetAllMetArtLikes()
            )
            .catch((error) => console.log(error))

    } catch (error) {
      console.log(error);
    }
  }


  componentDidMount() {
    this.helperGetAllMetArtLikes()
  }

  render() {
    console.log('App render State MetArtLikes', this.state.alreadyLikedMetArtObjectIDs)
    const { activeIndex } = this.state
    const { activeArtIndex } = this.state
    return (
      <Fragment>
      <div>

      <HeaderCustom />

      <Accordion fluid styled style={{marginTop: '150px', marginBottom: '150px'}}>


      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={this.handleClick}
      id='ArtWidget'>
        <Icon name='dropdown' />
        The Metropolitan Museum of Art Collection API
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
      
      <SearchMETArt searchMetApi={this.searchMetApi}  btnType={'submit'} btnClassName={'ui red button'} btnChildren={'Search Art'}/>


      <Accordion fluid styled >
      <Accordion.Title
        active={ activeArtIndex === 1}
        index={1}
        onClick={this.handleClickArtAccordion}>
        <Icon name='dropdown' />
        The Metropolitan Museum of Art Collection API Likes
        </Accordion.Title>
        <Accordion.Content active={activeArtIndex === 1}>
        {<MetArtMainFullScreenSlideShow MetArtLikesSlideShowImages={this.state.MetArtLikesSlideShowImages} />}
        {<MetArtMainLikes MetArtLikesArray={this.state.MetArtLikes}  handleArtDisLikeSubmit={this.handleArtDisLikeSubmit} />}
        
        </Accordion.Content>
      
        <Accordion.Title
        active={ activeArtIndex ===2}
        index={2}
        onClick={this.handleClickArtAccordion}>
        <Icon name='dropdown' />
        The Metropolitan Museum of Art Collection API Search Results
        </Accordion.Title>
        <Accordion.Content active={activeArtIndex === 2}>
        
        {<MetArtMain alreadyLikedMetArtObjectIDs={this.state.alreadyLikedMetArtObjectIDs} MetArtObjectIDsSearchedTotalArray={this.state.MetArtObjectIDsSearchedTotalArray} toggleMetArtLoading={this.state.toggleMetArtLoading} handleArtLikeSubmit={this.handleArtLikeSubmit} />}
        
        </Accordion.Content>

        
      </Accordion>

      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={this.handleClick}
      id='NASAWidget'>
        <Icon name='dropdown' />
        NASA Images API search view
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>


      <SearchNASAImages searchNASAImagesApi={this.searchNASAImagesApi} btnType={'submit'} btnClassName={'ui blue button'} btnChildren={'Search NASA'}/>
      {<NASAImagesMain NASAImagesApiData={this.state.NASAImagesApiData} toggleNASAImagesLoading={this.state.toggleNASAImagesLoading} />}

      </Accordion.Content>
    </Accordion>

    <Footer />
    </div>














      </Fragment>
    );
  }
}
export default App;