import React from 'react'
import { posts } from '../samples'

export default class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = { posts_list: posts }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Feed">
                <h2>Posts: {JSON.stringify(this.state.posts_list)}.</h2>
            </div>
        )
    }
}
