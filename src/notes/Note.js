import React from 'react'

export default class Note extends React.Component {
    onClickDelete = () => {
        this.props.delete_note(this.props.info.note_id)
    }

    render() {
        return (
            <div className="Note">
                <br />
                <b>
                    {this.props.info.headline}{' '}
                    <button className="delete" onClick={this.onClickDelete}>
                        &times;
                    </button>
                </b>
                <p>{this.props.info.content}</p>
                Source: <i>{this.props.info.source_id}</i>
                <br />
                <a href={this.props.info.link}>original</a>{' '}
                <small>saved {this.props.info.created_at}</small>
            </div>
        )
    }
}
