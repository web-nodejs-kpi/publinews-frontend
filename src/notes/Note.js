import React from 'react'

export default class Note extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Note">
                <h3>Note: {JSON.stringify(this.props.info)}.</h3>
            </div>
        )
    }
}
