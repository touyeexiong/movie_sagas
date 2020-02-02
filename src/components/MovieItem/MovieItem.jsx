import React, { Component } from 'react';
import { connect } from 'react-redux'

class MovieItem extends Component {

    handleDes = (event) => {
        console.log('clicked on poster!');

    }
    render () {

        return (
            <>
                <li key>
                    <span><div><h2>{this.props.movie.title}</h2></div>
                        <div>{this.props.movie.description}</div></span>
                    
                    <span><img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.handleDes} /></span>
                    </li>
            
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(MovieItem);