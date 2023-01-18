import type { LinksFunction } from "@remix-run/node";
import buttonStyle from "./style/button.css";

const buttonLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: buttonStyle,
  },
];

const Button = () => {
  return (
    <div>
      <button>New Quote</button>
      <button>Tweet</button>
    </div>
  );
};

export { Button, buttonLink };
