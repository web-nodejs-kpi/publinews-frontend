import React from 'react'

export default class Note extends React.Component {
    onClickDelete = () => {
        this.props.delete_note(this.props.info.note_id)
    }

    render() {
        return (
            <div className="Note">
                Note: {JSON.stringify(this.props.info)}.
                <button className="delete" onClick={this.onClickDelete}>
                    &times;
                </button>
            </div>
        )
    }
}
