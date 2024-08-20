import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
  },
];

test("renders a <main> element", () => {
  const { getByRole } = render(<ArticleList posts={posts} />);
  expect(getByRole('main')).toBeInTheDocument();
});

test("renders an Article component for each post passed as a prop", () => {
  const { getAllByTestId } = render(<ArticleList posts={posts} />);
  expect(getAllByTestId('article')).toHaveLength(posts.length);
});

test("renders the correct content in each Article component", () => {
  const { getAllByTestId } = render(<ArticleList posts={posts} />);
  const articles = getAllByTestId('article');

  articles.forEach((article, index) => {
    expect(article).toHaveTextContent(posts[index].title);
    expect(article).toHaveTextContent(posts[index].date);
    expect(article).toHaveTextContent(posts[index].preview);
  });
});

test("handles an empty posts array", () => {
  const { getByRole } = render(<ArticleList posts={[]} />);
  expect(getByRole('main')).toBeEmptyDOMElement();
});
