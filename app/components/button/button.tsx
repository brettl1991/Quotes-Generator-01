import type { LinksFunction } from "@remix-run/node";
import type { buttonType } from "./button.type";
import buttonStyle from "./style/button.css";

const buttonLink: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: buttonStyle,
  },
];

const Button = ({
  children,
  twitter,
  type = "button",
  onClick,
}: buttonType) => {
  return (
    <button
      type={type}
      data-button
      data-new-quote
      data-fa-twitter
      data-twitter={twitter}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button, buttonLink };
