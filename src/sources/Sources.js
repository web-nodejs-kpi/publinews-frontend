import React from 'react'
import Source from '../sources/Source'
import AddSource from './AddSource'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

export default class Sources extends React.Component {
    render() {
        return (
            <div className="Sources">
                <AddSource
                    networks={this.props.networks}
                    source_title={this.props.source_title}
                    source_link={this.props.source_link}
                    source_rubric={this.props.source_rubric}
                    source_network={this.props.source_network}
                    handle_input_change={this.props.handle_input_change}
                    save_source={this.props.save_source}
                />
                <MDBContainer>
                    {this.props.sources_list.map(source => (
                        <MDBRow key={source.source_id.toString()}>
                            <Source
                                info={source}
                                delete_source={this.props.delete_source}
                            />
                        </MDBRow>
                    ))}
                </MDBContainer>
            </div>
        )
    }
}
