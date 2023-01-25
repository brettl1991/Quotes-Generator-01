import type { ReactNode } from "react";

export type buttonType = {
  children: ReactNode;
  twitter?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};
