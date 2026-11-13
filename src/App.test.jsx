// @vitest-environment jsdom
import { test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import blogData from "./blog";

afterEach(cleanup);

test("renders the blog name and about text from props", () => {
  render(<App />);
  expect(screen.getByText(blogData.name)).toBeTruthy();
  expect(screen.getByText(blogData.about)).toBeTruthy();
});

test("renders every article title from the data", () => {
  render(<App />);
  blogData.articles.forEach((article) => {
    expect(screen.getByText(article.title)).toBeTruthy();
  });
});