import type { LinksFunction } from "@remix-run/node";
import quoteBoxStyle from "./style/box.css";

const quoteBoxLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: quoteBoxStyle,
  },
];

const QuoteBox = () => {
  return (
    <div>
      <p>Hello Cajja</p>
    </div>
  );
};

export { QuoteBox, quoteBoxLink };
