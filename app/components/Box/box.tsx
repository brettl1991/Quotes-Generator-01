import type { LinksFunction } from "@remix-run/node";
import type { BoxType } from "./boxe.type";
import quoteBoxStyle from "./style/box.css";

const quoteBoxLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: quoteBoxStyle,
  },
];

const QuoteBox = ({ children }: BoxType) => {
  return <div className="quote-box-container">{children}</div>;
};

export { QuoteBox, quoteBoxLink };
