import type { LinksFunction } from "@remix-run/node";
import quoteTextStyle from "./style/text.css";
import type { TextType } from "./text.type";

const quoteTextLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: quoteTextStyle,
  },
];

const QuoteText = ({ children, title, longquote }: TextType) => {
  return (
    <span data-longquote={longquote} data-text data-title={title}>
      {children}
    </span>
  );
};

export { QuoteText, quoteTextLink };
