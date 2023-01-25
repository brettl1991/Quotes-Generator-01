import type { LinksFunction } from "@remix-run/node";
import quoteTextStyle from "./style/text.css";
import type { TextType } from "./text.type";

const quoteTextLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: quoteTextStyle,
  },
];

const QuoteText = ({ children, title, author, longquote }: TextType) => {
  return (
    <span
      data-longquote={longquote}
      data-text
      data-title={title}
      data-quote-author={author}
    >
      {children}
    </span>
  );
};

export { QuoteText, quoteTextLink };
