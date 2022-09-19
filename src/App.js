import logo from "./logo.svg"
import "./App.css"
import { useEffect, useRef, useState } from "react"
import { useFetch } from "./Hooks/useFetch"
export const App = ()  => {
  const [postId, setPostId] = useState('')

  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts' + postId, {
    headers: {
      abc: '2000000'
    }
  })
  
  useEffect(() => {
    
  }, [postId])

  if (loading) {
    return <p>Loading...</p>
  }
  const handleClick = (id) => {
    console.log(postId)
   setPostId(id)
  
  }

  if (!loading && result) {
    return ( <div>
      {result && result.map(p => (
        <div  key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
          <p>{p.title}</p>
        </div>
      ))}
    </div>)
  }
  return <div className="App">
    <h1>oi</h1>
  </div>
}

