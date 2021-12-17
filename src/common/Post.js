import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    onClickPost = e => {
        this.props.select_post(e.target.getAttribute('data-info'))
    }

    render() {
        return (
            <div
                className="Post"
                onClick={this.onClickPost}
                data-info={JSON.stringify(this.props.info)}
            >
                Post: {JSON.stringify(this.props.info)}.
            </div>
        )
    }
}
