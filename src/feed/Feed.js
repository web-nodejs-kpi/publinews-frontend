import React from 'react'
import { posts } from '../samples'
import Post from './Post'

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
                <h2>Feed</h2>
                {this.state.posts_list.map(post => (
                    // eslint-disable-next-line react/jsx-key
                    <Post info={post} />
                ))}
            </div>
        )
    }
}
