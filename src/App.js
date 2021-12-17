import './App.css'
import Editor from './editor/Editor.js'
import Feed from './feed/Feed.js'
import Notes from './notes/Notes.js'
import Sources from './sources/Sources.js'
import React from 'react'
import axios from 'axios'
import { notes, sources, posts, editor_presets } from './samples'

const api = axios.create({
    baseURL: `http://localhost:9000`,
})

export default class App extends React.Component {
    constructor(props) {
        super(props)
        api.get('/').then(res => {
            console.log(res.data)
        })
        this.state = {
            menu: 'notes',
            notes: notes,
            sources: sources,
            posts: posts,
            editor_presets: editor_presets,
        }
    }

    handleMenu = event => {
        const target = event.target
        const name = target.name

        this.setState({
            menu: name,
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Publinews</h1>
                <div className="btn-group">
                    <button onClick={this.handleMenu} name="notes">
                        Notes
                    </button>
                    <button onClick={this.handleMenu} name="feed">
                        Feed
                    </button>
                    <button onClick={this.handleMenu} name="editor">
                        Editor
                    </button>
                    <button onClick={this.handleMenu} name="sources">
                        Sources
                    </button>
                </div>
                {this.state.menu === 'notes' ? <Notes /> : null}
                {this.state.menu === 'feed' ? <Feed /> : null}
                {this.state.menu === 'editor' ? <Editor /> : null}
                {this.state.menu === 'sources' ? <Sources /> : null}
            </div>
        )
    }
}
