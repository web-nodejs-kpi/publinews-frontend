import React from 'react'

export default class AddSource extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            link: '',
            rubric: '',
            social_network: '',
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
                <h5>Create source</h5>
                <form>
                    <label>
                        Name:
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Link:
                        <input
                            name="link"
                            type="text"
                            value={this.state.link}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Rubric:
                        <input
                            name="name"
                            type="text"
                            value={this.state.rubric}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Social network:
                        <input
                            name="name"
                            type="text"
                            value={this.state.rubric}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <input type="submit" value="+" />
                </form>
            </div>
        )
    }
}
