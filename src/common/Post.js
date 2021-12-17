import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Post">Post: {JSON.stringify(this.props.info)}.</div>
        )
    }
}
