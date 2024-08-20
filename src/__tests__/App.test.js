import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

// Mock data to be used in tests
const mockBlogData = {
  name: "My Blog",
  image: "http://example.com/image.jpg",
  about: "This is a blog about React.",
  articles: [
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
  ],
};

test("renders the App component", () => {
  const { container } = render(<App blogData={mockBlogData} />);
  expect(container.querySelector(".App")).toBeInTheDocument();
});

test("renders the header element inside App", () => {
  const { container } = render(<App blogData={mockBlogData} />);
  expect(container.querySelector(".App header")).toBeInTheDocument();
});

test("renders the aside element inside App", () => {
  const { container } = render(<App blogData={mockBlogData} />);
  expect(container.querySelector(".App aside")).toBeInTheDocument();
});

test("renders the main element inside App", () => {
  const { container } = render(<App blogData={mockBlogData} />);
  expect(container.querySelector(".App main")).toBeInTheDocument();
});
