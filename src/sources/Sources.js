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
                <AddSource
                    source_title={this.props.source_title}
                    source_link={this.props.source_link}
                    source_rubric={this.props.source_rubric}
                    source_network={this.props.source_network}
                    handle_input_change={this.props.handle_input_change}
                />
                {this.props.sources_list.map(source => (
                    <Source
                        key={source.source_id.toString()}
                        info={source}
                        delete_source={this.props.delete_source}
                    />
                ))}
            </div>
        )
    }
}
