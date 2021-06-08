import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
    const [text, setText] = useState('defaultValue')
    const fn = async () => {
        const res = await axios.get('/api/demo?name=123')
        setText(res.data)
    }
    return (
        <div className="App">
            <button onClick={fn}>click me</button>
            <p>server data is: {text}</p>
        </div>
    )
}

export default App
