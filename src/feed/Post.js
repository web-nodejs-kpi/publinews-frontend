import React from 'react'

export default class Post extends React.Component {
    onClickPost = e => {
        e.preventDefault()
        this.props.select_post(this.props.info)
    }

    render() {
        return (
            <div className="Post">
                <br />
                <b>
                    {this.props.info.source_name}{' '}
                    <button className="note" onClick={this.onClickPost}>
                        Note
                    </button>
                </b>
                <br />
                <p>{this.props.info.text}</p>
                <br />
                <a href={this.props.info.link}>original</a>
                <small> {this.props.info.created_at}</small>
            </div>
        )
    }
}
