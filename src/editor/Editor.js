import React from 'react'
import Post from '../common/Post'
import { posts } from '../samples'

export default class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            post: posts[0],
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
                <Post info={this.state.post} />
            </div>
        )
    }
}
