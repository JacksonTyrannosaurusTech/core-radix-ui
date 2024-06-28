import classNames from "classnames";
import { HTMLAttributes, InputHTMLAttributes, ReactNode, forwardRef } from "react";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string,
  labelProps?: HTMLAttributes<HTMLSpanElement>,
  prependItem?: ReactNode,
  appendItem?: ReactNode,
  errorMessage?: string,
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  id,
  className,
  label,
  labelProps,
  type = "text",
  prependItem,
  appendItem,
  errorMessage,
  ...rest
}, ref) => {
  return (
    <label htmlFor={id} className="inline-flex flex-col w-full min-w-60">
      {label && (
        <span
          {...labelProps}
          className={
            classNames(
              "font-medium text-black leading-6 min-w-60",
              labelProps?.className
            )
          }>
          {label}
        </span>
      )}
      <div className={classNames(className, "flex flex-row w-full bg-slate-200 rounded-xl h-12 outline outline-transparent focus-within:outline-blue-600")}>
        {prependItem && (
          <span className="flex flex-column items-center justify-center h-full p-2">{prependItem}</span>
        )}
        <input
          id={id}
          ref={ref}
          type={type}
          className={
            classNames(
              "bg-transparent p-3 flex-1 rounded-xl text-slate-900 placeholder:text-slate-500 outline-none",
              {
                "rounded-l-none pl-0": !!prependItem,
                "rounded-r-none pr-0": !!appendItem,
              }
            )}
          {...rest}
        />
        {appendItem && (
          <span className="flex flex-column items-center justify-center h-full p-2">{appendItem}</span>
        )}
      </div>
      {errorMessage && (
        <div className="text-xs text-red-500">
          <span>{errorMessage}</span>
        </div>
      )}
    </label>
  )
});

export default TextInput;
