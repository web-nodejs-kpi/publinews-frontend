import React from 'react'
import { sources } from '../samples'
import Source from '../sources/Source'

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
                <h2>Sources</h2>
                {this.state.sources_list.map(source => (
                    // eslint-disable-next-line react/jsx-key
                    <Source info={source} />
                ))}
            </div>
        )
    }
}
