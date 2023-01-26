import type { LinksFunction } from "@remix-run/node";

import loaderStyle from "./style/loader.css";

const loaderLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: loaderStyle,
  },
];

const Loader = () => {
  return <div data-loader />;
};

export { Loader, loaderLink };
