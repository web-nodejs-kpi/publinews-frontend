import React from 'react'

export default class AddSource extends React.Component {
    render() {
        return (
            <div className="Editor">
                <h5>Create source</h5>
                <form>
                    <label>
                        Name:
                        <input
                            name="source_title"
                            type="text"
                            value={this.props.source_title}
                            onChange={this.props.handle_input_change}
                        />
                    </label>
                    <label>
                        Link:
                        <input
                            name="source_link"
                            type="text"
                            value={this.props.source_link}
                            onChange={this.props.handle_input_change}
                        />
                    </label>
                    <label>
                        Rubric:
                        <input
                            name="source_rubric"
                            type="text"
                            value={this.props.source_rubric}
                            onChange={this.props.handle_input_change}
                        />
                    </label>
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
                    <input type="submit" value="+" />
                </form>
            </div>
        )
    }
}
