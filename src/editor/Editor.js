import React from 'react'

export default class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: 'world' }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Editor">
                <h2>Hello {this.state.name}.</h2>
            </div>
        )
    }
}
