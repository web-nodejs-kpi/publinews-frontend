import './App.css'
import Editor from './editor/Editor.js'
import Feed from './feed/Feed.js'
import Notes from './notes/Notes.js'
import Sources from './sources/Sources.js'
import React from 'react'
import axios from 'axios'
import Menu from './common/Menu.js'

const api = axios.create({
    baseURL: `http://localhost:9000`,
})

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: 'notes',
            selected_post: '',
            editor_title: '',
            editor_response: '',
            source_title: '',
            source_rubric: '',
            source_link: '',
            source_network: 1,
            selected_rubric: '',
            rubrics: [],

            sources: [],
            notes: [],
            networks: [],

            posts: [],
        }
    }

    componentDidMount() {
        this.getNotes()
        this.getSources()
        this.getNetworks()
    }

    handleMenu = event => {
        const target = event.target
        const name = target.name

        this.setState({
            menu: name,
        })
    }

    selectPost = post => {
        this.setState({ selected_post: post })
        this.setState({ menu: 'editor' })
        this.setState({
            editor_title: post.content.slice(0, 20),
        })
        this.setState({
            editor_response: `RE:\n"\n${post.content}\n"\n`,
        })
    }

    deleteNote = async note_id => {
        await api.delete('/notes/' + note_id)
        this.getNotes()
    }

    deleteSource = async source_id => {
        await api.delete('/sources/' + source_id)
        this.getSources()
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    saveSource = async () => {
        const new_source = {
            source_name: this.state.source_title,
            link: this.state.source_link,
            rubric: this.state.source_rubric,
            social_network_id: this.state.source_network,
        }
        await api.post('/sources/', new_source)
        this.setState({ source_title: '' })
        this.setState({ source_rubric: '' })
        this.setState({ source_link: '' })
        this.getSources()
    }

    saveNote = async () => {
        const new_note = {
            link: this.state.selected_post.link,
            headline: this.state.editor_title,
            content: this.state.editor_response,
        }
        await api.post('/notes/', new_note)
        this.setState({ editor_title: '' })
        this.setState({ editor_response: '' })
        this.setState({ selected_post: '' })
        this.setState({ menu: 'notes' })
        this.getNotes()
    }

    returnToFeed = () => {
        this.setState({ editor_title: '' })
        this.setState({ editor_response: '' })
        this.setState({ selected_post: '' })
        this.setState({ menu: 'feed' })
    }

    getNotes = () => {
        api.get('/notes/').then(res => this.setState({ notes: res.data }))
    }

    getSources = () => {
        api.get('/sources/').then(res => {
            this.setState({ sources: res.data })
            const rubrics = this.state.sources
                .map(source => source.rubric)
                .filter((v, i, a) => a.indexOf(v) === i)
            this.setState({ rubrics: [' ', ...rubrics] })
            this.setState({ selected_rubric: ' ' })
        })
    }

    getFeed = () => {
        api.get('/news/' + this.state.selected_rubric).then(res =>
            this.setState({ posts: res.data })
        )
    }

    getNetworks = () => {
        api.get('/social_networks/').then(res =>
            this.setState({ networks: res.data })
        )
    }

    render() {
        return (
            <div className="App">
                <Menu
                    current_menu={this.state.menu}
                    handle_menu={this.handleMenu}
                />
                {this.state.menu === 'notes' ? (
                    <Notes
                        notes_list={this.state.notes}
                        delete_note={this.deleteNote}
                    />
                ) : null}
                {this.state.menu === 'feed' ? (
                    <Feed
                        selected_rubric={this.state.selected_rubric}
                        rubrics={this.state.rubrics}
                        posts_list={this.state.posts}
                        select_post={this.selectPost}
                        handle_input_change={this.handleInputChange}
                        refresh_feed={this.getFeed}
                    />
                ) : null}
                {this.state.menu === 'editor' ? (
                    <Editor
                        selected_post={this.state.selected_post}
                        select_post={this.selectPost}
                        editor_title={this.state.editor_title}
                        editor_response={this.state.editor_response}
                        handle_input_change={this.handleInputChange}
                        save_note={this.saveNote}
                        return_to_feed={this.returnToFeed}
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
