import React from 'react'
import Note from '../notes/Note'

export default class Notes extends React.Component {
    render() {
        return (
            <div className="Notes">
                <h2>Notes</h2>
                {this.props.notes_list.map(note => (
                    <Note
                        key={note.note_id.toString()}
                        info={note}
                        delete_note={this.props.delete_note}
                    />
                ))}
            </div>
        )
    }
}
