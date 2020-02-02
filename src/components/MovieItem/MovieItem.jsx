import React, { Component } from 'react';
import { connect } from 'react-redux'

class MovieItem extends Component {
    render () {
        return (
            <>
                <li key>
                    <div><img src={this.props.movie.poster} alt={this.props.movie.title}/></div>
                    <div>{this.props.movie.title}</div>
                    <div>{this.props.movie.description}</div>
                    
                    </li>
            
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(MovieItem);