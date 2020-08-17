import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SearchMETArt from './SearchMETArt';
import MetArtMain from './MetArtMain';
import SearchNASAImages from './SearchNASAImages'
import NASAImagesMain from './NASAImagesMain'
import Footer from './Footer'
import { 
        Accordion, 
        Icon,  
        Container,
        Divider,
        Dropdown,
        Header,
        Image,
        List,
        Menu,
        Segment } from 'semantic-ui-react'

class App extends Component {
  state = {
    searchTermMetApi: '',
    MetArtApiData: [],
    toggleMetArtLoading: false,
    searchTermNASAImagesApi: '',
    NASAImagesApiData: [],
    toggleNASAImagesLoading: false,
    activeIndex: 0
  };


  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
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
          const arrayToRequestOfApiIds = [...foundAPIIds.data.objectIDs]
    
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

  render() {

    const { activeIndex } = this.state
    return (
      <Fragment>






      <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a'>Home</Menu.Item>
  
          <Dropdown item simple text='Navigate'>
            <Dropdown.Menu>
              <Dropdown.Item as='a' href='#ArtWidget'>Met Art</Dropdown.Item>
              <Dropdown.Item as='a' href='#NASAWidget'>NASA</Dropdown.Item>
              <Dropdown.Item as='a' href='#NumbersWidget'>Numbers Trivia</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
  

      <Accordion fluid styled style={{marginTop: '150px'}}>


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
      {<MetArtMain MetArtApiDataToComponent={this.state.MetArtApiData} toggleMetArtLoading={this.state.toggleMetArtLoading} />}


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