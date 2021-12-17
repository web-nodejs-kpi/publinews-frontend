import React from 'react'

export default class Source extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    onClickDelete = () => {
        console.log('aaa')
        this.props.delete_source(this.props.info.source_id)
    }

    render() {
        return (
            <div className="Source">
                Source: {JSON.stringify(this.props.info)}.
                <button className="delete" onClick={this.onClickDelete}>
                    &times;
                </button>
            </div>
        )
    }
}
