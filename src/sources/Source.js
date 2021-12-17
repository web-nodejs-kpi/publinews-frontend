import React from 'react'

export default class Source extends React.Component {
    onClickDelete = () => {
        this.props.delete_source(this.props.info.source_id)
    }

    render() {
        return (
            <div className="Source">
                <br />
                <b>
                    {this.props.info.name}{' '}
                    <button className="delete" onClick={this.onClickDelete}>
                        &times;
                    </button>
                </b>
                <br />
                Social network: {this.props.info.social_network_id}
                <br />
                Link: {this.props.info.link}
                <br />
                Rubric: <i>{this.props.info.rubric}</i>
            </div>
        )
    }
}
