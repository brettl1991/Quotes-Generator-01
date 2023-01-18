import type { LinksFunction } from "@remix-run/node";
import quoteTextStyle from "./style/text.css";

const quoteTextLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: quoteTextStyle,
  },
];

const QuoteText = () => {
  return (
    <div>
      <p>I am a text</p>
    </div>
  );
};

export { QuoteText, quoteTextLink };
