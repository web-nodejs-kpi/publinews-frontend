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
                Note: {JSON.stringify(this.props.info)}.
                <button className="delete">&times;</button>
            </div>
        )
    }
}
