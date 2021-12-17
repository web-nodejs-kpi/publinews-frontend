import React from 'react'
import Post from '../common/Post'

export default class Feed extends React.Component {
    render() {
        return (
            <div className="Feed">
                <h2>Feed</h2>
                {this.props.posts_list.map(post => (
                    <Post
                        key={post.link}
                        info={post}
                        select_post={this.props.select_post}
                    />
                ))}
            </div>
        )
    }
}
