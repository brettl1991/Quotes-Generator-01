import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import {
  Button,
  QuoteBox,
  QuoteText,
  quoteTextLink,
  buttonLink,
  Loader,
  loaderLink,
  quoteBoxLink,
} from "~/components";
import { globalLink } from "~/components/global/global";

export const links: LinksFunction = () => [
  ...quoteTextLink(),
  ...buttonLink(),
  ...loaderLink(),
  ...globalLink(),
  ...quoteBoxLink(),
];

const QuotesGenerator = () => {
  return (
    <QuoteBox>
      <QuoteText title>
        {/* <i class="fas fa-quote-left"></i> */}
        title
      </QuoteText>

      <QuoteText>author</QuoteText>

      {/* <div buttonContainer>
        <Button twitterButton>
          <i class="fab fa-twitter"></i>
        </Button>
        <Button newQuote />
      </div> */}

      <Loader></Loader>
    </QuoteBox>
  );
};

export default QuotesGenerator;
