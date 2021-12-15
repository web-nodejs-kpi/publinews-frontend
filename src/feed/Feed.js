import React from 'react'

export default class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: 'world' }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Feed">
                <h2>Hello {this.state.name}.</h2>
            </div>
        )
    }
}
