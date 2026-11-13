import blogData from "./blog";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header name={blogData.name} />
    </div>
  );
}

export default App;