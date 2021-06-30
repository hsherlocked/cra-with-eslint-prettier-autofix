import { useState, useMemo } from 'react'
import axios from 'axios'
import B from './B/B'

function App() {
    const [name, setName] = useState('defaultName')
    const [age, setAge] = useState(1)
    const [text, setText] = useState('sherlock')

    const onChangeName = () => {
        setName(Math.random())
    }

    const onChangeAge = () => {
        const age = Math.random() * 1000
        setAge(age.toFixed())
    }

    const fn = async () => {
        const res = await axios.get('/api/demo?name=123', {
            // headers: {
            //     'cache-control': 'no-cache,max-age=3',
            // }
        })
        setText(res.data)
    }

    const updateText = text => {
        setText(text)
    }

    const Child = useMemo(() => {
        return <B name={name} age={age} updateText={updateText} />
    }, [name, age]) // name age改变时，重新render B组件

    return (
        <div className="App">
            <button onClick={onChangeName}>改变name</button>
            <button onClick={onChangeAge}>改变age</button>
            <button onClick={fn}>fetch</button>
            <p>{text}</p>
            {Child}
        </div>
    )
}

export default App
