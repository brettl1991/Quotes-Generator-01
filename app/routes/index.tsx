import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import { QuoteBox, quoteBoxLink } from "~/components";

export const links: LinksFunction = () => [...quoteBoxLink()];

const QuotesGenerator = () => {
  return <QuoteBox />;
};

export default QuotesGenerator;
