import React from 'react'

export default class Sources extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: 'world' }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Sources">
                <h2>Hello {this.state.name}.</h2>
            </div>
        )
    }
}
