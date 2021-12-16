import './App.css'
import Editor from './editor/Editor.js'
import Feed from './feed/Feed.js'
import Notes from './notes/Notes.js'
import Sources from './sources/Sources.js'
import React from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:9000`,
})

export default class App extends React.Component {
    constructor() {
        super()
        api.get('/').then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Publinews</h1>
                <Editor />
                <Feed />
                <Notes />
                <Sources />
            </div>
        )
    }
}
