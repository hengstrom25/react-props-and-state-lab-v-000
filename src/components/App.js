import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    
  onChangeType = event => {
    this.setState({
      filters: ;{
        ...this.state.filters,
        type: event.target.value
      }
    })
  }
  
  onFindPetsClick = () => {
    let url = '/api/pets';
    if (this.state.filters.type !== 'all') {
      uri += `?type={this.state.filters.type}`;
    }
    
    fetch(uri)
      .then(response = response.json())
        .then(pets => this.setState({ pets}));
    
  }
  
  
  }
  
  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
