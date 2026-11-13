import blogData from "./blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div>
      <Header name={blogData.name} />
      <About about={blogData.about} />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;