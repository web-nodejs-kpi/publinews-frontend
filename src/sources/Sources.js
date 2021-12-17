import React from 'react'
import Source from '../sources/Source'
import AddSource from './AddSource'

export default class Sources extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Sources">
                <h2>Sources</h2>
                <AddSource />
                {this.props.sources_list.map(source => (
                    <Source key={source.source_id.toString()} info={source} />
                ))}
            </div>
        )
    }
}
