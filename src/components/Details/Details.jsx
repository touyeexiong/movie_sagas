import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {
    render () {
        return (
            <>
            {JSON.stringify(this.props.reduxStore.details)}
            </>
        )
    }
}




const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Details);