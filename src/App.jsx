import {useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "./redux/actions/mainActions.js";

function App() {
    const dispatch = useDispatch()
    const page = useSelector(({page}) => page)
    const posts = useSelector(({posts}) => posts)

    const nextPage = () => {
        dispatch(getPosts(1))
    }

    const prevPage = () => {
        dispatch(getPosts(-1))
    }

    useEffect(() => {
        dispatch(getPosts(0))
    }, [dispatch])

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
                    <div>{page}</div>
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
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <input type={"button"} onClick={prevPage} value={"Previous"}></input>
                <input type={"button"} onClick={nextPage} value={"Next"}></input>
            </>
    )
}

export default App
