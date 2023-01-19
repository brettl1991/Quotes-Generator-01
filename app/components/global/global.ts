import type { LinksFunction } from "@remix-run/node";

import globalStyle from "./general.css";

export const globalLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalStyle,
  },
];
