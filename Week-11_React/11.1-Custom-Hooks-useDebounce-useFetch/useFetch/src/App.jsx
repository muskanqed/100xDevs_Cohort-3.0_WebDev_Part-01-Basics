
import './App.css'
import { usePosts } from './hooks/usePosts';

function App() {
   const Posts = usePosts();

  return (
    <>
      <h1>Posts</h1>
      {Posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )

}

export default App
