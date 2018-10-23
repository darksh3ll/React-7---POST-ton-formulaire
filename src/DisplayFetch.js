import React, { Component } from 'react'

class DisplayFetch extends Component {
    render () {
        return (
            <div className="comment">
                 <div className="img">
                    <img src={this.props.poster} alt="" srcset=""/>
                </div>
                <div className="comme">
                    <p>{this.props.id}</p>
                <p>{this.props.name}</p>
                <p>{this.props.comment}</p>
                </div>

            </div>
        )
    }
}

export default DisplayFetch