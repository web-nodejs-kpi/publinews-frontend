import React from 'react'
import { sources } from '../samples'

export default class Sources extends React.Component {
    constructor(props) {
        super(props)
        this.state = { sources_list: sources }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Sources">
                <h2>Sources: {JSON.stringify(this.state.sources_list)}.</h2>
            </div>
        )
    }
}
