import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Post">
                <h3>Post: {JSON.stringify(this.props.info)}.</h3>
            </div>
        )
    }
}
