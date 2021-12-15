import './App.css'
import Editor from './editor/Editor.js'
import Feed from './feed/Feed.js'
import Notes from './notes/Notes.js'
import Sources from './sources/Sources.js'
function App() {
    return (
        <div className="App">
            <h1>Hello world!</h1>
            <Editor />
            <Feed />
            <Notes />
            <Sources />
        </div>
    )
}

export default App
