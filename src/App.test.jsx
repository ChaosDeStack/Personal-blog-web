import { render, screen } from "@testing-library/react";
import App from "./App";
import blogData from "./blog";

test("renders the blog name and about text from props", () => {
  render(<App />);
  expect(screen.getByText(blogData.name)).toBeInTheDocument();
  expect(screen.getByText(blogData.about)).toBeInTheDocument();
});

test("renders every article title from the data", () => {
  render(<App />);
  blogData.articles.forEach((article) => {
    expect(screen.getByText(article.title)).toBeInTheDocument();
  });
});