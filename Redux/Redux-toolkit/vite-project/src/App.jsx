import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";

function App() {
  return (
    <>
      <h3>Counter App</h3>
      <CounterView />
      <PostsView />
    </>
  );
}

export default App;
