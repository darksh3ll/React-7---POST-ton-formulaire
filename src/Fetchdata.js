import React, { Component } from 'react'
import DisplayFetch from './DisplayFetch';

class Fetchdata extends Component {
    state = {
    commentaires:[]
    };

    componentDidMount(){
        fetch("http://92.175.11.66:3001/api/quests/movies/")
        .then(response => response.json())
        .then(response => this.setState({commentaires:response}))
    }
    render () {
        return (
            <div>
                {
                    this.state.commentaires.map((x,key) => {
                        return (
                            <DisplayFetch
                                key={key}
                                id = {x.id}
                                name= {x.name}
                                poster={x.poster}
                                comment={x.comment}

                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Fetchdata