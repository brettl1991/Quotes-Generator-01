import type { LoaderFunction, LinksFunction } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";

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

import { RiTwitterFill } from "react-icons/ri";

export const loader: LoaderFunction = () => {
  const newQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

  return { newQuote };
};

export const links: LinksFunction = () => [
  ...quoteTextLink(),
  ...buttonLink(),
  ...loaderLink(),
  ...globalLink(),
  ...quoteBoxLink(),
  ...loaderLink(),
];

const QuotesGenerator = () => {
  const { newQuote } = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "idle";

  console.log(navigation.state);
  console.log(isLoading);
  return (
    <div>
      {isLoading && <Loader />}

      <QuoteBox>
        <QuoteText longquote={newQuote.text.length > 120} title>
          {newQuote.text}
          {/* <i class="fas fa-quote-left"></i> */}
        </QuoteText>
        <QuoteText>{!newQuote.author ? "Unknown" : newQuote.author}</QuoteText>
        <div>
          <Button twitter>
            <RiTwitterFill />
          </Button>
          <Button>New Quote</Button>
        </div>
      </QuoteBox>
    </div>
  );
};

export default QuotesGenerator;
