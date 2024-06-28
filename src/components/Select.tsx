import { ChevronDownIcon } from '@heroicons/react/24/solid';
import * as RadixSelect from '@radix-ui/react-select';
import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

export type SelectItem = {
  label: string,
  id: string,
}

export type SelectProps = RadixSelect.SelectProps & {
  id?: string,
  label?: string,
  labelProps?: HTMLAttributes<HTMLSpanElement>,
  items?: SelectItem[],
  placeholder?: string,
  selectIcon?: ReactNode,
  prependItem?: ReactNode,
  appendItem?: ReactNode,
  className?: string,
  contentProps?: RadixSelect.SelectContentProps,
  errorMessage?: string,
}

function Select({
  className,
  id,
  items,
  label,
  labelProps,
  placeholder,
  selectIcon,
  prependItem,
  appendItem,
  contentProps,
  errorMessage,
  ...rest
}: SelectProps) {
  return (
    <label htmlFor={id} className="inline-flex flex-col w-full min-w-60">
      {label && (
        <div>
          <span
            className={
              classNames(
                "font-medium text-black leading-6 min-w-60",
                labelProps?.className
              )}>
            {label}
          </span>
        </div>
      )}
      <div className={classNames("flex flex-row w-full bg-slate-200 rounded-xl h-12 outline outline-transparent focus-within:outline-blue-600", className)}>
        <RadixSelect.Root {...rest}>
          <RadixSelect.Trigger className="flex h-full w-full items-center justify-between p-3">
            <span className='flex flex-row items-center gap-2'>
              {prependItem && (
                <span className="flex flex-column items-center justify-center h-full p-2">{prependItem}</span>
              )}
              <RadixSelect.Value placeholder={placeholder} />
            </span>
            <span className='flex flex-row gap-2 items-center'>
              <RadixSelect.Icon>
                <span aria-hidden="true">
                  {selectIcon || <ChevronDownIcon className="w-6 h-6 text-slate-600" />}
                </span>
              </RadixSelect.Icon>
              {appendItem && (
                <span className="flex flex-column items-center justify-center h-full">{appendItem}</span>
              )}
            </span>
          </RadixSelect.Trigger>
          <RadixSelect.Portal>
            <RadixSelect.Content {...contentProps} className={classNames("bg-slate-200 text-slate-900 rounded-xl w-full overflow-hidden", contentProps?.className)}>
              <RadixSelect.Viewport>
                {items?.map((item) => (
                  <RadixSelect.Item
                    key={item.id}
                    value={item.id}
                    className="p-3 w-full first-of-type:rounded-t-xl last-of-type:rounded-b-xl outline-none hover:bg-slate-300 cursor-pointer select-none"
                  >
                    <RadixSelect.ItemText>{item.label}</RadixSelect.ItemText>
                    <RadixSelect.ItemIndicator />
                  </RadixSelect.Item>
                ))}
              </RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </div>
      {errorMessage && (
        <div className="text-xs text-red-500">
          <span>{errorMessage}</span>
        </div>
      )}
    </label>
  )
}

export default Select;