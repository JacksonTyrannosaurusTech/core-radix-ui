import { ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

export type ButtonVariant = "solid" | "outline" | "ghost"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, type = "button", ...rest }, ref) => {
  function ButtonVariant(): ButtonProps["className"] {
    switch (variant) {
      case "ghost":
        return "bg-transparent text-black border-transparent"
      case "outline":
        return "text-orange-500 bg-transparent border-orange-500"
      case "solid":
      default:
        return "text-white bg-orange-500 border-transparent"
    }
  }

  return (
    <button
      type={type}
      ref={ref}
      className={classNames(
        "inline-flex items-center justify-center min-w-[120px] h-12 p-3 rounded-xl border-[1px] border-solid font-medium outline outline-transparent focus:outline-blue-600",
        ButtonVariant(),
        className
      )}
      {...rest}
    />
  );
});

export default Button;