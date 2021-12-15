import React from 'react'

export default class Source extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Source">
                <h3>Source: {JSON.stringify(this.props.info)}.</h3>
            </div>
        )
    }
}
