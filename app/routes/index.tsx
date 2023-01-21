import type { LoaderFunction, LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
import { quoteList } from "~/server";

export const loader: LoaderFunction = () => {
  //Pick a random quote from an apiQuotes array
  const newQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
  //Check if Author field is blank and replace it with 'Unknown'
  return { newQuote };
};

export const links: LinksFunction = () => [
  ...quoteTextLink(),
  ...buttonLink(),
  ...loaderLink(),
  ...globalLink(),
  ...quoteBoxLink(),
];

const QuotesGenerator = () => {
  const { newQuote } = useLoaderData();
  console.log(newQuote.text.length);

  return (
    <div>
      <QuoteBox>
        <QuoteText longquote={newQuote.text.length > 120} title>
          {newQuote.text}
          {/* <i class="fas fa-quote-left"></i> */}
        </QuoteText>
        <QuoteText>{!newQuote.author ? "Unknown" : newQuote.author}</QuoteText>
        {/* <div buttonContainer>
          <Button twitterButton>
            <i class="fab fa-twitter"></i>
          </Button>
          <Button newQuote />
        </div> */}
        <Loader></Loader>
      </QuoteBox>
    </div>
  );
};

export default QuotesGenerator;
