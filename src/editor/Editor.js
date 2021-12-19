import React from 'react'

export default class Editor extends React.Component {
    onClickSubmit = () => {
        this.props.save_note()
    }

    render() {
        return (
            <div className="Editor">
                <h2>Create note</h2>
                <label>
                    Title:
                    <input
                        name="editor_title"
                        type="text"
                        value={this.props.editor_title}
                        onChange={this.props.handle_input_change}
                    />
                </label>

                <button className="save" onClick={this.onClickSubmit}>
                    Save
                </button>
                <button className="cancel" onClick={this.props.return_to_feed}>
                    Cancel
                </button>
                <div className="Box">
                    <br />
                    <b>{this.props.selected_post.source_name}</b>
                    <br />
                    <p>{this.props.selected_post.content}</p>
                    <br />
                    <a href={this.props.selected_post.link}>original</a>
                    <small> {this.props.selected_post.created_at}</small>
                </div>
                <br />
                <label>
                    Response:
                    <textarea
                        name="editor_response"
                        value={this.props.editor_response}
                        onChange={this.props.handle_input_change}
                    />
                </label>
            </div>
        )
    }
}
