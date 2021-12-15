import React from 'react'
import { notes } from '../samples'
import Note from '../notes/Note'

export default class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.state = { notes_list: notes }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Notes">
                <h2>Notes</h2>
                {this.state.notes_list.map(note => (
                    // eslint-disable-next-line react/jsx-key
                    <Note info={note} />
                ))}
            </div>
        )
    }
}