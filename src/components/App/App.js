import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem'
import {HashRouter as Router, Route, Link } from 'react-router-dom'
import Details from '../Details/Details'

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
      <Router>
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
        <Route exact path="/details" component={Details} />
      </ul>
        </Router>
      </>
    );

  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
