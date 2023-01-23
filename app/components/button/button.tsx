import type { LinksFunction } from "@remix-run/node";
import type { buttonType } from "./button.type";
import buttonStyle from "./style/button.css";

const buttonLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: buttonStyle,
  },
];

const Button = ({ children, twitter }: buttonType) => {
  return (
    <button data-button data-new-quote data-fa-twitter data-twitter={twitter}>
      {children}
    </button>
  );
};

export { Button, buttonLink };
