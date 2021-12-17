import React from 'react'
import Post from '../common/Post'

export default class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            response: '',
        }
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Editor">
                <h2>Create note</h2>
                <form>
                    <label>
                        Title:
                        <input
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                    </label>

                    <label>
                        Response:
                        <input
                            name="response"
                            type="text"
                            value={this.state.response}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <input type="submit" value="Save Note" />
                    <input type="submit" value="Return" />
                </form>
                <Post
                    info={this.props.selected_post}
                    select_post={this.props.select_post}
                />
            </div>
        )
    }
}
