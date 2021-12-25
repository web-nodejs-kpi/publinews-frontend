import React from 'react'
import Post from './Post'
import QueryForm from './QueryForm'

export default class Feed extends React.Component {
    render() {
        return (
            <div className="Feed">
                <QueryForm
                    rubrics={this.props.rubrics}
                    selected_rubric={this.props.selected_rubric}
                    handle_input_change={this.props.handle_input_change}
                    refresh_feed={this.props.refresh_feed}
                />
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
