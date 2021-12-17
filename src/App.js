import './App.css'
import Editor from './editor/Editor.js'
import Feed from './feed/Feed.js'
import Notes from './notes/Notes.js'
import Sources from './sources/Sources.js'
import React from 'react'
import axios from 'axios'
import { notes, sources, posts, networks } from './samples'

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
            selected_post: '',
            editor_title: '',
            editor_response: '',
            source_title: '',
            source_rubric: '',
            source_link: '',
            source_network: 1,

            sources: sources,
            notes: notes,
            networks: networks,

            posts: posts,
        }
    }

    handleMenu = event => {
        const target = event.target
        const name = target.name

        this.setState({
            menu: name,
        })
    }

    selectPost = post => {
        this.setState({ selected_post: JSON.parse(post) })
    }

    deleteNote = note_id => {
        this.setState(state => {
            return {
                notes: state.notes.filter(note => note.note_id !== note_id),
            }
        })
    }

    deleteSource = source_id => {
        this.setState(state => {
            return {
                sources: state.sources.filter(
                    source => source.source_id !== source_id
                ),
            }
        })
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    saveSource = () => {
        const new_source = {
            source_id: Math.floor(Math.random() * 1000),
            name: this.state.source_title,
            link: this.state.source_link,
            rubric: this.state.source_rubric,
            social_network_id: this.state.source_network,
        }
        this.setState(state => {
            return {
                sources: [...state.sources, new_source],
            }
        })
        this.setState({ source_title: '' })
        this.setState({ source_rubric: '' })
        this.setState({ source_link: '' })
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
                {this.state.menu === 'notes' ? (
                    <Notes
                        notes_list={this.state.notes}
                        delete_note={this.deleteNote}
                    />
                ) : null}
                {this.state.menu === 'feed' ? (
                    <Feed
                        posts_list={this.state.posts}
                        select_post={this.selectPost}
                    />
                ) : null}
                {this.state.menu === 'editor' ? (
                    <Editor
                        selected_post={this.state.selected_post}
                        select_post={this.selectPost}
                        editor_title={this.state.editor_title}
                        editor_response={this.state.editor_response}
                        handle_input_change={this.handleInputChange}
                    />
                ) : null}
                {this.state.menu === 'sources' ? (
                    <Sources
                        networks={this.state.networks}
                        sources_list={this.state.sources}
                        delete_source={this.deleteSource}
                        source_title={this.state.source_title}
                        source_link={this.state.source_link}
                        source_rubric={this.state.source_rubric}
                        source_network={this.state.source_network}
                        handle_input_change={this.handleInputChange}
                        save_source={this.saveSource}
                    />
                ) : null}
            </div>
        )
    }
}
