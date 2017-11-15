import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            filters: [],
            currentFilter: null,
            fruit: []
        }
    }

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ selectedFilter: event.target.value });
    }

    componentWillMount(){
        this.fetchFruitList()
        this.fetchFilters()
    }


    fetchFruitList = () => {
        fetch('/api/fruit')
          .then(response => response.json())
          .then(items => this.setState({ items }));
      }    

    fetchFilters = () => {
        fetch('/api/fruit_types')
          .then(response => response.json())
          .then(filters => this.setState({ filters }));
      }


    render(){
        return (
            <FruitBasket onUpdateFilter={this.handleFilterChange} currentFilter={this.state.selectedFilter} fruit={this.state.fruit} filters={this.state.filters} />
        )
    }

    
}



export default App;
