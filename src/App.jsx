import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useDispatch, useSelector} from "react-redux";
import {clearAllErrors, getPosts} from "./redux/actions/mainActions.js";

function App() {
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const posts = useSelector(({posts}) => posts)

    const nextPage = () => {
        setPage(page + 1)
        dispatch(getPosts(page))
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1)
            dispatch(getPosts(page))
        }
    }

    useEffect(() => {
        dispatch(getPosts(1))
    }, [])

    return (

            <>
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <table>
                        <thead>
                        <tr>
                            <th>URL</th>
                            <th>Is Mal.</th>
                            <th>latency</th>
                        </tr>
                        </thead>
                    <tbody>
                    {posts.map(post => {
                        return (<tr key={post.id}>
                            <td>{post.url}</td>
                            <td>{`${post.isMalicious}`}</td>
                            <td>{post.latency}</td>
                        </tr>)
                    })}
                    </tbody>
                    </table>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <input type={"button"} onClick={() => dispatch(clearAllErrors())} value={"clear"}></input>
                <input type={"button"} onClick={prevPage} value={"Previous"}></input>
                <input type={"button"} onClick={nextPage} value={"Next"}></input>
            </>
    )
}

export default App
