import React from 'react'
import Post from './Post'
import QueryForm from './QueryForm'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

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
                <MDBContainer>
                    {this.props.posts_list.map(post => (
                        <MDBRow key={post.link}>
                            <Post
                                info={post}
                                select_post={this.props.select_post}
                            />
                        </MDBRow>
                    ))}
                </MDBContainer>
            </div>
        )
    }
}
