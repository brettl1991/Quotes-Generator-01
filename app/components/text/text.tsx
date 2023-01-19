import type { LinksFunction } from "@remix-run/node";
import quoteTextStyle from "./style/text.css";
import type { TextType } from "./text.type";

const quoteTextLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: quoteTextStyle,
  },
];

const QuoteText = ({ children, title }: TextType) => {
  return (
    <span data-author data-title={title}>
      {children}
    </span>
  );
};

export { QuoteText, quoteTextLink };
