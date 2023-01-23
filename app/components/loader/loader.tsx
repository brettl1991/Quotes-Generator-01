import type { LinksFunction } from "@remix-run/node";
import type { LoaderType } from "./loader.type";

import loaderStyle from "./style/loader.css";

const loaderLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: loaderStyle,
  },
];

const Loader = ({ loader }: LoaderType) => {
  return <div data-loader></div>;
};

export { Loader, loaderLink };
