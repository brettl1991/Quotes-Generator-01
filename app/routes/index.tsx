import type {
  LoaderFunction,
  LinksFunction,
  ActionFunction,
} from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";

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
import { FaQuoteLeft } from "react-icons/fa";

export const action: ActionFunction = async () => {
  const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

  return { randomQuote };
};

export const loader: LoaderFunction = async () => {
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
  const { randomQuote = {} } = useActionData() || {};
  const navigation = useNavigation();

  const isLoading = navigation.state !== "idle";

  console.log(navigation.state);
  console.log(isLoading);

  function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${
      newQuote?.text
    } - ${newQuote.author ?? "Unknown"}`;

    window.open(twitterURL, "_blank");
  }

  return (
    <div>
      {isLoading ? <Loader /> : ""}
      <Form method="post">
        <QuoteBox>
          <QuoteText longquote={newQuote.text.length > 120} title>
            <FaQuoteLeft className="fa-quote-left" />
            {randomQuote?.text || newQuote.text}
            {/* <i class="fas fa-quote-left"></i> */}
          </QuoteText>
          <div>
            <QuoteText author>{newQuote.author ?? "Unknown"}</QuoteText>
          </div>
          <div data-button-container>
            <Button onClick={tweetQuote} twitter>
              <RiTwitterFill />
            </Button>
            <Button type="submit">New Quote</Button>
          </div>
        </QuoteBox>
      </Form>
    </div>
  );
};

export default QuotesGenerator;
