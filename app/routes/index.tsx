import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import {
  Button,
  QuoteBox,
  quoteBoxLink,
  QuoteText,
  quoteTextLink,
  buttonLink,
  Loader,
  loaderLink,
} from "~/components";

export const links: LinksFunction = () => [
  ...quoteBoxLink(),
  ...quoteTextLink(),
  ...buttonLink(),
  ...loaderLink(),
];

const QuotesGenerator = () => {
  return (
    <QuoteBox quotesContainer>
      <QuoteText quoteText>
        <i class="fas fa-quote-left"></i>
        <span id="quote"></span>
      </QuoteText>

      <QuoteText author>
        <span id="author"></span>
      </QuoteText>

      <div buttonContainer>
        <Button twitterButton>
          <i class="fab fa-twitter"></i>
        </Button>
        <Button newQuote />
      </div>

      <Loader></Loader>
    </QuoteBox>
  );
};

export default QuotesGenerator;
