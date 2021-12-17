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
                Source: {JSON.stringify(this.props.info)}.
                <button className="delete">&times;</button>
            </div>
        )
    }
}
