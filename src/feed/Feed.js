import React from 'react'
import Post from '../common/Post'

export default class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Feed">
                <h2>Feed</h2>
                <Post
                    key={this.props.posts_list[0].link}
                    info={this.props.posts_list[0]}
                    select_post={this.props.select_post}
                />
            </div>
        )
    }
}
