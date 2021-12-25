import React from 'react'
import Note from '../notes/Note'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

export default class Notes extends React.Component {
    render() {
        return (
            <div className="Notes">
                <MDBContainer>
                    {this.props.notes_list.map(note => (
                        <MDBRow key={note.note_id.toString()}>
                            <Note
                                info={note}
                                delete_note={this.props.delete_note}
                            />
                        </MDBRow>
                    ))}
                </MDBContainer>
            </div>
        )
    }
}
