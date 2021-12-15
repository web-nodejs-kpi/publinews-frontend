import React from 'react'
import { notes } from '../samples'

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
                <h2>Notes: {JSON.stringify(this.state.notes_list)}.</h2>
            </div>
        )
    }
}
