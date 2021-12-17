import React from 'react'

export default class Editor extends React.Component {
    onClickSubmit = e => {
        e.preventDefault()
        this.props.save_note()
    }

    render() {
        return (
            <div className="Editor">
                <h2>Create note</h2>
                <form onSubmit={this.onClickSubmit}>
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
                <p>Post: {JSON.stringify(this.props.selected_post)}.</p>
            </div>
        )
    }
}
