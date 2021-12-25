import React from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'

export default class AddSource extends React.Component {
    onClickSubmit = () => {
        this.props.save_note()
    }
    render() {
        return (
            <div>
                <MDBInput
                    label="Name"
                    id="source_title"
                    name="source_title"
                    type="text"
                    value={this.props.source_title}
                    onChange={this.props.handle_input_change}
                />
                <MDBInput
                    label="Link"
                    id="source_link"
                    name="source_link"
                    type="text"
                    value={this.props.source_link}
                    onChange={this.props.handle_input_change}
                />
                <MDBInput
                    label="Rubric"
                    id="source_rubric"
                    name="source_rubric"
                    type="text"
                    value={this.props.source_rubric}
                    onChange={this.props.handle_input_change}
                />
                <label>
                    Social network:
                    <select
                        name="source_network"
                        value={this.props.source_network}
                        onChange={this.props.handle_input_change}
                    >
                        {this.props.networks.map(network => {
                            return (
                                <option
                                    key={network.social_network_id}
                                    value={network.social_network_id}
                                >
                                    {network.name}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <br />
                <MDBBtn onClick={this.props.save_source}>Save</MDBBtn>
            </div>
        )
    }
}
