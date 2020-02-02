import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem'

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    this.props.dispatch({
      type: 'GET_LIST'
    })
  }




  render() {

    
    return (
      <>
      <div className="App">
        <p>Movies</p>
        
      </div>
      <ul>
        {this.props.reduxStore.movies.map ((movie) => {
          return(
            <MovieItem key={movie.id} movie={movie} />
            // <li>{movie.title}</li>
            
          )
        })}
      </ul>
        
      </>
    );

  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
