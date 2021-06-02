import React from 'react'
import './App.css'
import axios from 'axios'
function App() {
    const fn = async () => {
        const res = await axios.get('/api/demo?name=123')
        const condition = 1 + 1 === 2
        if (condition) {
            console.log(res)
        }
    }
    return (
        <div className="App" onClick={fn}>
            123
        </div>
    )
}

export default App
