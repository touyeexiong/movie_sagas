import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    this.getList();
  }

  getList() {
    this.props.dipatch({
      type: 'GET_LIST'
    })
  }

  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
