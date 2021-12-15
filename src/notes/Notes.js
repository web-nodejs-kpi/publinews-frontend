import React from 'react'

export default class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: 'world' }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Notes">
                <h2>Hello {this.state.name}.</h2>
            </div>
        )
    }
}
