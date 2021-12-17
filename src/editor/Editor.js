import React from 'react'
import Post from '../common/Post'

export default class Editor extends React.Component {
    render() {
        return (
            <div className="Editor">
                <h2>Create note</h2>
                <form>
                    <label>
                        Title:
                        <input
                            name="editor_title"
                            type="text"
                            value={this.props.editor_title}
                            onChange={this.props.handle_input_change}
                        />
                    </label>

                    <label>
                        Response:
                        <input
                            name="editor_response"
                            type="text"
                            value={this.props.editor_response}
                            onChange={this.props.handle_input_change}
                        />
                    </label>
                    <input type="submit" value="Save Note" />
                    <input type="submit" value="Return" />
                </form>
                <Post
                    info={this.props.selected_post}
                    select_post={this.props.select_post}
                />
            </div>
        )
    }
}
