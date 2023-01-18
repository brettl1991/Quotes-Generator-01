import type { LinksFunction } from "@remix-run/node";

import loaderStyle from "./style/loader.css";

const loaderLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: loaderStyle,
  },
];

const Loader = () => {
  return (
    <div>
      <p>I will be a loader</p>
    </div>
  );
};

export { Loader, loaderLink };
