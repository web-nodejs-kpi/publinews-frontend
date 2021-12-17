import React from 'react'

export default class Post extends React.Component {
    onClickPost = e => {
        e.preventDefault()
        this.props.select_post(this.props.info)
    }

    render() {
        return (
            <div className="Post">
                Post: {JSON.stringify(this.props.info)}.
                <button className="note" onClick={this.onClickPost}>
                    Note
                </button>
            </div>
        )
    }
}
