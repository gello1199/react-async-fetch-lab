// create your App component here

import React from 'react'

export default class App extends React.Component {

    state = {
        people: [],
    }

    render() {
        return(
            <div>
            <h1>All People in Space</h1>
                <ul>
                    {this.state.people.map(p => <li>{p.name}</li>)}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                people: data.people,
            })
        })
    }
}