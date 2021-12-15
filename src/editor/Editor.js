import React from 'react'
import { editor_presets } from '../samples'

export default class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { presets: editor_presets }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="Editor">
                <h2>Edit: {JSON.stringify(this.state.presets)}.</h2>
            </div>
        )
    }
}
