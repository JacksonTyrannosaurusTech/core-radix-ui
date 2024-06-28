import { Fragment, HTMLAttributes } from "react";
import { ButtonProps } from "./Button";
import classNames from "classnames";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export type Progress = HTMLAttributes<HTMLDivElement> & {
  progressItemProps?: Omit<ButtonProps, "onPress">,
  length: number,
  step: number,
  onSeek?: (index: number) => void,
}

export type ProgressItemProps = ButtonProps & {
  isComplete?: boolean,
  isActive?: boolean,
  step?: string,
}

export function ProgressItem({
  className,
  step = "1",
  isComplete = false,
  isActive = false,
  ...rest
}: ProgressItemProps) {
  return (
    <button
      type="button"
      className={
        classNames(
          "inline-block p-0 m-0 items-center justify-center rounded-full text-white bg-slate-300",
          {
            "!bg-orange-500": isActive || isComplete
          },
          className
        )}
      {...rest}
    >
      <span className="flex h-7 w-7 p-0.5 items-center justify-center">
        {isComplete ? <CheckCircleIcon /> : <span className="text-sm">{step}</span>}
      </span>
    </button>
  )
}

function Progress({
  className,
  length,
  step,
  progressItemProps,
  onSeek,
  ...rest
}: Progress) {
  const stepArray = Array.from({ length }, (_, i) => {
    const props = {
      isActive: i == step,
      isComplete: i < step,
      step: (i + 1).toString(),
    }

    return (
      <Fragment key={i}>
        {i !== 0 && (
          <hr
            className={
              classNames("border border-solid border-slate-300 flex-1", {
                "!border-orange-500": props.isActive || props.isComplete
              })}
          />
        )}

        <ProgressItem
          onClick={() => onSeek?.(i)}
          {...progressItemProps}
          {...props}
        />
      </Fragment>
    )
  });

  return (
    <div className={classNames("w-full flex flex-row items-center gap-2 min-w-96", className)} {...rest}>
      {stepArray}
    </div>
  )
}

export default Progress;
