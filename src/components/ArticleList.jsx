import Article from "./Article";

// ArticleList.jsx - loops over the articles and renders an Article for each. Child of App.
function ArticleList({ articles }) {
  return (
    <section>
      <h2>Articles</h2>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </section>
  );
}

export default ArticleList;